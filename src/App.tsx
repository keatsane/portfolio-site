import { NotFound } from './pages/NotFound'
import { Header } from './components/Header'
import { Landing } from './pages/landing/Landing'
import { Background } from './components/Background'
import { TossIt } from './pages/projects/toss_it/TossIt'
import { ScrollToTop } from './components/buttons/ScrollToTop'
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
