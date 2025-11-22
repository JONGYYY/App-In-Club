import Container from "@/components/Container";
import { ProgramCard } from "@/components/ProgramCard";

export const metadata = {
	title: "Programs",
	description: "Educational programs, competitions & events, and lectures & conferences.",
};

export default function ProgramsIndexPage() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<section className="section-wide relative overflow-hidden">
				<div className="absolute inset-0 animated-gradient" aria-hidden />
				<Container>
					<div className="relative">
						<h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">Programs</h1>
						<p className="mt-4 text-lg text-muted max-w-3xl">
							From hands‑on app creation to competitions and expert talks, APP‑IN Club provides pathways for students to learn, build, and share.
						</p>
					</div>
				</Container>
			</section>

			<section className="section">
				<Container>
					<div className="grid gap-4 sm:grid-cols-3">
						<ProgramCard
							title="Educational Programs"
							description="MIT App Inventor courses, workshops, tutoring, and mentoring."
							href="/programs/educational-programs"
						/>
						<ProgramCard
							title="Competitions & Events"
							description="Join regional, national, and international challenges; build confidence."
							href="/programs/competitions-and-events"
						/>
						<ProgramCard
							title="Lectures & Conferences"
							description="Learn from scholars, industry leaders, champions, and top students."
							href="/programs/lectures-and-conferences"
						/>
					</div>
				</Container>
			</section>
		</div>
	);
}


