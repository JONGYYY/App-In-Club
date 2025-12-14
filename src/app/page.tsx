import { LinkButton } from "@/components/Button";
import { EventCard } from "@/components/EventCard";
import { ProgramCard } from "@/components/ProgramCard";
import { Stat } from "@/components/Stat";
import Container from "@/components/Container";
import Link from "next/link";
import { Placeholder } from "@/components/Placeholder";
import { SocialBar } from "@/components/SocialBar";
import { ReviewMarquee } from "@/components/ReviewMarquee";
import type { CSSProperties } from "react";

export default function Home() {
  return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<section className="relative overflow-hidden py-14 sm:py-16">
				<div className="absolute inset-0 animated-gradient" aria-hidden />
				<div className="absolute -top-10 -left-10 h-64 w-64 rounded-full blur-3xl opacity-25 bg-[color:var(--blue-300)] float-slow" aria-hidden />
				<div className="absolute -bottom-16 -right-10 h-72 w-72 rounded-full blur-3xl opacity-20 bg-[color:var(--brand)] float-slow" aria-hidden />
				<Container>
					<div className="relative grid gap-10 lg:grid-cols-2 items-center">
						<div>
							<div className="inline-flex items-center rounded-full bg-white/30 px-3 py-1 text-xs font-semibold text-[color:var(--blue-900)] shadow-elevation1 backdrop-blur">
								APP‑IN TOGETHER • APP‑FOR GOOD
							</div>
							<h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight gradient-text reveal-up" style={{ animationDelay: "100ms" } as CSSProperties}>
								APP‑IN Club — A Global Student‑Run Organization
							</h1>
							<p className="mt-4 text-lg text-muted reveal-up" style={{ animationDelay: "220ms" } as CSSProperties}>
								We promote impact‑driven learning: sparking imagination and creating apps to improve the world.
							</p>
							<div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4 reveal-up" style={{ animationDelay: "340ms" } as CSSProperties}>
								<div className="flex flex-wrap gap-3">
									<LinkButton href="/contact" variant="primary">Join Now</LinkButton>
									<LinkButton href="/programs" variant="primary">Explore Programs</LinkButton>
									<LinkButton href="/contact" variant="secondary">Contact Us</LinkButton>
								</div>
								<div className="sm:ml-2">
									<div className="text-xs text-muted mb-2">Connect</div>
									<SocialBar variant="inline" />
								</div>
							</div>
						</div>
						<div className="reveal-up" style={{ animationDelay: "260ms" } as CSSProperties}>
							<Placeholder label="Hero image / collage" className="w-full hover-raise" aspect="16 / 10" />
						</div>
					</div>
				</Container>
			</section>

			<section className="section-tight">
				<Container>
					<div className="max-w-3xl">
						<div className="text-xs uppercase tracking-wide text-muted">Future of learning</div>
						<h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight">
							Our diverse suite of student programs
						</h2>
						<p className="mt-2 text-muted">
							Discover pathways built for students and families: learn app building, compete in challenges, and grow through mentors and community.
						</p>
					</div>
					<div className="grid gap-4 sm:grid-cols-3">
						<div className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "120ms" }}>
							<div className="card-body">
								<Placeholder label="Hero / Course visual" className="mb-3" aspect="4 / 3" />
								<h3 className="font-semibold">Hands‑on Learning</h3>
								<p className="text-sm text-muted mt-2">MIT App Inventor courses, workshops, and tutoring for all levels.</p>
							</div>
						</div>
						<div className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "220ms" }}>
							<div className="card-body">
								<Placeholder label="Competition visual" className="mb-3" aspect="4 / 3" />
								<h3 className="font-semibold">Competitions & Events</h3>
								<p className="text-sm text-muted mt-2">Prepare for regional, national, and international challenges.</p>
							</div>
						</div>
						<div className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "320ms" }}>
							<div className="card-body">
								<Placeholder label="Community visual" className="mb-3" aspect="4 / 3" />
								<h3 className="font-semibold">Mentors & Community</h3>
								<p className="text-sm text-muted mt-2">Connect with mentors, peers, and industry speakers.</p>
							</div>
						</div>
					</div>
				</Container>
			</section>

			<ReviewMarquee
				title="More than 10,000+ students impacted"
				subtitle="A student-run community where learning feels supportive, practical, and fun."
				reviews={[
					{ quote: "The workshops were structured and friendly for beginners.", name: "Parent", role: "Member family" },
					{ quote: "Mentorship + community made building apps feel possible.", name: "Student", role: "Member" },
					{ quote: "Great prep for competitions and confidence building.", name: "Parent", role: "Member family" },
					{ quote: "Clear guidance and a positive, high-energy environment.", name: "Student", role: "Member" },
					{ quote: "Impact-driven learning with real projects — loved it.", name: "Student", role: "Member" },
				]}
			/>

			{/* Featured event */}
			<section className="section-tight">
				<Container>
					<div className="grid gap-6 lg:grid-cols-2 items-start">
						<Placeholder label="Featured event photo" className="w-full hover-raise reveal-up" style={{ animationDelay: "100ms" }} />
						<div className="reveal-up" style={{ animationDelay: "200ms" }}>
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
						</div>
					</div>
				</Container>
			</section>

			{/* Programs */}
			<section className="section-tight section-muted">
				<Container>
					<header className="mb-6 sm:mb-8 flex items-end justify-between">
						<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Programs</h2>
						<Link href="/programs/educational-programs" className="site-nav-link">View all</Link>
					</header>
					<div className="grid gap-4 sm:grid-cols-3">
						<div className="reveal-up" style={{ animationDelay: "120ms" }}>
						<ProgramCard
							title="Educational Programs"
							description="MIT App Inventor courses, workshops, and tutoring."
							href="/programs/educational-programs"
							imageLabel="Course image"
						/>
						</div>
						<div className="reveal-up" style={{ animationDelay: "220ms" }}>
						<ProgramCard
							title="Competitions & Events"
							description="Participate in regional, national, and international competitions."
							href="/programs/competitions-and-events"
							imageLabel="Competition poster"
						/>
						</div>
						<div className="reveal-up" style={{ animationDelay: "320ms" }}>
						<ProgramCard
							title="Lectures & Conferences"
							description="Talks from scholars, industry leaders, and top students."
							href="/programs/lectures-and-conferences"
							imageLabel="Lecture banner"
						/>
						</div>
					</div>
				</Container>
			</section>

			{/* Stats */}
			<section className="section-tight">
				<Container>
					<div className="grid gap-4 sm:grid-cols-3">
						<div className="reveal-up" style={{ animationDelay: "120ms" }}><Stat label="Members across chapters" value="500+" /></div>
						<div className="reveal-up" style={{ animationDelay: "220ms" }}><Stat label="Awards & recognitions" value="50+" /></div>
						<div className="reveal-up" style={{ animationDelay: "320ms" }}><Stat label="Workshops & events hosted" value="120+" /></div>
					</div>
				</Container>
			</section>

			{/* News highlights */}
			<section className="section-tight section-muted">
				<Container>
					<header className="mb-6 sm:mb-8 flex items-end justify-between">
						<div>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">In the News</h2>
							<p className="mt-2 text-muted">Highlights from recent achievements.</p>
						</div>
						<Link href="/news" className="site-nav-link">All news</Link>
					</header>
					<ul className="grid gap-4 sm:grid-cols-3">
						<li className="card">
							<div className="card-body text-sm">
								<Placeholder label="Thumbnail" className="mb-2" aspect="16 / 9" />
								MIT AI & EDU Summit — “Hack the Climate” winners.
							</div>
						</li>
						<li className="card">
							<div className="card-body text-sm">
								<Placeholder label="Thumbnail" className="mb-2" aspect="16 / 9" />
								Congressional App Challenge recognitions.
							</div>
						</li>
						<li className="card">
							<div className="card-body text-sm">
								<Placeholder label="Thumbnail" className="mb-2" aspect="16 / 9" />
								Global AI Hackathon youth award and honorable mention.
							</div>
						</li>
					</ul>
				</Container>
			</section>
		</div>
  );
}
