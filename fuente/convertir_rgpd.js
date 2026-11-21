// Convierte el XHTML oficial del RGPD (Oficina de Publicaciones de la UE) a ../leyes/RGPD.js
// Uso: node convertir_rgpd.js <rgpd.html>
// Origen: http://publications.europa.eu/resource/celex/32016R0679 (Accept: application/xhtml+xml, Accept-Language: spa)
const fs = require("fs"), path = require("path");
const src = fs.readFileSync(process.argv[2], "utf8");
const ent = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
const texto = h => h.replace(/<[^>]+>/g, "").replace(/&(#x?[0-9a-f]+|\w+);/gi, (m, e) => e[0] === "#" ? String.fromCodePoint(/x/i.test(e[1]) ? parseInt(e.slice(2), 16) : +e.slice(1)) : (ent[e] ?? m)).replace(/\s+/g, " ").trim();
const ini = src.indexOf('id="cpt_I"');
const cuerpo = src.slice(ini);
const re = /<p[^>]*class="([^"]*)"[^>]*>([\s\S]*?)<\/p>/g;
const b = []; let cur = null, m, pend = "";
const push = (cl, t) => { if (!cur) { cur = ["encabezado", "ini", "", []]; b.push(cur); } cur[3].push([cl, t]); };
while ((m = re.exec(cuerpo))) {
  const cl = m[1], t = texto(m[2]);
  if (!t) continue;
  if (/oj-note|oj-signatory|oj-final/.test(cl)) continue;
  if (cl.includes("oj-ti-section-1")) { cur = ["encabezado", "c" + b.length, t, [["h2", t]]]; b.push(cur); continue; }
  if (cl.includes("oj-ti-section-2")) { if (cur && cur[0] === "encabezado") { cur[3].push(["h2t", t]); } else { cur = ["encabezado", "s" + b.length, t, [["h3", t]]]; b.push(cur); } continue; }
  if (cl.includes("oj-ti-art")) { cur = ["precepto", "a" + t.replace(/\D+/g, ""), t, [["art", t]]]; b.push(cur); continue; }
  if (cl.includes("oj-sti-art")) { cur[3][cur[3].length - 1][1] += ". " + t; continue; }
  if (/^(\(?[a-z]{1,2}\)|\d+\)|[ivx]+\))$/i.test(t)) { pend = t + " "; continue; }
  push(pend ? "sg" : "p", pend + t); pend = "";
}
const datos = { id: "RGPD", c: "Reglamento (UE) 2016/679, General de Protección de Datos (RGPD)", temas: [36], u: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679", f: new Date().toISOString().slice(0, 10), b };
const out = path.join(__dirname, "..", "leyes", "RGPD.js");
fs.writeFileSync(out, 'LEYES["RGPD"]=' + JSON.stringify(datos) + ";\n");
console.log(b.filter(x => x[0] === "precepto").length, "artículos,", Math.round(fs.statSync(out).size / 1024), "KB");
