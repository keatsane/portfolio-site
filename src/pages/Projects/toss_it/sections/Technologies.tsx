import { TechDisplay } from '../../../../components/TechDisplay'
import { SiThreedotjs, SiTypescript, SiReact, SiBlender } from 'react-icons/si'

export const Technologies = () => {
	return (
		<section id="technologies" className="flex flex-col gap-y-2 fade-in text-primary">
			<h2 className="text-2xl sm:text-3xl font-extrabold mb-4 fade-in">Technologies</h2>
			<div>
				<div
					className="flex flex-col md:flex-row gap-x-2 fade-in"
					style={{ animationDelay: '0.2s' }}
				>
					<span className="text-secondary">Technologies I used in this project:</span>
				</div>
				<div className="text-sm sm:text-lg flex flex-col sm:flex-row gap-2 sm:gap-4">
					<div
						className="flex items-center gap-2 sm:gap-4 fade-in "
						style={{ animationDelay: '0.25s' }}
					>
						<TechDisplay
							icon={<SiThreedotjs size={24} />}
							name="Three.js"
							link="https://threejs.org"
							color={'primary'}
						/>
						<TechDisplay
							icon={<SiTypescript size={24} />}
							name="TypeScript"
							link="https://www.typescriptlang.org"
							color="#3178c6"
						/>
						<TechDisplay
							icon={<SiReact size={24} />}
							name="React"
							link="https://reactjs.org"
							color="#61dafb"
						/>
					</div>
					<div
						className="flex items-center gap-2 sm:gap-4 fade-in "
						style={{ animationDelay: '0.3s' }}
					>
						<TechDisplay
							icon={<SiBlender size={24} />}
							name="Blender"
							link="https://www.blender.org"
							color="#f5792a"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
