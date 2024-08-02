import NavLink from '../components/NavLink'

const Landing = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="flex flex-col items-center text-neutral-50">
				<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
					KEATING SANE
				</h1>
				<div className="container flex justify-between text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
					<NavLink route="projects" />
					<NavLink route="about" />
					<NavLink route="contact" />
				</div>
			</div>
		</div>
	)
}

export default Landing
