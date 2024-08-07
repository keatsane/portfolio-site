import { Link } from 'react-router-dom'

export const Projects = () => {
	return (
		<section id="projects" className="flex flex-col gap-y-2">
			<h2 className="text-3xl font-bold">Projects</h2>
			<Link
				to="/TossIt"
				className="group flex justify-between items-center p-2 hover:bg-opaque transition"
			>
				<span className="font-bold text-lg md:text-2xl text-primary group-hover:text-accent transition mr-2">
					TossIt
				</span>
				<span className="text-sm md:text-lg text-secondary">
					Browser remake of a classic mobile game
				</span>
			</Link>
			<Link
				to="/Spotted"
				className="group flex justify-between items-center p-2 hover:bg-opaque transition"
			>
				<span className="font-bold text-lg md:text-2xl text-primary group-hover:text-accent transition mr-2">
					Spotted
				</span>
				<span className="text-sm md:text-lg text-secondary">
					Stealth-based browser game
				</span>
			</Link>
			<Link
				to="/Website1"
				className="group flex justify-between items-center p-2 hover:bg-opaque transition"
			>
				<span className="font-bold text-lg md:text-2xl text-primary group-hover:text-accent transition mr-2">
					Website1
				</span>
				<span className="text-sm md:text-lg text-secondary">Boring website</span>
			</Link>
			<Link
				to="/Website2"
				className="group flex justify-between items-center p-2 hover:bg-opaque transition"
			>
				<span className="font-bold text-lg md:text-2xl text-primary group-hover:text-accent transition mr-2">
					Website2
				</span>
				<span className="text-sm md:text-lg text-secondary">Fun website</span>
			</Link>
		</section>
	)
}
