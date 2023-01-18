/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './build/*.html' ],
	theme: {
		extend: {
			screen: {
				'widescreen': { 'raw': '(aspect-ratio: 3/2)' },
				'tallscreen': { 'raw': '(aspect-ratio: 1/2)' },
			},
		},
		plugins: [],
	}
};
