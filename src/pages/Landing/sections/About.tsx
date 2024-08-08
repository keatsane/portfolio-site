import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Reference } from '../../../components/buttons/Reference'

export const About = () => {
	const [isNautMode, setIsNautMode] = useState(() => {
		const savedMode = localStorage.getItem('mode')
		return savedMode === 'naut'
	})

	useEffect(() => {
		const savedTheme = localStorage.getItem('mode')
		if (savedTheme === 'knight') {
			document.documentElement.classList.add('knight-mode')
			setIsNautMode(false)
		} else {
			document.documentElement.classList.add('knight-mode')
			setIsNautMode(true)
		}
	}, [])

	useEffect(() => {
		if (isNautMode) {
			document.documentElement.classList.remove('knight-mode')
		} else {
			document.documentElement.classList.add('knight-mode')
		}
	}, [isNautMode])

	const toggleAccentMode = () => {
		const newMode = isNautMode ? 'knight' : 'naut'
		localStorage.setItem('mode', newMode)
		setIsNautMode(!isNautMode)
	}

	return (
		<section id="about" className="flex flex-col gap-y-2 fade-in text-primary">
			<h2 className="text-4xl sm:text-5xl font-extrabold mb-4 fade-in">KEATING SANE</h2>
			<div>
				<div
					className="flex items-center gap-x-2 fade-in"
					style={{ animationDelay: '0.05s' }}
				>
					<span className="text-secondary">
						Computer Science student at the University of Central Florida.
					</span>
					<button
						className="text-accent font-bold italic hover:bg-opaque p-2 transition"
						onClick={toggleAccentMode}
					>
						{isNautMode ? "Go Nauts', Charge On!" : 'Go Knights, Charge On!'}
					</button>
				</div>
				<div
					className="flex items-center gap-x-4 mt-4 fade-in"
					style={{ animationDelay: '0.1s' }}
				>
					<Reference
						link="https://github.com/keatsane"
						title="GitHub"
						icon={<FaGithub size={28} />}
					/>
					<Reference
						link="https://www.linkedin.com/in/keatingsane/"
						title="LinkedIn"
						icon={<FaLinkedin size={32} />}
					/>
				</div>
			</div>
		</section>
	)
}
