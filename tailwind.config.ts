import { Config } from 'tailwindcss'

const config: Config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary-color)',
				secondary: 'var(--secondary-color)',
				tertiary: 'var(--tertiary-color)',
				quaternary: 'var(--quaternary-color)',
				quinary: 'var(--quinary-color)',
				accent: 'var(--accent-color)',
				accent_dark: 'var(--accent-color-dark)',
				opaque: 'var(--opaque-color)',
				success: 'var(--success-color)',
			},
			fontFamily: {},
		},
	},
	plugins: [],
}

export default config
