const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./pages/**/*.js'],
	theme: {
		extend: {
			letterSpacing: {
				'10': '0.10em',
				'24': '0.24em',
			},
			fontFamily: {
				sans: ['Raleway', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/ui')],
};
