const Contact = () => {
	return (
		<section id="contact" className="bg-secondary p-6">
			<div className="mb-4">
				<h1 className="text-3xl">Get in touch</h1>
				<p>
					Contact me through the form below or by emailing me at{' '}
					{/* <a href="mailto: [email protected]"> [email protected]</a> */}
				</p>
			</div>
			<form className="flex flex-col gap-y-2">
				<div className="flex flex-col">
					<label htmlFor="name" className="mb-1">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="your name"
						className="px-3 py-2 rounded bg-dark"
						required
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="email" className="mb-1">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="your email"
						className="px-3 py-2 rounded bg-dark"
						required
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="message" className="mb-1">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						placeholder="additional information"
						className="px-3 py-2 rounded bg-dark"
						required
					/>
				</div>
				<button
					type="submit"
					className="px-3 py-2 rounded-lg bg-primary hover:bg-dark transition"
				>
					Send
				</button>
			</form>
		</section>
	)
}

export default Contact
