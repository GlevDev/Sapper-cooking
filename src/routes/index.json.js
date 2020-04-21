import recettes from './_recettes.js';

const contents = JSON.stringify(recettes.map(recette => {
	return {
		title: recette.title,
		ingredients: recette.ingredients,
		num: recette.num,
		steps: recette.steps
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}