// show rotating cool thing from project

export const Hero = () => {
	return (
		<section id="hero" className="flex flex-col sm:flex-row gap-y-2 fade-in text-primary">
			<div className="flex flex-col gap-y-2 w-2/3">
				<h2 className="text-4xl sm:text-5xl font-extrabold mb-4 fade-in">TOSS IT</h2>
				<div>
					<div
						className="flex flex-col md:flex-row gap-x-2 fade-in"
						style={{ animationDelay: '0.05s' }}
					>
						<span className="text-secondary">
							Throwback to the mobile classic - Paper Toss - a game where you throw
							crumpled paper into a trash can.
						</span>
					</div>
				</div>
			</div>
			<div
				className="flex-1 items-center gap-x-4 fade-in"
				style={{ animationDelay: '0.05s' }}
			>
				spinny trash can here
			</div>
		</section>
	)
}
