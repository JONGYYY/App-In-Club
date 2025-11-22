import Container from "@/components/Container";
import { Hero } from "@/components/Hero";

export const metadata = {
	title: "Chapters",
	description: "Start or join a local APP‑IN Club chapter and bring impact‑driven learning to your community.",
};

export default function ChapterPage() {
	return (
		<>
			<Hero
				title={<>Chapters</>}
				subtitle={<>Start or join a local chapter to run programs, host events, and mentor students in your community.</>}
				eyebrow={<>Get involved</>}
			/>
			<section className="section">
				<Container>
					<div className="grid gap-4 sm:grid-cols-2">
						<div className="card shadow-elevation1">
							<div className="card-body">
								<h2 className="font-semibold">Start a Chapter</h2>
								<p className="text-sm text-muted mt-2">
									We provide starter kits, curriculum suggestions, and mentorship to help you launch a chapter.
								</p>
								<a className="mt-3 inline-block site-cta" href="/contact">Contact us</a>
							</div>
						</div>
						<div className="card shadow-elevation1">
							<div className="card-body">
								<h2 className="font-semibold">Join a Chapter</h2>
								<p className="text-sm text-muted mt-2">
									Connect with an existing chapter to participate in programs, competitions, and events.
								</p>
								<a className="mt-3 inline-block site-nav-link" href="/members">Learn more</a>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}


