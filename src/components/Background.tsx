import * as THREE from 'three'
import { useEffect, useRef } from 'react'

const Background = () => {
	const mountRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const mount = mountRef.current
		if (!mount) return

		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(
			103,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		)
		const renderer = new THREE.WebGLRenderer()
		renderer.setSize(window.innerWidth, window.innerHeight)
		mount.appendChild(renderer.domElement)

		const starsGeometry = new THREE.BufferGeometry()
		const starCount = 10000

		const starPositions = new Float32Array(starCount * 3)
		for (let i = 0; i < starCount; i++) {
			starPositions[i] = (Math.random() - 0.5) * 100
		}
		starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))

		const starsMaterial = new THREE.PointsMaterial()
		starsMaterial.size = 0.005

		const stars = new THREE.Points(starsGeometry, starsMaterial)
		scene.add(stars)

		camera.position.z = 5

		const animate = () => {
			requestAnimationFrame(animate)
			renderer.render(scene, camera)
		}
		animate()

		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight
			camera.updateProjectionMatrix()
			renderer.setSize(window.innerWidth, window.innerHeight)
		}
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
			mount.removeChild(renderer.domElement)
		}
	}, [])

	return (
		<div
			ref={mountRef}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: -1,
			}}
		/>
	)
}

export default Background
