// talk about inspiration, what i learned and what was challenging
// show technologies used in project

import { SiThreedotjs, SiTypescript, SiReact } from 'react-icons/si'
import { TechDisplay } from '../../../../components/TechDisplay'

export const About = () => {
	return (
		<section id="about" className="flex flex-col gap-y-2 fade-in text-primary">
			<h2 className="text-2xl sm:text-3xl font-extrabold mb-4 fade-in">ABOUT</h2>
			<div>
				<div
					className="flex flex-col md:flex-row gap-x-2 fade-in"
					style={{ animationDelay: '0.15s' }}
				>
					<span className="text-secondary">Technologies I used in this project:</span>
				</div>

				<div
					className="flex items-center gap-x-4 mt-2 fade-in "
					style={{ animationDelay: '0.2s' }}
				>
					<TechDisplay
						icon={<SiThreedotjs size={24} />}
						name="Three.js"
						link="https://threejs.org"
					/>
					<TechDisplay
						icon={<SiTypescript size={24} />}
						name="TypeScript"
						link="https://www.typescriptlang.org"
					/>
					<TechDisplay
						icon={<SiReact size={24} />}
						name="React"
						link="https://reactjs.org"
					/>
				</div>
			</div>
		</section>
	)
}
