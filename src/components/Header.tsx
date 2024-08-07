import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { IoSunnyOutline } from 'react-icons/io5'
import { moonPhases } from '../utils/MoonPhases'

export const Header = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(() => {
		const savedTheme = localStorage.getItem('theme')
		return savedTheme === 'dark'
	})
	const [moonPhaseIndex, setMoonPhaseIndex] = useState(0)

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme === 'light') {
			document.documentElement.classList.add('light-theme')
			setIsDarkTheme(false)
		} else {
			document.documentElement.classList.remove('light-theme')
			setIsDarkTheme(true)
		}
	}, [])

	useEffect(() => {
		if (isDarkTheme) {
			document.documentElement.classList.remove('light-theme')
		} else {
			document.documentElement.classList.add('light-theme')
		}
	}, [isDarkTheme])

	useEffect(() => {
		const interval = setInterval(() => {
			setMoonPhaseIndex((prevIndex) => (prevIndex + 1) % moonPhases.length)
		}, 75)
		return () => clearInterval(interval)
	}, [])

	const toggleTheme = () => {
		const newTheme = isDarkTheme ? 'light' : 'dark'
		localStorage.setItem('theme', newTheme)
		setIsDarkTheme(!isDarkTheme)
	}

	const CurrentMoonPhase = moonPhases[moonPhaseIndex]

	return (
		<header className="flex justify-between items-center p-6 fade-down">
			<Link to="/" className="text-3xl font-extrabold hover:text-accent transition">
				KS
			</Link>
			<div className="font-semibold flex gap-x-2 md:gap-x-4 text-secondary">
				<a href="#about" className="hover:text-primary transition">
					ABOUT
				</a>
				<a href="#projects" className="hover:text-primary transition">
					PROJECTS
				</a>
				<a href="#contact" className="hover:text-primary transition">
					CONTACT
				</a>
				<button onClick={toggleTheme} className="hover:text-primary transition">
					{isDarkTheme ? (
						<CurrentMoonPhase
							size={24}
							style={{
								pointerEvents: 'none',
							}}
						/>
					) : (
						<IoSunnyOutline
							size={24}
							className="rotate"
							style={{
								pointerEvents: 'none',
							}}
						/>
					)}
				</button>
			</div>
		</header>
	)
}
