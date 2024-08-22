// import { CgWebsite, CgExtension } from 'react-icons/cg'
import { ProjectCard } from '../../../components/ProjectCard'
// import { FaGamepad, FaTrash, FaGear, FaChessKnight, FaQuestion } from 'react-icons/fa6'

export const Projects = () => {
	return (
		<section id="projects" className="flex flex-col gap-y-2">
			<h2 className="fade-in" style={{ animationDelay: '0.2s' }}>
				PROJECTS
			</h2>
			<ProjectCard
				title="TossIt"
				shortDesc="Revamp of classic mobile game"
				slug="/TossIt"
				delay="0.25s"
			/>
			<ProjectCard
				title="Knights"
				shortDesc="Lightweight chess engine"
				slug="/Knights"
				delay="0.3s"
			/>
			<ProjectCard title="TBD" shortDesc="To be decided" slug="/TBD" delay="0.35s" />
			<ProjectCard title="TBD" shortDesc="To be decided" slug="/123" delay="0.4s" />
			<ProjectCard title="TBD" shortDesc="To be decided" slug="/random" delay="0.45s" />
			<ProjectCard title="TBD" shortDesc="To be decided" slug="/test" delay="0.5s" />
		</section>
	)
}
