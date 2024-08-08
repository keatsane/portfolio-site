interface TechDisplayProps {
	name: string
	link: string
	color: string
	icon: React.ReactNode
}

export const TechDisplay = ({ icon, name, link, color }: TechDisplayProps) => {
	return (
		<>
			<a
				href={link}
				target="_blank"
				title={name}
				rel="noopener noreferrer"
				className="flex items-center bg-opaque hover:bg-opaque_dark space-x-2 font-bold transition cursor-pointer p-2"
				style={{ color: color }}
			>
				<span>{name}</span>
				{icon}
			</a>
		</>
	)
}
