import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Projects } from './sections/Projects'
import { Divider } from '../../components/Divider'

export const Landing = () => {
	return (
		<main className="">
			<article className="flex flex-col m-auto max-w-3xl p-6 gap-y-8">
				<About />
				<Divider delay={0.15} />
				<Projects />
				<Divider delay={0.4} />
				<Contact />
			</article>
		</main>
	)
}
