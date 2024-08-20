import { Link } from 'react-router-dom'
import { Project } from '../types/Project'

export const ProjectCard = ({ logo, title, shortDesc, typeIcon, slug, delay }: Project) => {
	return (
		<Link
			to={slug}
			title={title}
			className="group flex flex-col justify-start gap-y-1 sm:gap-0 sm:flex-row sm:justify-between sm:items-center p-2 hover:bg-opaque transition fade-in"
			style={{ animationDelay: delay }}
		>
			<div className="flex items-center gap-x-2 font-bold text-xl sm:text-2xl text-primary group-hover:text-accent transition">
				{logo}
				{title}
			</div>

			<span className="flex items-center gap-x-2 sm:gap-x-4 sm:text-xl text-secondary group-hover:text-accent transition">
				{shortDesc}
				{typeIcon}
			</span>
		</Link>
	)
}
