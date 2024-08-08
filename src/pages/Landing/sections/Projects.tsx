import { CgWebsite, CgExtension } from 'react-icons/cg'
import { ProjectCard } from '../../../components/ProjectCard'
import { FaGamepad, FaTrash, FaGear, FaChessKnight, FaQuestion } from 'react-icons/fa6'

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
				logo={<FaTrash size={24} />}
				link="/TossIt"
				name="TossIt"
				description="Browser remake of classic game"
				delay={0.25}
				icon={<FaGamepad size={24} />}
			/>
			<ProjectCard
				logo={<FaChessKnight size={24} />}
				link="Knights"
				name="Knights"
				description="Lightweight chess engine"
				delay={0.3}
				icon={<FaGear size={24} />}
			/>
			<ProjectCard
				logo={<FaQuestion size={24} />}
				link="/TBD"
				name="TBD"
				description="To be decided..."
				delay={0.35}
				icon={<FaQuestion size={24} />}
			/>
		</section>
	)
}
