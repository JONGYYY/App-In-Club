export const metadata = {
	title: "About",
};

import { Placeholder } from "@/components/Placeholder";

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

			{/* Intro media placeholder */}
			<section className="section">
				<div className="container">
					<div className="grid gap-6 lg:grid-cols-2 items-start">
						<Placeholder label="About video" className="hover-raise reveal-up" style={{ animationDelay: "100ms" } as any} />
						<p className="text-muted reveal-up" style={{ animationDelay: "200ms" }}>
							In the club, you can learn how to create your own impactful apps aimed at the real world; share your ideas and technology skills with others; and create apps to solve issues such as healthcare, transportation and disaster relief to improve the world.
						</p>
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
						<li className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "120ms" }}>
							<div className="card-body text-sm">
								<Placeholder label="Snap Cook image" className="mb-3" aspect="16 / 9" />
								Snap Cook — turn food photos into recipes to reduce waste.
							</div>
						</li>
						<li className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "160ms" }}>
							<div className="card-body text-sm">
								<Placeholder label="Productiviteams image" className="mb-3" aspect="16 / 9" />
								Productiviteams — MIT Summer Appathon submission.
							</div>
						</li>
						<li className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "200ms" }}>
							<div className="card-body text-sm">
								<Placeholder label="EdBox image" className="mb-3" aspect="16 / 9" />
								EdBox — sharing and reusing educational resources.
							</div>
						</li>
						<li className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "240ms" }}>
							<div className="card-body text-sm">
								<Placeholder label="Animal Services image" className="mb-3" aspect="16 / 9" />
								Animal Services — help for lost or injured animals.
							</div>
						</li>
						<li className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "280ms" }}>
							<div className="card-body text-sm">
								<Placeholder label="iHELP image" className="mb-3" aspect="16 / 9" />
								iHELP — safe cities: alerts to nearby helpers when needed.
							</div>
						</li>
						<li className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "320ms" }}>
							<div className="card-body text-sm">
								<Placeholder label="Garbage Sort image" className="mb-3" aspect="16 / 9" />
								Garbage Sort — high‑efficiency waste sorting and processing.
							</div>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}


