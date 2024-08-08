import { useNavigate } from 'react-router-dom'
import { CgChevronDoubleLeft } from 'react-icons/cg'

type BackProps = {
	size: number
}

export const Back = ({ size }: BackProps) => {
	const navigate = useNavigate()

	return (
		<button
			onClick={() => navigate(-1)}
			className="text-2xl bg-opaque hover:bg-accent p-2 transition cursor-pointer"
		>
			<CgChevronDoubleLeft size={size} />
		</button>
	)
}
