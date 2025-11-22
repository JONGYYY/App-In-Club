export const metadata = {
	title: "About",
};

export default function AboutPage() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<section className="section-wide relative overflow-hidden">
				<div className="absolute inset-0 animated-gradient" aria-hidden />
				<div className="container relative">
					<div className="max-w-3xl">
						<h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text reveal-up">About APP‑IN Club</h1>
						<p className="mt-4 text-lg text-muted reveal-up" style={{ animationDelay: "150ms" }}>
							App‑In Club is inspired by youth app inventors and coders. We spark imagination and unlock creativity through inquiry‑based, impact‑driven learning — helping students build apps that make a real difference.
						</p>
						<div className="mt-6 flex gap-2 reveal-up" style={{ animationDelay: "250ms" }}>
							<span className="Chip inline-flex items-center rounded-full border border-[color:var(--blue-200)] bg-white px-3 py-1 text-xs">APP‑IN TOGETHER</span>
							<span className="Chip inline-flex items-center rounded-full border border-[color:var(--blue-200)] bg-white px-3 py-1 text-xs">APP‑FOR GOOD</span>
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<div className="grid gap-8 sm:grid-cols-3">
						<div className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "120ms" }}>
							<div className="card-body">
								<div className="text-3xl font-bold text-[color:var(--brand)]">10,000+</div>
								<div className="text-sm text-muted mt-1">Students impacted</div>
							</div>
						</div>
						<div className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "220ms" }}>
							<div className="card-body">
								<div className="text-3xl font-bold text-[color:var(--brand)]">100+</div>
								<div className="text-sm text-muted mt-1">Courses & events</div>
							</div>
						</div>
						<div className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "320ms" }}>
							<div className="card-body">
								<div className="text-3xl font-bold text-[color:var(--brand)]">180+</div>
								<div className="text-sm text-muted mt-1">Apps created</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section section-muted">
				<div className="container">
					<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Our Mission</h2>
					<p className="mt-3 text-muted max-w-3xl">
						We envision everyone becoming full and active contributors to tomorrow’s society through App Inventor. Learn how to create apps to improve the world across healthcare, transportation, environment, and more.
					</p>
					<blockquote className="mt-6 card shadow-elevation1">
						<p className="card-body text-base">
							<span className="font-semibold">Impact‑driven learning</span> — Anyone can create apps with social impact!
						</p>
					</blockquote>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">What we create</h2>
					<ul className="mt-4 grid gap-4 sm:grid-cols-2">
						<li className="card shadow-elevation1"><div className="card-body text-sm">Snap Cook — turn food photos into recipes to reduce waste.</div></li>
						<li className="card shadow-elevation1"><div className="card-body text-sm">Productiviteams — MIT Summer Appathon submission.</div></li>
						<li className="card shadow-elevation1"><div className="card-body text-sm">EdBox — sharing and reusing educational resources.</div></li>
						<li className="card shadow-elevation1"><div className="card-body text-sm">Animal Services — help for lost or injured animals.</div></li>
						<li className="card shadow-elevation1"><div className="card-body text-sm">iHELP — safe cities: alerts to nearby helpers when needed.</div></li>
						<li className="card shadow-elevation1"><div className="card-body text-sm">Garbage Sort — high‑efficiency waste sorting and processing.</div></li>
					</ul>
				</div>
			</section>
		</div>
	);
}


