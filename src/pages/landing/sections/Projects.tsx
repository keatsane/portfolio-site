// import { CgWebsite, CgExtension } from 'react-icons/cg'
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
				title="TossIt"
				shortDesc="Revamp of classic mobile game"
				typeIcon={<FaGamepad size={24} />}
				slug="/TossIt"
				delay="0.25s"
			/>
			<ProjectCard
				logo={<FaChessKnight size={24} />}
				title="Knights"
				shortDesc="Lightweight chess engine"
				typeIcon={<FaGear size={24} />}
				slug="/Knights"
				delay="0.3s"
			/>
			<ProjectCard
				logo={<FaQuestion size={24} />}
				title="TBD"
				shortDesc="To be decided"
				typeIcon={<FaQuestion size={24} />}
				slug="/TBD"
				delay="0.35s"
			/>
		</section>
	)
}
