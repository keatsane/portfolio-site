import { MdCode } from 'react-icons/md'

type ViewCodeProps = {
	link: string
}

export const ViewCode = ({ link }: ViewCodeProps) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className="bg-opaque hover:bg-accent p-2 transition cursor-pointer"
		>
			<MdCode size={24} />
		</a>
	)
}
