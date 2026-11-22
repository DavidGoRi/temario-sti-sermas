/* Uso sin conexión (solo en la versión web de GitHub Pages).
   Las páginas y los datos se sirven desde la red cuando hay conexión y se guardan en caché;
   sin conexión se usa la copia guardada. build.js sustituye mwrztzhx en cada compilación.
   Los audios solo se guardan cuando el usuario pulsa «Guardar sin conexión» (caché «temario-audio»),
   y se sirven también por trozos (peticiones Range), que es como los pide el reproductor. */
const CACHE = "temario-sti-VERSION";
const AUDIO = "temario-audio";
const BASICOS = ["./", "index.html", "datos.js", "preguntas.js", "nemotecnias.js", "examenes.js", "noticias.js", "temas/indice.js", "leyes/indice.js", "icono.svg"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASICOS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== AUDIO).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

async function servirAudio(req) {
  const url = req.url.split("#")[0];
  const guardado = await (await caches.open(AUDIO)).match(url, { ignoreSearch: true });
  if (!guardado) return fetch(req);
  const rango = req.headers.get("range");
  if (!rango) return guardado;
  const datos = await guardado.arrayBuffer();
  const m = /bytes=(\d*)-(\d*)/.exec(rango) || [];
  const total = datos.byteLength;
  let ini = m[1] ? +m[1] : 0, fin = m[2] ? +m[2] : total - 1;
  if (!m[1] && m[2]) { ini = Math.max(0, total - +m[2]); fin = total - 1; }
  fin = Math.min(fin, total - 1);
  if (ini > fin || ini >= total) return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${total}` } });
  return new Response(datos.slice(ini, fin + 1), {
    status: 206,
    headers: { "Content-Type": guardado.headers.get("Content-Type") || "audio/mpeg", "Content-Range": `bytes ${ini}-${fin}/${total}`, "Content-Length": String(fin - ini + 1), "Accept-Ranges": "bytes" }
  });
}

self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  if (/\/audio\//.test(u.pathname)) { e.respondWith(servirAudio(e.request)); return; }
  e.respondWith(
    fetch(e.request).then(r => {
      if (r && r.ok) { const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); }
      return r;
    }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});
