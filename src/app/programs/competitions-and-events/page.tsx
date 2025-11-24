export const metadata = {
	title: "Competitions & Events",
};

export default function CompetitionsAndEventsPage() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<section className="section-wide relative overflow-hidden">
				<div className="absolute inset-0 animated-gradient" aria-hidden />
				<div className="container relative">
					<h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">Competitions & Events</h1>
					<p className="mt-4 text-lg text-muted max-w-3xl">
						We organize and participate in regional, national, and international competitions. Students gain confidence, teamwork, and real‑world problem‑solving skills.
					</p>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<h2 className="text-xl font-semibold">Highlights</h2>
					<ul className="mt-4 grid gap-3">
						<li className="card"><div className="card-body text-sm">07/24–26/2024 — MIT Hack the Climate</div></li>
						<li className="card"><div className="card-body text-sm">03/11–05/13/2024 — Global AI Hackathon</div></li>
						<li className="card"><div className="card-body text-sm">12/03–04/2023 — WAICY (World AI Competition for Youth)</div></li>
						<li className="card"><div className="card-body text-sm">11/01/2023 — Congressional App Challenge 2023</div></li>
						<li className="card"><div className="card-body text-sm">08/23/2023 — MIT App Inventor Summer Appathon</div></li>
					</ul>
				</div>
			</section>

			<section className="section section-muted">
				<div className="container">
					<div className="grid gap-6 lg:grid-cols-2 items-start">
						<div className="reveal-up" style={{ animationDelay: "220ms" }}>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">MIT Hack the Climate</h2>
							<p className="mt-2 text-muted">APP‑IN Club teams received top awards at the MIT AI&EDU Summit event.</p>
						</div>
						{/* simple placeholder box to drop imagery later */}
						<div className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "120ms" }}>
							<div className="card-body text-sm">Image placeholder</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<div className="grid gap-6 lg:grid-cols-2 items-start">
						<div className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "120ms" }}>
							<div className="card-body text-sm">Global AI / WAICY image placeholder</div>
						</div>
						<div className="reveal-up" style={{ animationDelay: "220ms" }}>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Global AI Hackathon & WAICY</h2>
							<p className="mt-2 text-muted">Youth team award, honorable mentions, and multi‑category awards at WAICY.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="section section-muted">
				<div className="container">
					<div className="grid gap-6 lg:grid-cols-2 items-start">
						<div className="reveal-up" style={{ animationDelay: "220ms" }}>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Congressional App Challenge</h2>
							<p className="mt-2 text-muted">Members invited to Washington DC #HouseOfCode to celebrate winners and finalists.</p>
							<h3 className="mt-6 font-semibold">MIT App Inventor Summer Appathon</h3>
							<p className="text-sm text-muted mt-1">Global community event — many APP‑IN members participate annually.</p>
						</div>
						<div className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "120ms" }}>
							<div className="card-body text-sm">App Challenge / Appathon placeholder</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}


