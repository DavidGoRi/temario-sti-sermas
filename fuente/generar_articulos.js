// Genera ../articulos.js: tarjetas de los artículos clave de cada ley, sacadas del texto consolidado del BOE.
// Entran los artículos que citan las preguntas (preguntas/NN.txt, «@ BOE-A-…#art») y los que el temario enlaza
// al menos dos veces ([[BOE-A-…#art|…]]). Anverso: «¿Qué regula el artículo X de …?»; reverso: título y comienzo del texto.
const fs = require("fs"), path = require("path");

module.exports = function generarArticulos(F, R) {
  const LEYES = {};
  const cargar = id => { if (!LEYES[id]) { const f = path.join(R, "leyes", id + ".js"); if (!fs.existsSync(f)) return null; const c = {}; new Function("LEYES", fs.readFileSync(f, "utf8"))(c); LEYES[id] = c[id]; } return LEYES[id]; };
  const indice = (() => { const c = {}; new Function("c", fs.readFileSync(path.join(R, "leyes", "indice.js"), "utf8").replace("var LEYES={};const LEYES_INDICE=", "c.I="))(c); return c.I; })();
  const meta = Object.fromEntries(indice.map(l => [l.id, l]));
  const citas = {}, temasDe = {};
  const anota = (ley, art, n, peso) => { const k = ley + "#" + art; citas[k] = (citas[k] || 0) + peso; (temasDe[k] = temasDe[k] || new Set()).add(n); };
  // citas de las preguntas
  for (const f of fs.readdirSync(path.join(F, "preguntas")).filter(f => /^\d\d\.txt$/.test(f))) {
    const n = +f.slice(0, 2);
    for (const m of fs.readFileSync(path.join(F, "preguntas", f), "utf8").matchAll(/^@\s*([A-Za-z0-9-]+)#([A-Za-z0-9-]+)\s*$/gm)) anota(m[1], m[2], n, 3);
  }
  // enlaces del temario
  for (const f of fs.readdirSync(path.join(F, "temas")).filter(f => /^\d\d\.md$/.test(f))) {
    const n = +f.slice(0, 2);
    for (const m of fs.readFileSync(path.join(F, "temas", f), "utf8").matchAll(/\[\[([A-Za-z0-9-]+)#([A-Za-z0-9-]+)\|/g)) anota(m[1], m[2], n, 1);
  }
  const nombre = id => { const c = (meta[id] || {}).c || id; return id === "BOE-A-1978-31229" ? "la Constitución" : id === "RGPD" ? "el RGPD" : c.split(",")[0].replace(/^(Ley|LO|RD|Reglamento)/, m => "la " + m).replace(/^la RD/, "el RD").replace(/^la Reglamento/, "el Reglamento"); };
  // corta en el último final de frase (no en «3.» de un apartado) o, si no hay, en la última palabra
  const corto = (t, max) => { if (t.length <= max) return t; const c = t.slice(0, max); let p = -1; for (const m of c.matchAll(/[^\d\s][.;:](?=\s)/g)) p = m.index + 1; return (p > max * 0.45 ? c.slice(0, p + 1).replace(/[;:]$/, ".") : c.slice(0, c.lastIndexOf(" ")) + "…"); };
  const salida = [];
  for (const [k, peso] of Object.entries(citas)) {
    if (peso < 2) continue;
    const [ley, art] = k.split("#"), L = cargar(ley);
    if (!L) continue;
    const pre = (L.b || []).find(b => b[0] === "precepto" && (b[1] === "a" + art || b[1] === art || b[2] === "Artículo " + art));
    if (!pre) continue;
    const cab = ((pre[3] || []).find(x => x[0] === "art") || [])[1] || pre[2];
    const titulo = /^Artículo\s+\S+\.?$/.test(cab.trim()) ? "" : cab.replace(/^Artículo\s+[^.]+\.\s*/, "").replace(/\.$/, "").trim();
    const cuerpo = (pre[3] || []).filter(x => x[0] !== "art").map(x => x[1]).join(" ").replace(/\s+/g, " ").trim();
    if (!cuerpo) continue;
    const numero = cab.match(/^Artículo\s+([^.]+)/) ? cab.match(/^Artículo\s+([^.]+)/)[1].trim() : art;
    salida.push({
      id: "ar:" + k, ley, art: numero, peso, temas: [...temasDe[k]].sort((a, b) => a - b),
      f: `¿Qué regula el artículo ${numero} ${("de " + nombre(ley)).replace(/^de el /, "del ")}?`,
      a: (titulo ? `**${titulo}.** ` : "") + corto(cuerpo, 330)
    });
  }
  const orden = indice.map(l => l.id);
  const num = a => parseFloat(String(a).replace(/[^\d.]/g, "")) || 0;
  salida.sort((x, y) => orden.indexOf(x.ley) - orden.indexOf(y.ley) || num(x.art) - num(y.art) || String(x.art).localeCompare(String(y.art)));
  fs.writeFileSync(path.join(R, "articulos.js"), "var ARTICULOS=" + JSON.stringify(salida) + ";\n");
  return salida.length;
};
