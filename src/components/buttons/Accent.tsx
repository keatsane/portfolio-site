import { useEffect, useState } from 'react'

export const Accent = () => {
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
		<button
			className="hover:bg-opaque p-2 transition"
			title={isNautMode ? 'Switch to knight' : 'Switch to naut'}
			onClick={toggleAccentMode}
		>
			<p className="text-accent font-bold italic whitespace-nowrap">
				{isNautMode ? "Go Nauts'!" : 'Go Knights!'}
			</p>
		</button>
	)
}
