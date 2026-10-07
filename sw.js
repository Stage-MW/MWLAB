// Минимальный service worker для установки сайта как приложения.
// Ничего не кэширует, поэтому старые версии сайта и ответы Supabase не залипают.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) { return Promise.all(keys.map(function (k) { return caches.delete(k); })); })
      .then(function () { return self.clients.claim(); })
  );
});
self.addEventListener('fetch', function () { /* пропускаем запросы как есть */ });
