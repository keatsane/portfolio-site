import { NotFound } from './pages/NotFound'
import { Header } from './components/Header'
import { Landing } from './pages/Landing/Landing'
import { Background } from './components/Background'
import { ScrollToTop } from './components/buttons/ScrollToTop'
import { TossIt } from './pages/projects/TossIt/TossIt'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
	return (
		<BrowserRouter>
			<Background />
			<Header />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/TossIt" element={<TossIt />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<ScrollToTop />
		</BrowserRouter>
	)
}
