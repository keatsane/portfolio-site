const Navbar = () => {
	return (
		<nav className="w-full p-6 border-b-[1px] border-secondary shadow-purple-400 shadow-lg">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold">navbar</h1>
				<div className="flex gap-4">
					<a
						href="#hero"
						className="px-3 py-2 rounded bg-secondary hover:bg-dark hover:shadow-xl transition"
					>
						Home
					</a>
					<a
						href="#projects"
						className="px-3 py-2 rounded bg-secondary hover:bg-dark hover:shadow-xl transition"
					>
						Projects
					</a>
					<a
						href="#about"
						className="px-3 py-2 rounded bg-secondary hover:bg-dark hover:shadow-xl transition"
					>
						About
					</a>
					<a
						href="#contact"
						className="px-3 py-2 rounded bg-secondary hover:bg-dark hover:shadow-xl transition"
					>
						Contact
					</a>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
