const serviceWorkerFile = '../saga-sw.js'

// Register Service Worker
const addServiceWorker = async () => {
    const req = await navigator.serviceWorker.register(serviceWorkerFile)

    req && console.log("SW Added")
}

// Check if it's supported in browser
if('serviceWorker' in navigator){
    window.addEventListener('load', addServiceWorker)
}