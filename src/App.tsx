import { TossIt } from './pages/TossIt'
import { Header } from './components/Header'
import { Landing } from './pages/Landing/Landing'
import { Background } from './components/Background'
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
		</BrowserRouter>
	)
}
