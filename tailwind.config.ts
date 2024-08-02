import { Config } from 'tailwindcss'

const config: Config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				white: 'var(--white-color)',
				primary: 'var(--primary-color)',
				secondary: 'var(--secondary-color)',
				tertiary: 'var(--tertiary-color)',
				black: 'var(--black-color)',
				yellow: 'var(--yellow-color)',
			},
			fontFamily: {},
		},
	},
	plugins: [],
}

export default config
