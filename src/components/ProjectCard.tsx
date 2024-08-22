import { Link } from 'react-router-dom'
import { Project } from '../types/Project'

export const ProjectCard = ({ title, shortDesc, slug, delay }: Project) => {
	return (
		<Link
			to={slug}
			title={title}
			className="group flex justify-between items-center gap-x-4 p-2 hover:bg-opaque transition fade-in"
			style={{ animationDelay: delay }}
		>
			<h3 className="group-hover:text-accent">
				<span className="hidden text-quaternary group-hover:inline">&gt; </span>
				{title}
				<span className="hidden text-quaternary group-hover:inline"> &lt;</span>
			</h3>
			<p className="group-hover:text-accent truncate">{shortDesc}</p>
		</Link>
	)
}
