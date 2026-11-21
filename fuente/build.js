// Construye la web a partir de /fuente.
// Uso: node build.js [carpeta_publicacion]
//  - temas/NN.md       -> ../temas/NN.js  (TEMARIO[n]="...") y ../temas/indice.js
//                         ../temas/expres.js (sección «Ideas que más caen» de cada tema)
//  - preguntas/NN.txt  -> ../preguntas.js (PREGUNTAS[n]=[[pregunta,[correcta,...],explicación,referencia],...])
//  - diagramas.js, examenes.js, datos.js -> se copian tal cual
//  - index.html        -> ../index.html   (con doctype, para abrirla en local)
//  - si se indica carpeta_publicacion, copia allí todo lo necesario para publicar el artifact
const fs = require("fs"), path = require("path");
const F = __dirname, R = path.join(F, "..");
const outT = path.join(R, "temas");
fs.mkdirSync(outT, { recursive: true });

/* Temas desarrollados */
const indice = {}, expres = {}, mapas = {};
let total = 0;
for (const f of fs.readdirSync(path.join(F, "temas")).filter(f => /^\d\d\.md$/.test(f)).sort()) {
  const n = parseInt(f, 10);
  const md = fs.readFileSync(path.join(F, "temas", f), "utf8").replace(/\r/g, "");
  const w = (md.replace(/^::diagrama .*$/gm, "").replace(/[#|*>`\-[\]]/g, " ").match(/\S+/g) || []).length;
  const h = [...md.matchAll(/^## (.+)$/gm)].map(m => m[1].replace(/\*\*|`/g, ""));
  indice[n] = { w, h };
  total += w;
  const i0 = md.search(/^## [^\n]*Ideas que más caen/m);
  if (i0 >= 0) {
    const resto = md.slice(i0).split("\n").slice(1).join("\n");
    const j = resto.search(/^## /m);
    expres[n] = (j >= 0 ? resto.slice(0, j) : resto).split("\n").map(l => l.replace(/^>\s?/, "")).join("\n").trim();
  } else console.warn("Tema " + n + ": sin sección «Ideas que más caen»");
  mapas[n] = mapaDe(md);
  fs.writeFileSync(path.join(outT, f.replace(".md", ".js")), `TEMARIO[${n}]=${JSON.stringify(md)};\n`);
}
fs.writeFileSync(path.join(outT, "indice.js"), `var TEMARIO={};var TEMARIO_INDICE=${JSON.stringify(indice)};\n`);
fs.writeFileSync(path.join(outT, "mapas.js"), `var MAPAS=${JSON.stringify(mapas)};\n`);

/* Mapa mental de un tema: ramas = apartados «##», subramas = «###» y conceptos en negrita de cada apartado.
   Los identificadores sN siguen la misma numeración que el lector (cada título fuera de bloques de código). */
function mapaDe(md) {
  const ramas = []; let hn = 0, cod = false, r = null;
  const limpio = s => s.replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, "$1").replace(/\*\*|`|_/g, "").trim();
  md.split("\n").forEach(l => {
    if (l.trim().startsWith("```")) { cod = !cod; return; }
    if (cod) return;
    const m = l.match(/^(#{1,4})\s+(.*)$/);
    if (m) {
      hn++; const t = limpio(m[2]);
      if (m[1].length <= 2) { r = /Ideas que más caen/.test(t) ? null : { t, sec: "s" + hn, k: [], kw: [] }; if (r) ramas.push(r); }
      else if (m[1].length === 3 && r) r.k.push({ t, sec: "s" + hn });
      return;
    }
    if (!r || r.kw.length >= 6 || l.startsWith(">")) return;
    for (const b of l.matchAll(/\*\*([^*]{2,38})\*\*/g)) {
      const w = limpio(b[1]).replace(/[.:,;]$/, "");
      const suelta = !/^[p{L}d]/u.test(w) || /^(y|o|e|de|del|la|el|los|las|lo|a|al|en|que|se|su|sus|con|por|para|un|una|no|ni|si|como|más|podrán?|puede|pueden|debe|deben|es|son|ha|han)\b/i.test(w) || w.split(/\s+/).length > 5 || /[a-záéíóú]$/.test(w) && w.split(/\s+/).length > 3 && w === w.toLowerCase();
      if (!suelta && w.length >= 3 && !/^\d+$/.test(w) && !r.kw.some(x => x.toLowerCase() === w.toLowerCase()) && r.kw.length < 6) r.kw.push(w);
    }
  });
  return ramas;
}
fs.writeFileSync(path.join(outT, "expres.js"), `var EXPRES=${JSON.stringify(expres)};\n`);

/* Banco de preguntas ampliado
   Formato de cada pregunta en preguntas/NN.txt:
     ? enunciado
     + respuesta correcta
     - incorrecta (tres)
     = explicación (opcional)
     @ referencia (opcional): BOE-A-xxxx#art o RGPD#art */
const PQ = {};
let nq = 0;
const dirP = path.join(F, "preguntas");
if (fs.existsSync(dirP)) for (const f of fs.readdirSync(dirP).filter(f => /^\d\d\.txt$/.test(f)).sort()) {
  const n = parseInt(f, 10), out = [];
  let cur = null;
  const fin = () => {
    if (!cur) return;
    if (!cur.ok || cur.no.length !== 3) throw new Error(`${f}: pregunta mal formada: «${cur.q}» (${cur.ok ? 1 : 0} correcta, ${cur.no.length} incorrectas)`);
    const r = [cur.q, [cur.ok, ...cur.no], cur.x || ""];
    if (cur.r) r.push(cur.r);
    out.push(r); cur = null;
  };
  fs.readFileSync(path.join(dirP, f), "utf8").replace(/\r/g, "").split("\n").forEach((l, i) => {
    if (!l.trim() || l.startsWith("#")) return;
    const c = l[0], v = l.slice(1).trim();
    if (c === "?") { fin(); cur = { q: v, no: [] }; return; }
    if (!cur) throw new Error(`${f}:${i + 1}: línea fuera de una pregunta`);
    if (c === "+") { if (cur.ok) throw new Error(`${f}:${i + 1}: dos respuestas correctas`); cur.ok = v; }
    else if (c === "-") cur.no.push(v);
    else if (c === "=") cur.x = cur.x ? cur.x + " " + v : v;
    else if (c === "@") cur.r = v;
    else throw new Error(`${f}:${i + 1}: línea no reconocida: ${l}`);
  });
  fin();
  PQ[n] = out; nq += out.length;
}
fs.writeFileSync(path.join(R, "preguntas.js"), `var PREGUNTAS=${JSON.stringify(PQ)};\n`);

for (const f of ["datos.js", "diagramas.js", "examenes.js", "trampas.js", "tablas.js", "nemotecnias.js"]) fs.copyFileSync(path.join(F, f), path.join(R, f));
const pagina = fs.readFileSync(path.join(F, "index.html"), "utf8");
fs.writeFileSync(path.join(R, "index.html"),
  '<!doctype html>\n<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n' + pagina + "\n</html>\n");
console.log(Object.keys(indice).length, "temas,", total.toLocaleString("es-ES"), "palabras;", nq, "preguntas nuevas;", Object.keys(expres).length, "resúmenes exprés");

const pub = process.argv[2];
if (pub) {
  fs.rmSync(pub, { recursive: true, force: true });
  for (const d of ["temas", "leyes"]) {
    fs.mkdirSync(path.join(pub, d), { recursive: true });
    for (const f of fs.readdirSync(path.join(R, d))) fs.copyFileSync(path.join(R, d, f), path.join(pub, d, f));
  }
  fs.copyFileSync(path.join(F, "index.html"), path.join(pub, "index.html"));
  for (const f of ["datos.js", "diagramas.js", "examenes.js", "trampas.js", "tablas.js", "nemotecnias.js", "preguntas.js"]) fs.copyFileSync(path.join(R, f), path.join(pub, f));
  console.log("Publicación preparada en", pub);
}
