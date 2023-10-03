// service-worker.js

const CACHE_NAME = 'searchpage-cache-v1';
// List of resources to cache
const resourcesToCache = [
  '/',
  'index.html',
  'icon.png',
  // ... add other assets you want to cache ...
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(resourcesToCache);
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
