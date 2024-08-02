import About from './pages/About'
import Contact from './pages/Contact'
import Landing from './pages/Landing'
import Projects from './pages/Projects'
import Background from './components/Background'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
	return (
		<>
			<Background />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
