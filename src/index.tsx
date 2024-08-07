import './index.css'
import { App } from './App.tsx'
import ReactDOM from 'react-dom/client'
import { SpeedInsights } from '@vercel/speed-insights/next'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<App />
		<SpeedInsights />
	</>
)
