import { Hero } from './sections/Hero'
import { Demo } from './sections/Demo'
import { Technologies } from './sections/Technologies'

export const TossIt = () => {
	return (
		<main className="">
			<article className="flex flex-col m-auto max-w-3xl p-6 gap-y-8">
				<Hero />
				<span
					className="border-b border-tertiary w-full fade-in"
					style={{ animationDelay: '0.15s' }}
				/>
				<Technologies />
				<span
					className="border-b border-tertiary w-full fade-in"
					style={{ animationDelay: '0.35s' }}
				/>
				<Demo />
			</article>
		</main>
	)
}
