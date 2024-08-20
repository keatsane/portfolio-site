import { Theme } from './buttons/Theme'
import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<header className="flex justify-between items-center p-6 fade-down">
			<Link to="/" className="text-3xl font-extrabold hover:text-accent transition">
				KS
			</Link>
			<Theme />
		</header>
	)
}
