import { Technology } from '../types/Technology'

export const TechDisplay = ({ icon, name, link, color }: Technology) => {
	return (
		<>
			<a
				href={link}
				target="_blank"
				title={name}
				rel="noopener noreferrer"
				className="flex items-center hover:bg-opaque space-x-2 font-bold transition cursor-pointer p-2"
				style={{ color: color }}
			>
				<span>{name}</span>
				{icon}
			</a>
		</>
	)
}
