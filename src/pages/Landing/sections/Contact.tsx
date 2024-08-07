import { useState } from 'react'
import { RiMessage2Fill } from 'react-icons/ri'
import { IoMdMail, IoIosSend } from 'react-icons/io'

export const Contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const isFormValid = name && email && message && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	const isValidEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email

	return (
		<section id="contact" className="flex flex-col gap-y-2">
			<div className="flex flex-col sm:flex-row justify-between items-center">
				<h2 className="text-3xl font-bold mb-2">Contact Me</h2>
				<div className="flex flex-col sm:flex-row gap-x-4 items-center mb-2 sm:mb-0 text-secondary">
					<span className="flex items-center gap-x-2">
						<IoMdMail size={24} />
						keatingsane@outlook.com
					</span>
					<span className="flex items-center gap-x-2">
						<RiMessage2Fill size={24} />
						407-408-1452
					</span>
				</div>
			</div>

			<form className="flex flex-col gap-y-2">
				<input
					id="name"
					type="text"
					placeholder="Name"
					autoComplete="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="p-2 border border-secondary bg-opaque placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
				/>
				<input
					id="email"
					type="email"
					placeholder="Email"
					autoComplete="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="p-2 border border-secondary bg-opaque placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
				/>
				<textarea
					id="message"
					placeholder="Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="p-2 border border-secondary bg-opaque placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
					style={{ minHeight: '100px' }}
				/>
				<button
					type="submit"
					disabled={!isFormValid}
					className={`p-2 font-bold focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent ${
						!isFormValid
							? 'bg-secondary cursor-not-allowed'
							: 'bg-accent hover:bg-accent_dark transition'
					}`}
				>
					{isFormValid ? (
						<div className="text-primary flex justify-center items-center gap-x-2">
							Send <IoIosSend size={18} />
						</div>
					) : isValidEmail ? (
						'Must be valid email'
					) : (
						'All fields required'
					)}
				</button>
			</form>
		</section>
	)
}
