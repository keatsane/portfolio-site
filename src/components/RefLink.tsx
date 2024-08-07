type RefLinkProps = {
	link: string
	title: string
	icon: React.ReactNode
}

export const RefLink = ({ link, title, icon }: RefLinkProps) => {
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
