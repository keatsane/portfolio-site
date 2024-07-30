/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary-color)',
				secondary: 'var(--secondary-color)',
				dark: 'var(--dark-color)',
				light: 'var(--light-color)',
				danger: 'var(--danger-color)',
			},
		},
	},
	plugins: [],
}
