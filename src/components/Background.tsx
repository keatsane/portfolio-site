import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { Canvas } from '@react-three/fiber'

type PointsProps = {
	count: number
	sep: number
}

const Points = ({ count, sep }: PointsProps) => {
	const pointsRef = useRef<THREE.Points>(null)

	const points = useMemo(() => {
		const positions = []
		const halfCount = count / 2
		for (let x = -halfCount; x < halfCount; x++) {
			for (let y = -halfCount; y < halfCount; y++) {
				positions.push(x * sep, 0, y * sep)
			}
		}
		return new Float32Array(positions)
	}, [count, sep])

	return (
		<points ref={pointsRef}>
			<bufferGeometry>
				<bufferAttribute
					attach="attributes.position"
					array={points}
					count={points.length / 3}
					itemSize={3}
				/>
			</bufferGeometry>
			<pointsMaterial color="white" size={0.5} />
		</points>
	)
}

export const Background = () => {
	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: -1,
				overflow: 'hidden',
			}}
		>
			<Canvas>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Points count={100} sep={1} />
			</Canvas>
		</div>
	)
}
