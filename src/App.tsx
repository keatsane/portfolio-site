import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Contact from './sections/Contact'

const App = () => {
	return (
		<div className="flex flex-col gap-y-6 max-w-7xl mx-auto">
			<Navbar />
			<Hero />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
