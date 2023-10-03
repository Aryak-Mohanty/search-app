// service-worker.js

const CACHE_NAME = 'weather-app-cache-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll([
          '/',
          'index.html',
          'icon.png',
          // ... other assets ...
        ])
        .catch((error) => {
          console.error('Cache addAll error:', error);
        });
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
