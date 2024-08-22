import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Projects } from './sections/Projects'
import { Divider } from '../../components/Divider'

export const Landing = () => {
	return (
		<main className="container">
			<About />
			<Divider delay={0.15} />
			<Projects />
			<Divider delay={0.55} />
			<Contact />
		</main>
	)
}
