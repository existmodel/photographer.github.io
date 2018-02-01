// self.addEventListener('install', (event) => {
//     console.log('Установлен');
// });

// self.addEventListener('activate', (event) => {
//     console.log('Активирован');
// });

// self.addEventListener('fetch', (event) => {
//     console.log('Происходит запрос на сервер');
// });

const CACHE = 'cache-only-v1';

// При установке воркера мы должны закешировать часть данных (статику).
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            return cache.addAll([
                '../img'
            ]);
        })
    );
});

// При запросе на сервер (событие fetch), используем только данные из кэша.
self.addEventListener('fetch', (event) =>
    event.respondWith(fromCache(event.request));
);

function fromCache(request) {
    return caches.open(CACHE).then((cache) =>
      cache.match(request)
          .then((matching) => matching || Promise.reject('no-match'))
    );
}