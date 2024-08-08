import { OrbitControls, Plane } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Back } from '../../../../components/buttons/Back'
import { ViewCode } from '../../../../components/buttons/ViewCode'

export const Hero = () => {
	return (
		<section id="hero" className="flex flex-col md:flex-row gap-y-2 fade-in text-primary">
			<div className="flex flex-col gap-y-2">
				<div
					className="flex items-center gap-x-4 fade-in"
					style={{ animationDelay: '0.05s' }}
				>
					<Back size={24} />
					<h2 className="text-4xl sm:text-5xl font-extrabold">TOSS IT</h2>
					<ViewCode link="https://github.com/keatsane/TossIt" />
				</div>
				<div>
					<div className="fade-in" style={{ animationDelay: '0.1s' }}>
						<span className="text-secondary">
							Throwback to the mobile classic - Paper Toss - a game where you throw
							crumpled paper into a trash can.
						</span>
					</div>
				</div>
			</div>
			<div
				className="flex-1 gap-x-4 fade-in border-2 border-secondary"
				style={{ animationDelay: '0.1s' }}
			>
				<Canvas>
					<ambientLight intensity={0.5} />
					<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
					<pointLight position={[-10, -10, -10]} />
					<Plane position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} />
					<OrbitControls />
					{/* <Physics>
						<Plane position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} />
						<TrashCan position={[0, 0, 0]} />
						<Throwables />
					</Physics> */}
				</Canvas>
			</div>
		</section>
	)
}
