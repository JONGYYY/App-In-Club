export default function Home() {
  return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			{/* Hero */}
			<section className="section hero-brand">
				<div className="container text-center max-w-3xl">
					<h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
						APP‑IN Club — A Global Student‑Run Organization
					</h1>
					<p className="mt-4 text-base sm:text-lg text-muted">
						We promote impact‑driven learning: sparking imagination and creating apps to improve the world.
					</p>
					<div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
						<a href="/programs/educational-programs" className="site-cta">Explore Programs</a>
						<a href="/contact" className="site-nav-link">Contact Us</a>
					</div>
				</div>
			</section>

			{/* Featured Event */}
			<section className="section section-muted">
				<div className="container">
					<header className="mb-6 sm:mb-8">
						<div className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60">
							Featured Event
						</div>
						<h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight">
							2025 AI Summit For Young Scholars
						</h2>
						<p className="mt-2 text-muted max-w-3xl">
							Two days of engaging workshops and a mentor‑guided hackathon for students of all ages.
							Workshops include MIT App Inventor (App‑In Club), Accelerating Python with NVIDIA, BioEthicAI,
							and 3D Printing DIY UV Charm.
						</p>
					</header>
					<div className="grid gap-4 sm:flex sm:items-center">
						<div className="text-sm text-muted">
							<div>Date: June 7–8, 2025</div>
							<div>Day 1: Cupertino City Hall • Day 2: MakerNexus, Sunnyvale</div>
						</div>
						<div className="flex gap-3">
							<a href="#" className="site-cta">Register</a>
							<a href="#" className="site-nav-link">Donation</a>
						</div>
					</div>
				</div>
			</section>

			{/* Programs */}
			<section className="section">
				<div className="container">
					<header className="mb-6 sm:mb-8 flex items-end justify-between">
						<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Programs</h2>
						<a href="/programs/educational-programs" className="site-nav-link">View all</a>
					</header>
					<div className="grid gap-4 sm:grid-cols-3">
						<div className="card">
							<div className="card-body">
								<h3 className="font-semibold">Educational Programs</h3>
								<p className="mt-2 text-sm text-muted">
									MIT App Inventor courses, workshops, and tutoring.
								</p>
								<a href="/programs/educational-programs" className="mt-3 inline-block site-nav-link">
									Read more
								</a>
							</div>
						</div>
						<div className="card">
							<div className="card-body">
								<h3 className="font-semibold">Competitions & Events</h3>
								<p className="mt-2 text-sm text-muted">
									Participate in regional, national, and international competitions.
								</p>
								<a href="/programs/competitions-and-events" className="mt-3 inline-block site-nav-link">
									Read more
								</a>
							</div>
						</div>
						<div className="card">
							<div className="card-body">
								<h3 className="font-semibold">Lectures & Conferences</h3>
								<p className="mt-2 text-sm text-muted">
									Lectures from scholars, industry leaders, champions, and top students.
								</p>
								<a href="/programs/lectures-and-conferences" className="mt-3 inline-block site-nav-link">
									Read more
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* News / Achievements */}
			<section className="section section-muted">
				<div className="container">
					<header className="mb-6 sm:mb-8">
						<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">In the News</h2>
						<p className="mt-2 text-muted">Highlights from recent achievements.</p>
					</header>
					<ul className="grid gap-4 sm:grid-cols-3">
						<li className="card">
							<div className="card-body text-sm">
								App‑In Club members and officers won at MIT AI & EDU Summit “Hack the Climate”.
							</div>
						</li>
						<li className="card">
							<div className="card-body text-sm">Officers and members recognized at Congressional App Challenge.</div>
						</li>
						<li className="card">
							<div className="card-body text-sm">Global AI Hackathon youth team award and honorable mention.</div>
						</li>
					</ul>
				</div>
			</section>
		</div>
  );
}
