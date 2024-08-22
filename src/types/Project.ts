import { Technology } from './Technology'

export type Project = {
	title: string
	shortDesc: string
	slug: string

	// ????

	techStack?: Technology[]
	github?: string
	demo?: string
	image?: string

	delay?: string
}
