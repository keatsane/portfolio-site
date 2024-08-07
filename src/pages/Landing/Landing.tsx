import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Projects } from './sections/Projects'

export const Landing = () => {
	return (
		<main className="">
			<article className="flex flex-col m-auto max-w-3xl p-6 gap-y-8">
				<About />
				<span className="border-b border-tertiary w-full" />
				<Projects />
				<span className="border-b border-tertiary w-full" />
				<Contact />
			</article>
		</main>
	)
}
