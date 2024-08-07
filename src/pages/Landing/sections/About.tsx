import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const About = () => {
	return (
		<section id="about" className="flex flex-col gap-y-2">
			<h2 className="text-4xl font-extrabold mb-4">Keating Sane</h2>
			<div>
				<div className="flex flex-col md:flex-row gap-x-2">
					<span className="text-secondary">
						Computer Science student at the University of Central Florida.
					</span>
					<span className="text-accent font-bold italic">Go Knights, Charge On!</span>
				</div>
				<div className="flex items-center gap-x-4 mt-4">
					<a href="https://github.com/keatsane" target="_blank" rel="noopener noreferrer">
						<FaGithub size={28} className="text-primary hover:text-accent transition" />
					</a>
					<a
						href="https://www.linkedin.com/in/keatingsane/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin
							size={32}
							className="text-primary hover:text-accent transition"
						/>
					</a>
				</div>
			</div>
		</section>
	)
}
