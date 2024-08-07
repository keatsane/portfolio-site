import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

type PointsProps = {
	count: number
	sep: number
}

const Points = ({ count, sep }: PointsProps) => {
	const positions = useMemo(() => {
		const positions = []
		for (let i = 0; i < count; i++) {
			for (let j = 0; j < count; j++) {
				const x = i * sep - (count * sep) / 2
				const y = j * sep - (count * sep) / 2
				const z = 0
				positions.push(x, y, z)
			}
		}
		return new Float32Array(positions)
	}, [count, sep])

	const ref = useRef<THREE.BufferAttribute>(null)

	useFrame(() => {
		if (ref.current) {
			const positions = ref.current.array
			for (let j = 0; j < count; j++) {
				for (let i = 0; i < count; i++) {
					const z = Math.sin((i + j) * 0.2 + 0.1 * Date.now() * 0.01) * 2
					positions[i * 3 + j * count * 3 + 2] = z
				}
			}
			ref.current.needsUpdate = true
		}
	})

	return (
		<points>
			<bufferGeometry attach="geometry">
				<bufferAttribute
					ref={ref}
					attach="attributes-position"
					array={positions}
					count={positions.length / 3}
					itemSize={3}
				/>
			</bufferGeometry>
			<pointsMaterial size={0.5} sizeAttenuation color="gray" opacity={0.5} transparent />
		</points>
	)
}

export const Background = () => {
	return (
		<div
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: -1,
			}}
		>
			<Canvas
				camera={{
					fov: 75,
					near: 250,
					far: 350,
					position: [0, 0, 300],
				}}
			>
				<Points count={400} sep={5} />
			</Canvas>
		</div>
	)
}
