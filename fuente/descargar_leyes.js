// Descarga los textos consolidados del BOE (API de datos abiertos) y genera ../leyes/<id>.js
// Uso: node descargar_leyes.js
const fs = require("fs"), path = require("path");
const API = "https://www.boe.es/datosabiertos/api/legislacion-consolidada/id/";
const OUT = path.join(__dirname, "..", "leyes");
fs.mkdirSync(OUT, { recursive: true });

// corta: deja de incluir bloques a partir del primer encabezado cuyo título empiece así
const LEYES = [
  { id: "BOE-A-1978-31229", c: "Constitución Española de 1978", temas: [1] },
  { id: "BOE-A-1983-6317", c: "LO 3/1983, Estatuto de Autonomía de la Comunidad de Madrid", temas: [2] },
  { id: "BOE-A-1984-2926", c: "Ley 1/1983, del Gobierno y Administración de la Comunidad de Madrid", temas: [2] },
  { id: "BOE-A-1986-10499", c: "Ley 14/1986, General de Sanidad", temas: [3] },
  { id: "BOE-A-2002-4375", c: "Ley 12/2001, de Ordenación Sanitaria de la Comunidad de Madrid", temas: [3] },
  { id: "BOE-A-2018-1610", c: "Ley 11/2017, de Buen Gobierno y Profesionalización de la Gestión (SERMAS)", temas: [4] },
  { id: "BOE-A-2007-6115", c: "LO 3/2007, para la igualdad efectiva de mujeres y hombres", temas: [5] },
  { id: "BOE-A-2006-3667", c: "Ley 5/2005, integral contra la violencia de género de la Comunidad de Madrid", temas: [5] },
  { id: "BOE-A-2003-23101", c: "Ley 55/2003, del Estatuto Marco del personal estatutario", temas: [6] },
  { id: "BOE-A-1995-24292", c: "Ley 31/1995, de Prevención de Riesgos Laborales", temas: [7] },
  { id: "BOE-A-2015-10565", c: "Ley 39/2015, del Procedimiento Administrativo Común", temas: [8, 10, 11] },
  { id: "BOE-A-2017-12902", c: "Ley 9/2017, de Contratos del Sector Público (título preliminar)", temas: [9], corta: "LIBRO PRIMERO" },
  { id: "BOE-A-2015-10566", c: "Ley 40/2015, de Régimen Jurídico del Sector Público", temas: [10] },
  { id: "BOE-A-2021-5032", c: "RD 203/2021, Reglamento de actuación por medios electrónicos", temas: [10, 11] },
  { id: "BOE-A-2020-14046", c: "Ley 6/2020, de servicios electrónicos de confianza", temas: [10, 40] },
  { id: "BOE-A-2013-12887", c: "Ley 19/2013, de transparencia, acceso a la información pública y buen gobierno", temas: [12] },
  { id: "BOE-A-2019-10102", c: "Ley 10/2019, de Transparencia y de Participación de la Comunidad de Madrid", temas: [12] },
  { id: "BOE-A-2002-22188", c: "Ley 41/2002, de autonomía del paciente y documentación clínica", temas: [33] },
  { id: "BOE-A-2022-7191", c: "RD 311/2022, Esquema Nacional de Seguridad", temas: [35] },
  { id: "BOE-A-2018-16673", c: "LO 3/2018, de Protección de Datos Personales y garantía de los derechos digitales", temas: [36] },
  { id: "BOE-A-2002-13758", c: "Ley 34/2002, de servicios de la sociedad de la información (LSSI)", temas: [37] }
];

const CLASES = { articulo: "art", parrafo: "p", parrafo_2: "p", sangrado: "sg", sangrado_2: "sg", sangrado_articulo: "sg",
  titulo_num: "h2", titulo_tit: "h2t", capitulo_num: "h3", capitulo_tit: "h3t", seccion: "h4", seccion_tit: "h4t",
  centro_redonda: "c", centro_negrita: "c", cita: "p", cita_con_pleca: "p", anexo_num: "h2", anexo_tit: "h2t", soloTexto: "p" };

const ent = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
function texto(html) {
  return html.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "")
    .replace(/&(#x?[0-9a-f]+|\w+);/gi, (m, e) => e[0] === "#" ? String.fromCodePoint(e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : +e.slice(1)) : (ent[e] ?? m))
    .replace(/\s+/g, " ").trim();
}

async function bajar(ley) {
  const r = await fetch(API + ley.id + "/texto", { headers: { Accept: "application/xml" } });
  if (!r.ok) throw new Error("HTTP " + r.status);
  const xml = await r.text();
  const bloques = [];
  const reB = /<bloque id="([^"]*)" tipo="([^"]*)"(?: titulo="([^"]*)")?>([\s\S]*?)<\/bloque>/g;
  let m, cortado = false;
  while ((m = reB.exec(xml))) {
    const [, id, tipo, tit = "", cuerpo] = m;
    if (ley.corta && texto(tit).startsWith(ley.corta)) { cortado = true; }
    if (cortado) break;
    const vers = cuerpo.match(/<version[\s\S]*?<\/version>/g) || [];
    const v = vers[vers.length - 1] || "";
    const lineas = [];
    const reP = /<p class="([^"]*)"[^>]*>([\s\S]*?)<\/p>|<table[\s\S]*?<\/table>/g;
    let p;
    while ((p = reP.exec(v))) {
      if (!p[1]) { // tabla: una línea por fila
        (p[0].match(/<tr[\s\S]*?<\/tr>/g) || []).forEach(tr => {
          const celdas = (tr.match(/<t[dh][\s\S]*?<\/t[dh]>/g) || []).map(texto).filter(Boolean);
          if (celdas.length) lineas.push(["tb", celdas.join(" | ")]);
        });
        continue;
      }
      const cl = p[1];
      if (/^nota_pie|^refPost|^firma|^pie_/.test(cl)) continue;
      const t = texto(p[2]);
      if (!t) continue;
      lineas.push([CLASES[cl] || "p", t]);
    }
    if (tipo === "preambulo" && JSON.stringify(lineas).length > 6000) {
      bloques.push(["preambulo", id, "Preámbulo", [["p", "El preámbulo se omite por su extensión. Puede leerse en el BOE."]]]);
      continue;
    }
    if (!lineas.length && tipo !== "encabezado") continue;
    bloques.push([tipo, id, texto(tit), lineas]);
  }
  const datos = { id: ley.id, c: ley.c, temas: ley.temas, u: "https://www.boe.es/buscar/act.php?id=" + ley.id, f: new Date().toISOString().slice(0, 10), b: bloques };
  fs.writeFileSync(path.join(OUT, ley.id + ".js"), "LEYES[" + JSON.stringify(ley.id) + "]=" + JSON.stringify(datos) + ";\n");
  const arts = bloques.filter(b => b[0] === "precepto").length;
  return { id: ley.id, arts, kb: Math.round(fs.statSync(path.join(OUT, ley.id + ".js")).size / 1024) };
}

(async () => {
  const indice = [];
  for (const ley of LEYES) {
    try { const r = await bajar(ley); console.log(r.id, r.arts, "preceptos", r.kb, "KB"); indice.push({ id: ley.id, c: ley.c, temas: ley.temas }); }
    catch (e) { console.log(ley.id, "ERROR", e.message); }
    await new Promise(r => setTimeout(r, 400));
  }
  if (fs.existsSync(path.join(OUT, "RGPD.js"))) indice.splice(indice.findIndex(l => l.id === "BOE-A-2018-16673"), 0, { id: "RGPD", c: "Reglamento (UE) 2016/679, General de Protección de Datos (RGPD)", temas: [36] });
  fs.writeFileSync(path.join(OUT, "indice.js"), "var LEYES={};const LEYES_INDICE=" + JSON.stringify(indice) + ";\n");
})();
