const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/contact.svelte"),
	() => import("../../../src/routes/rentals/[rental_id].svelte"),
	() => import("../../../src/routes/about.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/contact.svelte
	[/^\/contact\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/rentals/[rental_id].svelte
	[/^\/rentals\/([^/]+?)\/?$/, [c[0], c[4]], [c[1]], (m) => ({ rental_id: d(m[1])})],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/api/rentals.json.js
	[/^\/api\/rentals\.json$/],

	// src/routes/api/rentals/[rental_id].json.js
	[/^\/api\/rentals\/([^/]+?)\.json$/]
];

export const fallback = [c[0](), c[1]()];