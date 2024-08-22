import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Accent } from '../../../components/buttons/Accent'
import { Reference } from '../../../components/buttons/Reference'

export const About = () => {
	return (
		<section id="about" className="section">
			<div
				className="flex flex-col sm:flex-row sm:items-center sm:justify-between fade-in"
				style={{ animationDelay: '0.05s' }}
			>
				<h1>KEATING SANE</h1>
				<div className="hidden sm:flex items-center gap-x-4">
					<Reference
						link="https://github.com/keatsane"
						title="GitHub"
						icon={<FaGithub size={32} />}
					/>
					<Reference
						link="https://www.linkedin.com/in/keatingsane/"
						title="LinkedIn"
						icon={<FaLinkedin size={32} />}
					/>
				</div>
			</div>
			<div
				className="flex flex-col sm:flex-row sm:items-center sm:justify-between fade-in mt-2"
				style={{ animationDelay: '0.1s' }}
			>
				<p>
					<span className="font-semibold">Computer Science</span> student at the{' '}
					<span className="font-semibold text-accent">University of Central Florida</span>
				</p>
				<div className="flex sm:hidden justify-between items-center mt-2 gap-x-4">
					<div className="flex items-center gap-x-4">
						<Reference
							link="https://github.com/keatsane"
							title="GitHub"
							icon={<FaGithub size={24} />}
						/>
						<Reference
							link="https://www.linkedin.com/in/keatingsane/"
							title="LinkedIn"
							icon={<FaLinkedin size={24} />}
						/>
					</div>

					<Accent />
				</div>
				<div className="hidden sm:block">
					<Accent />
				</div>
			</div>
		</section>
	)
}
