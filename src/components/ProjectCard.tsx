import { Link } from 'react-router-dom'

type ProjectCardProps = {
	link: string
	name: string
	description: string
	delay: number
	icon: React.ReactNode
}

export const ProjectCard = ({ link, name, description, delay, icon }: ProjectCardProps) => {
	return (
		<Link
			to={link}
			title={name}
			className="group flex justify-between items-center p-2 hover:bg-opaque transition fade-in"
			style={{ animationDelay: `${delay}s` }}
		>
			<span className="font-bold text-lg md:text-2xl text-primary group-hover:text-accent transition">
				{name}
			</span>
			<span className="flex items-center gap-x-2 sm:gap-x-4 text-sm md:text-lg text-secondary group-hover:text-accent transition">
				{description}
				{icon}
			</span>
		</Link>
	)
}