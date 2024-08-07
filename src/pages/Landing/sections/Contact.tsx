import { useState } from 'react'
import { IoIosSend } from 'react-icons/io'
import { IoMailSharp } from 'react-icons/io5'
import { RiMessage2Fill } from 'react-icons/ri'

export const Contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [emailCopied, setEmailCopied] = useState(false)
	const [phoneCopied, setPhoneCopied] = useState(false)

	const isFormValid = name && email && message && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	const isValidEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email

	const copyToClipboard = (text: string, type: 'email' | 'phone') => {
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
		<section id="contact" className="flex flex-col gap-y-2">
			<div className="flex flex-col sm:flex-row justify-between sm:items-center">
				<h2
					className="text-2xl md:text-3xl font-extrabold mb-2 fade-in"
					style={{ animationDelay: '0.55s' }}
				>
					CONTACT ME
				</h2>
				<div
					className="flex flex-col sm:flex-row gap-x-4 items-start sm:items-center mb-2 sm:mb-0 text-secondary fade-in"
					style={{ animationDelay: '0.6s' }}
				>
					<span
						className={`flex items-center gap-x-2 hover:bg-opaque p-2 cursor-pointer transition relative ${
							emailCopied ? 'text-success' : 'text-secondary'
						} `}
						onClick={() => copyToClipboard('keatingsane@outlook.com', 'email')}
					>
						<IoMailSharp size={24} />
						keatingsane@outlook.com
						{emailCopied && (
							<span className="text-sm absolute bottom-0 left-0 right-0 top-0 transform translate-y-full slide-up-down">
								Copied
							</span>
						)}
					</span>
					<span
						className={`flex items-center gap-x-2 hover:bg-opaque p-2 cursor-pointer transition relative ${
							phoneCopied ? 'text-success' : 'text-secondary'
						} `}
						onClick={() => copyToClipboard('407-408-1452', 'phone')}
					>
						<RiMessage2Fill size={24} />
						407-408-1452
						{phoneCopied && (
							<span className="text-sm absolute bottom-0 left-0 right-0 top-0 transform translate-y-full slide-up-down">
								Copied
							</span>
						)}
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
					className="p-2 border border-secondary bg-opaque placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent fade-in"
					style={{ animationDelay: '0.65s' }}
				/>
				<input
					id="email"
					type="email"
					placeholder="Email"
					autoComplete="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="p-2 border border-secondary bg-opaque placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent fade-in"
					style={{ animationDelay: '0.7s' }}
				/>
				<textarea
					id="message"
					placeholder="Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="p-2 border border-secondary bg-opaque placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent fade-in"
					style={{ animationDelay: '0.75s', minHeight: '100px', maxHeight: '300px' }}
				/>
				<button
					type="submit"
					disabled={!isFormValid}
					className={`p-2 font-bold focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition ${
						!isFormValid
							? 'bg-secondary cursor-not-allowed'
							: 'bg-accent hover:bg-accent_dark'
					} fade-in`}
					style={{ animationDelay: '0.8s' }}
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
