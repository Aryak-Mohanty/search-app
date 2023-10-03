// service-worker.js

const CACHE_NAME = 'searchpage-cache-v1';
// List of resources to cache
const resourcesToCache = [
  '/',
  'index.html',
  'icon.png',
  // Add other assets you want to cache here...
];


self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
