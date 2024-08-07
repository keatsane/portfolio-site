import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<header className="flex justify-between items-center p-6">
			<Link
				to="/"
				className="text-3xl font-extrabold hover:text-accent transition"
				style={{ userSelect: 'none' }}
			>
				KS
			</Link>
			<div className="md:text-xl font-semibold flex gap-x-4 text-secondary">
				<a href="#about" className="hover:text-primary transition">
					About
				</a>
				<a href="#projects" className="hover:text-primary transition">
					Projects
				</a>
				<a href="#contact" className="hover:text-primary transition">
					Contact
				</a>
			</div>
		</header>
	)
}
