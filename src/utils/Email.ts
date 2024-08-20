import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (name: string, sender: string, message: string) => {
	const { data, error } = await resend.emails.send({
		from: process.env.NODE_ENV === 'production' ? sender : 'Acme <onboarding@resend.dev>',
		to:
			process.env.NODE_ENV === 'production'
				? 'keatingsane@outlook.com'
				: ['delivered@resend.dev'],
		subject: `{Portfolio Contact - ${name}}`,
		text: message,
	})

	if (error) {
		return console.error({ error })
	}

	console.log({ data })
}
