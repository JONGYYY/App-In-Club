export const metadata = {
	title: "Lectures & Conferences",
};

export default function LecturesAndConferencesPage() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<section className="section-wide relative overflow-hidden">
				<div className="absolute inset-0 animated-gradient" aria-hidden />
				<div className="container relative">
					<h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">Lectures & Conferences</h1>
					<p className="mt-4 text-lg text-muted max-w-3xl">
						We invite renowned scholars, industry leaders, competition champions, and top university students to share experience and inspiration with our members.
					</p>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<h2 className="text-xl font-semibold">Recent talks</h2>
					<ul className="mt-4 grid gap-3">
						<li className="card"><div className="card-body text-sm">07/24–26/2024 — MIT AI&EDU Summit</div></li>
						<li className="card"><div className="card-body text-sm">05/29–31/2024 — K12 AI INITIATIVE @ GenAI Summit SF</div></li>
						<li className="card"><div className="card-body text-sm">09/16/2023 — Verbal Alchemy: Mastering the Art of Debate</div></li>
						<li className="card"><div className="card-body text-sm">06/13/2023 — Unlock the Secrets to App Success</div></li>
						<li className="card"><div className="card-body text-sm">06/10/2023 — App‑In Twilight Tech Talks</div></li>
						<li className="card"><div className="card-body text-sm">02/20/2023 — App‑In USACO Summit</div></li>
						<li className="card"><div className="card-body text-sm">02/11/2023 — App‑In Club + MetroHacks Tech Webinar</div></li>
					</ul>
				</div>
			</section>
			<section className="section section-muted">
				<div className="container">
					<div className="grid gap-6 lg:grid-cols-2 items-start">
						<div className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "120ms" }}>
							<div className="card-body text-sm">Summit image placeholder</div>
						</div>
						<div className="reveal-up" style={{ animationDelay: "220ms" }}>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">MIT AI&EDU Summit</h2>
							<p className="mt-2 text-muted">Highlights and talks — many APP‑IN members participate and present.</p>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className="grid gap-6 lg:grid-cols-2 items-start">
						<div className="reveal-up" style={{ animationDelay: "220ms" }}>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">K12 AI Initiative @ GenAI Summit SF</h2>
							<p className="mt-2 text-muted">Talks on K‑12 AI education, community workshops, and panels.</p>
						</div>
						<div className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "120ms" }}>
							<div className="card-body text-sm">GenAI summit visual placeholder</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}


