// next.config.js
const withPWA = require("next-pwa")({
	dest: "public", // Output service worker files to /public
	disable: process.env.NODE_ENV === "development", // Disable PWA in development
	register: true, // Automatically register the service worker
	skipWaiting: true, // Activate new service worker immediately
	// Configure caching for offline support
	runtimeCaching: [
		{
			urlPattern: /^https?.*/, // Cache all HTTP/HTTPS requests
			handler: "NetworkFirst", // Try network first, fallback to cache
			options: {
				cacheName: "offlineCache",
				expiration: {
					maxEntries: 200,
					maxAgeSeconds: 24 * 60 * 60, // Cache for 24 hours
				},
			},
		},
		{
			urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/, // Cache images
			handler: "CacheFirst", // Use cache first, fallback to network
			options: {
				cacheName: "imageCache",
				expiration: {
					maxEntries: 100,
					maxAgeSeconds: 30 * 24 * 60 * 60, // Cache images for 30 days
				},
			},
		},
	],
});

module.exports = withPWA({
	// Other Next.js config options
	// No output: 'export' needed for Vercel
});
