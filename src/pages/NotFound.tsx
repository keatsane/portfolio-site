import { Back } from '../components/buttons/Back'

export const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center text-primary fade-in">
			<h1 className="text-4xl font-bold">404</h1>
			<p className="text-xl mb-4">Page not found</p>
			<Back size={32} />
		</div>
	)
}
