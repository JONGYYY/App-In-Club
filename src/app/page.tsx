import { Hero } from "@/components/Hero";
import { LinkButton } from "@/components/Button";
import { EventCard } from "@/components/EventCard";
import { ProgramCard } from "@/components/ProgramCard";
import { Stat } from "@/components/Stat";
import Container from "@/components/Container";
import { Testimonial } from "@/components/Testimonial";
import Link from "next/link";

export default function Home() {
  return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<Hero
				title={<>APP‑IN Club — A Global Student‑Run Organization</>}
				subtitle={<>We promote impact‑driven learning: sparking imagination and creating apps to improve the world.</>}
				actions={
					<>
						<LinkButton href="/programs/educational-programs" variant="primary">Explore Programs</LinkButton>
						<LinkButton href="/contact" variant="secondary">Contact Us</LinkButton>
					</>
				}
			/>

			{/* Value props */}
			<section className="section">
				<Container>
					<div className="grid gap-4 sm:grid-cols-3">
						<div className="card shadow-elevation1">
							<div className="card-body">
								<h3 className="font-semibold">Hands‑on Learning</h3>
								<p className="text-sm text-muted mt-2">MIT App Inventor courses, workshops, and tutoring for all levels.</p>
							</div>
						</div>
						<div className="card shadow-elevation1">
							<div className="card-body">
								<h3 className="font-semibold">Competitions & Events</h3>
								<p className="text-sm text-muted mt-2">Prepare for regional, national, and international challenges.</p>
							</div>
						</div>
						<div className="card shadow-elevation1">
							<div className="card-body">
								<h3 className="font-semibold">Mentors & Community</h3>
								<p className="text-sm text-muted mt-2">Connect with mentors, peers, and industry speakers.</p>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* Featured event */}
			<section className="section section-muted">
				<Container>
					<EventCard
						title="2025 AI Summit For Young Scholars"
						date="June 7–8, 2025"
						location="Day 1: Cupertino City Hall • Day 2: MakerNexus, Sunnyvale"
						description="Two days of engaging workshops and a mentor‑guided hackathon for students of all ages.
							Workshops include MIT App Inventor (App‑In Club), Accelerating Python with NVIDIA, BioEthicAI,
							and 3D Printing DIY UV Charm."
						primaryHref="#"
						secondaryHref="#"
					/>
				</Container>
			</section>

			{/* Programs */}
			<section className="section">
				<Container>
					<header className="mb-6 sm:mb-8 flex items-end justify-between">
						<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Programs</h2>
						<Link href="/programs/educational-programs" className="site-nav-link">View all</Link>
					</header>
					<div className="grid gap-4 sm:grid-cols-3">
						<ProgramCard
							title="Educational Programs"
							description="MIT App Inventor courses, workshops, and tutoring."
							href="/programs/educational-programs"
						/>
						<ProgramCard
							title="Competitions & Events"
							description="Participate in regional, national, and international competitions."
							href="/programs/competitions-and-events"
						/>
						<ProgramCard
							title="Lectures & Conferences"
							description="Talks from scholars, industry leaders, and top students."
							href="/programs/lectures-and-conferences"
						/>
					</div>
				</Container>
			</section>

			{/* Stats */}
			<section className="section section-muted">
				<Container>
					<div className="grid gap-4 sm:grid-cols-3">
						<Stat label="Members across chapters" value="500+" />
						<Stat label="Awards & recognitions" value="50+" />
						<Stat label="Workshops & events hosted" value="120+" />
					</div>
				</Container>
			</section>

			{/* Testimonials */}
			<section className="section">
				<Container>
					<header className="mb-6 sm:mb-8">
						<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">What families say</h2>
					</header>
					<div className="grid gap-4 sm:grid-cols-3">
						<Testimonial quote="The club helped my child fall in love with building apps." name="Parent, CA" role="Member family" />
						<Testimonial quote="Mentorship and community made all the difference." name="Student, CA" role="Member" />
						<Testimonial quote="Great prep for competitions and confidence building." name="Parent, CA" role="Member family" />
					</div>
				</Container>
			</section>

			{/* News highlights */}
			<section className="section section-muted">
				<Container>
					<header className="mb-6 sm:mb-8 flex items-end justify-between">
						<div>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">In the News</h2>
							<p className="mt-2 text-muted">Highlights from recent achievements.</p>
						</div>
						<Link href="/news" className="site-nav-link">All news</Link>
					</header>
					<ul className="grid gap-4 sm:grid-cols-3">
						<li className="card"><div className="card-body text-sm">MIT AI & EDU Summit — “Hack the Climate” winners.</div></li>
						<li className="card"><div className="card-body text-sm">Congressional App Challenge recognitions.</div></li>
						<li className="card"><div className="card-body text-sm">Global AI Hackathon youth award and honorable mention.</div></li>
					</ul>
				</Container>
			</section>
		</div>
  );
}
