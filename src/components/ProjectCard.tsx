import { Link } from 'react-router-dom'

type ProjectCardProps = {
	logo: React.ReactNode
	link: string
	name: string
	description: string
	delay: number
	icon: React.ReactNode
}

export const ProjectCard = ({ logo, link, name, description, delay, icon }: ProjectCardProps) => {
	return (
		<Link
			to={link}
			title={name}
			className="group flex flex-col justify-start gap-y-1 sm:gap-0 sm:flex-row sm:justify-between sm:items-center p-2 hover:bg-opaque transition fade-in"
			style={{ animationDelay: `${delay}s` }}
		>
			<div className="flex items-center gap-x-2 font-bold text-xl sm:text-2xl text-primary group-hover:text-accent transition">
				{logo}
				{name}
			</div>

			<span className="flex items-center gap-x-2 sm:gap-x-4 sm:text-xl text-secondary group-hover:text-accent transition">
				{description}
				{icon}
			</span>
		</Link>
	)
}
