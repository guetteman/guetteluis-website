const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./pages/**/*.js', './components/**/*.js'],
	theme: {
		extend: {
			letterSpacing: {
				'10': '0.10em',
				'24': '0.24em',
			},
			fontFamily: {
				sans: ['Raleway', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				code: {
					green: 'var(--color-code-green)',
					yellow: 'var(--color-code-yellow)',
					purple: 'var(--color-code-purple)',
					red: 'var(--color-code-red)',
					blue: 'var(--color-code-blue)',
					white: 'var(--color-code-white)',
				},
			},
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/ui')],
};
