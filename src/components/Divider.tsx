type DividerProps = {
	delay: number
}
export const Divider = ({ delay }: DividerProps) => {
	return (
		<span
			className="border-b border-tertiary w-full fade-in"
			style={{ animationDelay: `${delay}s` }}
		/>
	)
}
