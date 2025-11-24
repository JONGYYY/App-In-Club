import Container from "@/components/Container";
import { ProgramCard } from "@/components/ProgramCard";
import { Placeholder } from "@/components/Placeholder";
import Link from "next/link";
import { LinkButton } from "@/components/Button";

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
							imageLabel="Course image"
						/>
						<ProgramCard
							title="Competitions & Events"
							description="Join regional, national, and international challenges; build confidence."
							href="/programs/competitions-and-events"
							imageLabel="Competition poster"
						/>
						<ProgramCard
							title="Lectures & Conferences"
							description="Learn from scholars, industry leaders, champions, and top students."
							href="/programs/lectures-and-conferences"
							imageLabel="Lecture banner"
						/>
					</div>
				</Container>
			</section>

			{/* Educational Programs section */}
			<section className="section section-muted">
				<Container>
					<div className="grid gap-6 lg:grid-cols-2 items-start">
						<Placeholder label="Educational Programs visual" className="w-full hover-raise reveal-up" style={{ animationDelay: "120ms" } as any} />
						<div className="reveal-up" style={{ animationDelay: "220ms" }}>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Educational Programs</h2>
							<p className="mt-2 text-muted">
								We host online courses to teach members how to create apps based on MIT App Inventor. We organize
								discussions and offer one‑on‑one tutoring/mentoring.
							</p>
							<ul className="mt-4 list-disc pl-5 text-sm text-muted space-y-1">
								<li>07/14–28/2024: APP‑INNOVATOR Summer Camp (Summer 2024)</li>
								<li>04/14–28/2024: Crash Course led by Girl Officer Team (Spring 2024)</li>
								<li>11/25–12/16/2023: MIT App Inventor Crash Course 3 (Fall 2023)</li>
								<li>03/25–04/15/2023: MIT App Inventor Crash Course 2</li>
								<li>11/25–27/2022: Crash Course (Fall 2022)</li>
							</ul>
							<div className="mt-5 flex gap-3">
								<LinkButton href="/programs/educational-programs" variant="primary">More Courses</LinkButton>
								<Link href="/programs/educational-programs" className="site-nav-link">Let's learn</Link>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* Competitions & Events */}
			<section className="section">
				<Container>
					<div className="grid gap-6 lg:grid-cols-2 items-start">
						<div className="reveal-up order-last lg:order-first" style={{ animationDelay: "220ms" }}>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Competitions & Events</h2>
							<p className="mt-2 text-muted">
								We participate in regional, national, and international competitions every year—our members have won multiple awards.
							</p>
							<ul className="mt-4 list-disc pl-5 text-sm text-muted space-y-1">
								<li>07/24–26/2024: MIT Hack the Climate</li>
								<li>03/11–05/13/2024: Global AI Hackathon</li>
								<li>12/03–04/2023: The 5th World Artificial Intelligence Competition for Youth</li>
								<li>11/01/2023: Congressional App Challenge 2023</li>
								<li>08/23/2023: MIT App Inventor Summer Appathon</li>
							</ul>
							<div className="mt-5 flex gap-3">
								<LinkButton href="/programs/competitions-and-events" variant="primary">More Competitions</LinkButton>
								<Link href="/programs/competitions-and-events" className="site-nav-link">Let's create</Link>
							</div>
						</div>
						<Placeholder label="Competitions montage" className="w-full hover-raise reveal-up" style={{ animationDelay: "120ms" } as any} />
					</div>
				</Container>
			</section>

			{/* Lectures & Conferences */}
			<section className="section section-muted">
				<Container>
					<div className="grid gap-6 lg:grid-cols-2 items-start">
						<Placeholder label="Lectures & Conferences visual" className="w-full hover-raise reveal-up" style={{ animationDelay: "120ms" } as any} />
						<div className="reveal-up" style={{ animationDelay: "220ms" }}>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Lectures & Conferences</h2>
							<p className="mt-2 text-muted">
								We invite renowned scholars, industry leaders, competition champions, and top university students to share
								valuable experiences with our members.
							</p>
							<ul className="mt-4 list-disc pl-5 text-sm text-muted space-y-1">
								<li>07/24–26/2024: MIT AI&EDU Summit</li>
								<li>05/29–31/2024: K12 AI Initiative @ GenAI Summit SF 2024</li>
								<li>09/16/2023: Verbal Alchemy — Mastering the Art of Debate</li>
								<li>06/13/2023: Unlock the Secrets to App Success</li>
								<li>06/10/2023: App‑In Twilight Tech Talks</li>
							</ul>
							<div className="mt-5 flex gap-3">
								<LinkButton href="/programs/lectures-and-conferences" variant="primary">More Lectures</LinkButton>
								<Link href="/programs/lectures-and-conferences" className="site-nav-link">Let's share</Link>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}


