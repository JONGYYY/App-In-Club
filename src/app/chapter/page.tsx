import Container from "@/components/Container";

export const metadata = {
	title: "Chapters",
	description: "Start or join a local APP‑IN Club chapter.",
};

export default function ChapterPage() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<section className="section-wide relative overflow-hidden">
				<div className="absolute inset-0 animated-gradient" aria-hidden />
				<Container>
					<div className="relative">
						<h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">Chapters</h1>
						<p className="mt-4 text-lg text-muted max-w-3xl">
							Bring APP‑IN Club to your community. Start a chapter or join an existing one to host workshops, competitions, and community projects.
						</p>
					</div>
				</Container>
			</section>
			<section className="section">
				<Container>
					<h2 className="text-xl font-semibold">How it works</h2>
					<ol className="mt-4 grid gap-4 sm:grid-cols-3">
						<li className="card shadow-elevation1"><div className="card-body"><div className="font-semibold">1. Apply</div><p className="text-sm text-muted mt-1">Tell us about your school/community and leadership team.</p></div></li>
						<li className="card shadow-elevation1"><div className="card-body"><div className="font-semibold">2. Plan</div><p className="text-sm text-muted mt-1">We’ll share starter kits and outline events, curriculum, and mentorship.</p></div></li>
						<li className="card shadow-elevation1"><div className="card-body"><div className="font-semibold">3. Launch</div><p className="text-sm text-muted mt-1">Host workshops, run projects, and participate in competitions.</p></div></li>
					</ol>
					<div className="mt-6">
						<a href="/contact" className="site-cta">Get in touch to start a chapter</a>
					</div>
				</Container>
			</section>
		</div>
	);
}


