/* eslint-disable no-restricted-globals */
// This service worker can be customized!

// The workbox libraries are loaded by the create-react-app build system
import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching.
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell.
const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
registerRoute(({ request, url }) => {
  // If this isn't a navigation, skip.
  if (request.mode !== "navigate") {
    return false;
  }

  // If this is a URL that starts with /_, skip.
  if (url.pathname.startsWith("/_")) {
    return false;
  }

  // If this looks like a URL for a resource, because it contains
  // a file extension, skip.
  if (url.pathname.match(fileExtensionRegexp)) {
    return false;
  }

  // Return index.html for all other navigation requests.
  return true;
}, createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html"));

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
// see https://cra.link/PWA for more info on using workbox and precaching.
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.endsWith(".png"),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: "images",
    plugins: [new ExpirationPlugin({ maxEntries: 50 })],
  })
);

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});