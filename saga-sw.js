const cacheName = "InfluencerSaga-v1"

const cacheArray = [
    '/',
    '/css/style.css',
    '/img/IMG-20210512-WA0000.jpg',
    '/img/green.png',
    '/img/guy.png',
    '/img/IMG-20210512-WA0003.jpg',
    '/img/IMG-20210512-WA0004.jpg',
    '/img/IMG-20210512-WA0006.jpg',
    '/js/index.js'
]


const addItemsToCache = async (cacheName, items) => {
    const cache = await caches.open(cacheName)
    cache.addAll(items);
}

const chechIfCacheExist = async () => {
    const keys = await caches.keys()
    Promise.all(
        keys.map(key => {
            if(key != cacheName){
                return caches.delete(key)
            }
        })
    )
}

// Install
self.addEventListener('install', e => {
    e.waitUntil(
        addItemsToCache(cacheName, cacheArray).then(self.skipWaiting())
    )
})

// Activate
self.addEventListener('activate', e => {
    e.waitUntil(
        chechIfCacheExist()
    )
})

// Fetch
self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request)
        .then(res => res)
        .catch(err => {
            caches.match(e.request).then(res => res)
        })
    )
})

