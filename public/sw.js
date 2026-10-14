// Service worker: makes the site installable and usable offline.
// Pages are network-first (always fresh when online); static assets are
// served from cache and refreshed in the background.
const CACHE = 'alex-fe-v1';
const SCOPE = self.registration.scope;
const PRECACHE = [SCOPE, `${SCOPE}manifest.webmanifest`, `${SCOPE}favicon.svg`, `${SCOPE}icon-192.png`];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)));
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
            .then(() => self.clients.claim()),
    );
});

self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    if (request.method !== 'GET' || url.origin !== self.location.origin) return;
    // Videos use range requests; let the browser handle them directly.
    if (/\.(mp4|webm)$/i.test(url.pathname)) return;

    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then((res) => {
                    const copy = res.clone();
                    caches.open(CACHE).then((cache) => cache.put(SCOPE, copy));
                    return res;
                })
                .catch(() => caches.match(SCOPE)),
        );
        return;
    }

    event.respondWith(
        caches.match(request).then((cached) => {
            const network = fetch(request).then((res) => {
                if (res.ok) {
                    const copy = res.clone();
                    caches.open(CACHE).then((cache) => cache.put(request, copy));
                }
                return res;
            });
            return cached || network;
        }),
    );
});
