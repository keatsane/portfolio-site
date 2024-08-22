import { useState, useEffect } from 'react'
import { IoChevronUpSharp } from 'react-icons/io5'

export const ScrollToTop = () => {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 200)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0 })
	}

	return (
		<>
			{isScrolled && (
				<button
					title="Scroll to top"
					className="fixed bottom-4 right-4 z-50 p-2 bg-opaque hover:bg-accent transition"
					onClick={scrollToTop}
				>
					<IoChevronUpSharp size={24} />
				</button>
			)}
		</>
	)
}
