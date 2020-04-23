import recettes from './_recettes.js';

const lookup = new Map();
recettes.forEach(recette => {
	lookup.set(recette.id, JSON.stringify(recette));
});

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { id } = req.params;

	if (lookup.has(id)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(id));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
