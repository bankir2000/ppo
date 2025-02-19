self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('ppo-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/ppo/',
                '/ppo/index.html',
                '/ppo/assets/index.9d19f81e.js',
                '/ppo/assets/index.7c801b86.css',
                '/ppo/assets/favicon.4ad42837.ico'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});