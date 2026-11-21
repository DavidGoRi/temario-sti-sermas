// Vigila si el BOE ha actualizado el texto consolidado de las leyes que cita el temario.
// Uso:
//   node vigilar_leyes.js            → solo informa (no cambia nada)
//   node vigilar_leyes.js --aplicar  → descarga de nuevo las leyes cambiadas, compara sus artículos,
//                                      guarda el detalle en ../vigilancia/leyes_cambios.json y actualiza la base
// La primera vez crea la base ../vigilancia/leyes.json con la fecha de actualización de cada ley.
const fs = require("fs"), path = require("path"), https = require("https"), { execFileSync } = require("child_process");
const RAIZ = path.join(__dirname, "..");
const BASE = path.join(RAIZ, "vigilancia", "leyes.json");
const CAMBIOS = path.join(RAIZ, "vigilancia", "leyes_cambios.json");
const API = "https://www.boe.es/datosabiertos/api/legislacion-consolidada/id/";

const cargarIndice = () => { const c = { LEYES: {} }; new Function("c", fs.readFileSync(path.join(RAIZ, "leyes", "indice.js"), "utf8").replace("var LEYES={};const LEYES_INDICE=", "c.I=")) (c); return c.I; };
const cargarLey = id => { const f = path.join(RAIZ, "leyes", id + ".js"); if (!fs.existsSync(f)) return null; const c = {}; new Function("LEYES", fs.readFileSync(f, "utf8"))(c); return c[id]; };
const pedir = url => new Promise((ok, mal) => https.get(url, { headers: { Accept: "application/json", "User-Agent": "temario-sti" } }, r => {
  let d = ""; r.on("data", x => d += x); r.on("end", () => r.statusCode === 200 ? ok(d) : mal(new Error("HTTP " + r.statusCode)));
}).on("error", mal));
const fechaISO = f => f ? f.slice(0, 4) + "-" + f.slice(4, 6) + "-" + f.slice(6, 8) : null;

// Artículos de una ley como {título: texto}
const articulos = ley => {
  const A = {}; if (!ley) return A;
  (ley.b || []).forEach(b => { if (b[0] !== "precepto") return; const t = (b[3] || []).map(p => p[1]).join("\n"); const tit = ((b[3] || [])[0] || [])[1] || b[2]; A[b[2]] = { tit, t }; });
  return A;
};

(async () => {
  const indice = cargarIndice().filter(l => /^BOE-/.test(l.id));
  const base = fs.existsSync(BASE) ? JSON.parse(fs.readFileSync(BASE, "utf8")) : null;
  const ahora = {}, cambiadas = [];
  for (const l of indice) {
    try {
      const j = JSON.parse(await pedir(API + l.id + "/metadatos"));
      ahora[l.id] = (j.data && j.data[0] && j.data[0].fecha_actualizacion) || null;
    } catch (e) { console.log(l.id, "ERROR", e.message); ahora[l.id] = base ? base[l.id] : null; }
    if (base && ahora[l.id] && base[l.id] && ahora[l.id] !== base[l.id]) cambiadas.push(l);
    await new Promise(r => setTimeout(r, 300));
  }
  fs.mkdirSync(path.dirname(BASE), { recursive: true });
  if (!base) { fs.writeFileSync(BASE, JSON.stringify(ahora, null, 1)); console.log("Base creada con", Object.keys(ahora).length, "leyes."); return; }
  if (!cambiadas.length) { console.log("Sin cambios en las", indice.length, "leyes."); return; }
  console.log("Han cambiado en el BOE:", cambiadas.map(l => l.id + " (" + l.c + ")").join("; "));
  if (!process.argv.includes("--aplicar")) return;
  const antes = {}, crudo = {}; cambiadas.forEach(l => { antes[l.id] = articulos(cargarLey(l.id)); const f = path.join(RAIZ, "leyes", l.id + ".js"); crudo[l.id] = fs.existsSync(f) ? fs.readFileSync(f, "utf8") : null; });
  execFileSync(process.execPath, [path.join(__dirname, "descargar_leyes.js"), ...cambiadas.map(l => l.id)], { stdio: "inherit" });
  const detalle = cambiadas.map(l => {
    const A = antes[l.id], B = articulos(cargarLey(l.id));
    const mod = Object.keys(B).filter(k => A[k] && A[k].t !== B[k].t).map(k => B[k].tit);
    const nuevos = Object.keys(B).filter(k => !A[k]).map(k => B[k].tit);
    const quitados = Object.keys(A).filter(k => !B[k]).map(k => A[k].tit);
    return { id: l.id, c: l.c, temas: l.temas, fecha: fechaISO(ahora[l.id]), modificados: mod, nuevos, quitados, sustancial: !!(mod.length || nuevos.length || quitados.length) };
  });
  // Si solo han cambiado los metadatos, se deja el fichero como estaba para no ensuciar el repositorio
  detalle.forEach(d => { if (!d.sustancial && crudo[d.id] !== null) fs.writeFileSync(path.join(RAIZ, "leyes", d.id + ".js"), crudo[d.id]); });
  fs.writeFileSync(CAMBIOS, JSON.stringify(detalle, null, 1));
  const nb = Object.assign({}, base); cambiadas.forEach(l => nb[l.id] = ahora[l.id]); fs.writeFileSync(BASE, JSON.stringify(nb, null, 1));
  detalle.forEach(d => console.log(d.id, d.sustancial ? `→ ${d.modificados.length} artículos modificados, ${d.nuevos.length} nuevos, ${d.quitados.length} suprimidos` : "→ solo cambian los metadatos"));
})();
