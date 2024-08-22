import { useState } from 'react'
import { IoIosSend } from 'react-icons/io'
// import { sendEmail } from '../../../utils/Email'

export const Contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [emailCopied, setEmailCopied] = useState(false)
	const [phoneCopied, setPhoneCopied] = useState(false)

	const isFormValid = name && email && message && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	const isValidEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email

	const handleCopy = (text: string, type: 'email' | 'phone') => {
		navigator.clipboard.writeText(text).then(() => {
			if (type === 'email') {
				setEmailCopied(true)
				setTimeout(() => setEmailCopied(false), 2000)
			} else {
				setPhoneCopied(true)
				setTimeout(() => setPhoneCopied(false), 2000)
			}
		})
	}

	return (
		<section id="contact" className="section">
			<div
				className="flex flex-col md:flex-row md:justify-between md:items-center fade-in"
				style={{ animationDelay: '0.6s' }}
			>
				<h2>CONTACT ME</h2>
				<div className="flex gap-x-2">
					<p
						className={`p-2 transition cursor-pointer truncate ${
							emailCopied
								? 'bg-accent text-primary cursor-default'
								: 'hover:bg-opaque'
						}`}
						title="Copy email"
						onClick={() => handleCopy('keatingsane@outlook.com', 'email')}
					>
						keatingsane@outlook.com
					</p>
					<p
						className={`p-2 transition cursor-pointer truncate ${
							phoneCopied
								? 'bg-accent text-primary cursor-default'
								: 'hover:bg-opaque'
						}`}
						title="Copy phone"
						onClick={() => handleCopy('4074081452', 'phone')}
					>
						407-408-1452
					</p>
				</div>
			</div>
			<form className="flex flex-col gap-y-2">
				<input
					id="name"
					type="text"
					title="Input name"
					placeholder="Name"
					autoComplete="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="p-2 border border-secondary bg-opaque placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent fade-in"
					style={{ animationDelay: '0.65s' }}
				/>
				<input
					id="email"
					type="email"
					title="Input email"
					placeholder="Email"
					autoComplete="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="p-2 border border-secondary bg-opaque placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent fade-in"
					style={{ animationDelay: '0.7s' }}
				/>
				<textarea
					id="message"
					title="Input message"
					placeholder="Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="p-2 border border-secondary bg-opaque placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent fade-in"
					style={{ animationDelay: '0.75s', minHeight: '100px', maxHeight: '300px' }}
				/>
				<button
					type="submit"
					disabled={!isFormValid}
					className={`p-2 font-bold focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition uppercase ${
						!isFormValid
							? 'bg-opaque cursor-not-allowed text-secondary'
							: 'bg-accent text-primary hover:bg-primary hover:text-accent'
					} fade-in`}
					style={{ animationDelay: '0.8s' }}
				>
					{isFormValid ? (
						<div className="flex justify-center items-center gap-x-2">
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
