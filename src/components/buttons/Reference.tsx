type ReferenceProps = {
	link: string
	title: string
	icon: React.ReactNode
}

export const Reference = ({ link, title, icon }: ReferenceProps) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			title={title}
			className="text-primary hover:text-accent transition"
		>
			{icon}
		</a>
	)
}
