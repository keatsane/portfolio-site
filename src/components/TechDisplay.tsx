interface TechDisplayProps {
	icon: React.ReactNode
	name: string
	link: string
}

export const TechDisplay = ({ icon, name, link }: TechDisplayProps) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center bg-opaque hover:bg-accent space-x-2 text-primary font-bold transition cursor-pointer p-2"
		>
			<span>{name}</span>
			{icon}
		</a>
	)
}
