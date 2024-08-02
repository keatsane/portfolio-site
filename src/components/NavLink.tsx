import { Link } from 'react-router-dom'

interface NavLinkProps {
	route: string
}

const NavLink: React.FC<NavLinkProps> = ({ route }) => {
	const linkText = route.charAt(0).toUpperCase() + route.slice(1)
	return (
		<Link
			to={`/${route}`}
			className="hover:text-yellow transition-colors duration-300 ease-in-out"
		>
			{linkText}
		</Link>
	)
}

export default NavLink
