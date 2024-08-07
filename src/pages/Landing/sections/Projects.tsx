import { Link } from 'react-router-dom'
import { FaGamepad, FaGear } from 'react-icons/fa6'
import { CgWebsite, CgExtension } from 'react-icons/cg'

export const Projects = () => {
	return (
		<section id="projects" className="flex flex-col gap-y-2">
			<h2 className="text-3xl font-bold">Projects</h2>
			<Link
				to="/TossIt"
				className="group flex justify-between items-center p-2 hover:bg-opaque transition"
			>
				<span className="font-bold text-lg md:text-2xl text-primary group-hover:text-accent transition italic">
					TossIt
				</span>
				<span className="flex items-center gap-x-2 sm:gap-x-4 text-sm md:text-lg text-secondary group-hover:text-accent transition">
					<FaGamepad size={24} />
					Browser remake of classic game
				</span>
			</Link>
			<Link
				to="/Spotted"
				className="group flex justify-between items-center p-2 hover:bg-opaque transition"
			>
				<span className="font-bold text-lg md:text-2xl text-primary group-hover:text-accent transition italic">
					Spotted
				</span>
				<span className="flex items-center gap-x-2 sm:gap-x-4 text-sm md:text-lg text-secondary group-hover:text-accent transition">
					<FaGamepad size={24} />
					Stealth based browser game
				</span>
			</Link>
			<Link
				to="/Website"
				className="group flex justify-between items-center p-2 hover:bg-opaque transition"
			>
				<span className="font-bold text-lg md:text-2xl text-primary group-hover:text-accent transition">
					Cool Website
				</span>
				<span className="flex items-center gap-x-2 sm:gap-x-4 text-sm md:text-lg text-secondary group-hover:text-accent transition">
					<CgWebsite size={24} />
					Website w/ many themes
				</span>
			</Link>
			<Link
				to="/ChromeExtension"
				className="group flex justify-between items-center p-2 hover:bg-opaque transition"
			>
				<span className="font-bold text-lg md:text-2xl text-primary group-hover:text-accent transition">
					Extension
				</span>
				<span className="flex items-center gap-x-2 sm:gap-x-4 text-sm md:text-lg text-secondary group-hover:text-accent transition">
					<CgExtension size={24} />
					Useful Chrome Extension
				</span>
			</Link>
			<Link
				to="/ChessEngine"
				className="group flex justify-between items-center p-2 hover:bg-opaque transition"
			>
				<span className="font-bold text-lg md:text-2xl text-primary group-hover:text-accent transition">
					Chess Engine
				</span>
				<span className="flex items-center gap-x-2 sm:gap-x-4 text-sm md:text-lg text-secondary group-hover:text-accent transition">
					<FaGear size={20} />
					Basic Chess Engine
				</span>
			</Link>
		</section>
	)
}
