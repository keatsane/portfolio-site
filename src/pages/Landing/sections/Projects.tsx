import { FaGamepad, FaGear } from 'react-icons/fa6'
import { CgWebsite, CgExtension } from 'react-icons/cg'
import { ProjectCard } from '../../../components/ProjectCard'

export const Projects = () => {
	return (
		<section id="projects" className="flex flex-col gap-y-2 text-primary">
			<h2
				className="text-2xl md:text-3xl font-extrabold fade-in"
				style={{ animationDelay: '0.2s' }}
			>
				PROJECTS
			</h2>
			<ProjectCard
				link="/TossIt"
				name="TossIt"
				description="Browser remake of classic game"
				delay={0.25}
				icon={<FaGamepad size={24} />}
			/>
			<ProjectCard
				link="/Spotted"
				name="Spotted"
				description="Stealth based browser game"
				delay={0.3}
				icon={<FaGamepad size={24} />}
			/>
			<ProjectCard
				link="/Website"
				name="Cool Website"
				description="Website w/ many themes"
				delay={0.35}
				icon={<CgWebsite size={24} />}
			/>
			<ProjectCard
				link="/ChromeExtension"
				name="Extension"
				description="Useful Chrome Extension"
				delay={0.4}
				icon={<CgExtension size={24} />}
			/>
			<ProjectCard
				link="/ChessEngine"
				name="Chess Engine"
				description="Basic Chess Engine"
				delay={0.45}
				icon={<FaGear size={24} />}
			/>
		</section>
	)
}
