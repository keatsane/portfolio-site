import { Technology } from './Technology'

export type Project = {
	logo: React.ReactNode
	title: string
	shortDesc: string
	typeIcon: React.ReactNode
	slug: string

	// ????

	techStack?: Technology[]
	github?: string
	demo?: string
	image?: string

	delay?: string
}
