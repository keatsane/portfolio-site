import ProjectCard from '../components/ProjectCard'

const Projects = () => {
	return (
		<section id="projects" className="bg-primary p-6">
			<h2 className="mb-6 text-2xl">Projects</h2>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</section>
	)
}

export default Projects
