const CACHE_NAME = 'chordican-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.webmanifest'
];

// Install: resilient caching (avoids failure if CDN or fonts block cache.addAll)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Cache local critical shell assets first
      await cache.addAll(ASSETS_TO_CACHE);

      // Best-effort cache for CDN dependencies without failing install
      const optionalCdnAssets = [
        'https://cdn.tailwindcss.com',
        'https://unpkg.com/lucide@latest',
        'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js'
      ];
      await Promise.allSettled(
        optionalCdnAssets.map(url => cache.add(new Request(url, { mode: 'no-cors' })))
      );
    })
  );
  self.skipWaiting();
});

// Activate: clear old caches if needed
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch: Network first with Cache fallback
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone and store valid responses
        if (response && response.status === 200 && event.request.method === 'GET') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
