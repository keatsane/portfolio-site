import { Hero } from './Sections/Hero'
import { Demo } from './Sections/Demo'
import { About } from './Sections/About'

export const TossIt = () => {
	return (
		<main className="">
			<article className="flex flex-col m-auto max-w-3xl p-6 gap-y-8">
				<Hero />
				<span
					className="border-b border-tertiary w-full fade-in"
					style={{ animationDelay: '0.1s' }}
				/>
				<About />
				<span
					className="border-b border-tertiary w-full fade-in"
					style={{ animationDelay: '0.25s' }}
				/>
				<Demo />
			</article>
		</main>
	)
}
