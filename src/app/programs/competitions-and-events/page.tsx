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
		</div>
	);
}


