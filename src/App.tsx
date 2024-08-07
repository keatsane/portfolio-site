import { Header } from './components/Header'
import { Landing } from './pages/Landing/Landing'
import { Background } from './components/Background'
import { ScrollToTop } from './components/ScrollToTop'
import { TossIt } from './pages/Projects/TossIt/TossIt'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
	return (
		<BrowserRouter>
			<Background />
			<Header />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/TossIt" element={<TossIt />} />
			</Routes>
			<ScrollToTop />
		</BrowserRouter>
	)
}
