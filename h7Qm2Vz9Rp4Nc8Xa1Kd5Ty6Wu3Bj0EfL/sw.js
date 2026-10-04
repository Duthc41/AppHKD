/* Service worker : mise en cache des ressources pour un usage hors ligne au dojo */
const CACHE = "dojangpath-hkd-v2";
const ASSETS = [
  "./", "index.html", "manifest.json",
  "css/style.css", "css/responsive.css",
  "data/sources.js", "data/grades.js", "data/lexique.js", "data/reglements.js", "data/memoire.js", "data/qcm.js", "data/conflicts.js",
  "js/core.js", "js/navigation.js", "js/views.js", "js/exam.js", "js/revision.js", "js/search.js", "js/app.js",
  "assets/icons/icon.svg", "assets/images/dobok-noir.webp", "assets/images/dobok-blanc.webp", "assets/icons/icon-192.png", "assets/icons/icon-512.png"
];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
      const copy = res.clone();
      if (res.ok && new URL(e.request.url).origin === location.origin) caches.open(CACHE).then((c) => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match("index.html")))
  );
});
