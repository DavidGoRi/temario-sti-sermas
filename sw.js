/* Uso sin conexión (solo en la versión web de GitHub Pages).
   Las páginas y los datos se sirven desde la red cuando hay conexión y se guardan en caché;
   sin conexión se usa la copia guardada. build.js sustituye mwqt799r en cada compilación. */
const CACHE = "temario-sti-VERSION";
const BASICOS = ["./", "index.html", "datos.js", "preguntas.js", "nemotecnias.js", "examenes.js", "noticias.js", "temas/indice.js", "leyes/indice.js", "icono.svg"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASICOS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(r => {
      if (r && r.ok) { const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); }
      return r;
    }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});
