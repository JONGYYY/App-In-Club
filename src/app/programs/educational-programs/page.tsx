export const metadata = {
	title: "Educational Programs",
};

export default function EducationalProgramsPage() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<section className="section-wide relative overflow-hidden">
				<div className="absolute inset-0 animated-gradient" aria-hidden />
				<div className="container relative">
					<h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">Educational Programs</h1>
					<p className="mt-4 text-lg text-muted max-w-3xl">
						MIT App Inventor courses, workshops, discussions, and one‑on‑one tutoring/mentoring for all levels.
						In today’s tech and AI‑powered world, app creation helps students express ideas and become agents of change.
					</p>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<h2 className="text-xl font-semibold">Recent & past courses</h2>
					<ul className="mt-4 grid gap-3 sm:grid-cols-2">
						<li className="card"><div className="card-body text-sm">07/14–28/2024 — APP‑INNOVATOR Summer Camp</div></li>
						<li className="card"><div className="card-body text-sm">04/14–28/2024 — Crash Course led by Girl Officer Team (Spring 2024)</div></li>
						<li className="card"><div className="card-body text-sm">11/25–12/16/2023 — MIT App Inventor Crash Course 3 (Fall 2023)</div></li>
						<li className="card"><div className="card-body text-sm">03/25–04/15/2023 — MIT App Inventor Crash Course 2</div></li>
						<li className="card"><div className="card-body text-sm">11/25–27/2022 — Crash Course (Fall 2022)</div></li>
					</ul>
				</div>
			</section>
		</div>
	);
}


