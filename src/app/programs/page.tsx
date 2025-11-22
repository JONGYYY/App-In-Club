import Container from "@/components/Container";
import { Hero } from "@/components/Hero";
import { ProgramCard } from "@/components/ProgramCard";

export const metadata = {
	title: "Programs",
	description: "Educational Programs, Competitions & Events, and Lectures & Conferences at APP‑IN Club.",
};

export default function ProgramsIndexPage() {
	return (
		<>
			<Hero
				title={<>Programs</>}
				subtitle={<>Explore structured learning, competitions, and lectures that inspire students to build and grow.</>}
				eyebrow={<>What we offer</>}
			/>
			<section className="section">
				<Container>
					<div className="grid gap-4 sm:grid-cols-3">
						<ProgramCard
							title="Educational Programs"
							description="MIT App Inventor courses, workshops, and one‑on‑one tutoring/mentoring."
							href="/programs/educational-programs"
						/>
						<ProgramCard
							title="Competitions & Events"
							description="Regional, national, and international competitions with award‑winning teams."
							href="/programs/competitions-and-events"
						/>
						<ProgramCard
							title="Lectures & Conferences"
							description="Talks from scholars, industry leaders, competition champions, and top students."
							href="/programs/lectures-and-conferences"
						/>
					</div>
				</Container>
			</section>
		</>
	);
}


