// Muestra el texto de artículos concretos de una norma descargada.
// Uso: node leer_articulos.js <ID> <n1,n2,...> [max_caracteres_por_articulo]
const path = require("path");
global.LEYES = {};
const [id, lista, max = "1500"] = process.argv.slice(2);
require(path.join(__dirname, "..", "leyes", id + ".js"));
const NUMS={uno:1,un:1,primero:1,dos:2,segundo:2,tres:3,tercero:3,cuatro:4,cuarto:4,cinco:5,quinto:5,seis:6,sexto:6,siete:7,septimo:7,ocho:8,octavo:8,nueve:9,noveno:9,diez:10,decimo:10,once:11,doce:12,trece:13,catorce:14,quince:15,dieciseis:16,diecisiete:17,dieciocho:18,diecinueve:19,veinte:20,veintiuno:21,veintiun:21,veintidos:22,veintitres:23,veinticuatro:24,veinticinco:25,veintiseis:26,veintisiete:27,veintiocho:28,veintinueve:29,treinta:30,cuarenta:40,cincuenta:50,sesenta:60,setenta:70,ochenta:80,noventa:90,cien:100,ciento:100,doscientos:200,trescientos:300};
const norm = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
function num(tit){const t=norm(tit).replace(/[.,]/g," ").trim();let m=t.match(/^art(?:iculo)?\s+(\d+)\s*(bis|ter|quater)?\b/);if(m)return m[1]+(m[2]||"");m=t.match(/^articulo\s+(.+)$/);if(!m)return null;let n=0,s="";m[1].split(/\s+/).forEach(w=>{if(w==="y")return;if(NUMS[w]!=null)n+=NUMS[w];else if(/^(bis|ter|quater)$/.test(w))s=w});return n?String(n)+s:null}
const L = LEYES[id];
const want = new Set(lista.split(","));
L.b.forEach(b => { if (b[0] === "precepto" && (want.has(num(b[2]) || "") || want.has(b[1]))) console.log("· " + b[3].map(x => x[1]).join(" ").slice(0, +max)); });
