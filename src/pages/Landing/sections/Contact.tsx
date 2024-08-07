export const Contact = () => {
	return (
		<section id="contact" className="flex flex-col gap-y-2">
			<div className="flex flex-col sm:flex-row justify-between items-center">
				<h2 className="text-3xl font-bold mb-2">Contact Me</h2>
				<div className="flex gap-x-2 items-center">
					<span className="text-secondary">keatingsane@outlook.com</span>
					<span className="text-secondary">407-408-1452</span>
				</div>
			</div>

			<form className="flex flex-col gap-y-2">
				<input
					type="text"
					placeholder="Name"
					className="p-2 border border-secondary bg-opaque focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
				/>
				<input
					type="email"
					placeholder="Email"
					className="p-2 border border-secondary bg-opaque focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
				/>
				<textarea
					placeholder="Message"
					className="p-2 border border-secondary bg-opaque focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
				/>
				<button
					type="submit"
					className="p-2 bg-secondary text-secondary font-bold hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
				>
					Send
				</button>
			</form>
		</section>
	)
}
