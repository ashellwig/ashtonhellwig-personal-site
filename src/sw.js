/**
 * @file
 * @description Contains pre-caching and a `MessageEvent` listener. Written with
 * guidance from
 * https://medium.com/@dougallrich/give-users-control-over-app-updates-in-vue-cli-3-pwas-20453aedc1f2
 * @author Ashton Hellwig <ahellwig.dev@gmail.com>
 * @copyright 2020 AshWig, LLC
 */

self.addEventListener('message', (e) => {
  if (!e.data) {
    return
  }

  switch (e.data) {
    case 'skipWaiting':
      self.skipWaiting()
      break
    default:
      break
  }
})

// eslint-disable-next-line
workbox.core.clientsClaim()
self.__precacheManifest = [].concat(self.__precacheManifest || [])
// eslint-disable-next-line
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
