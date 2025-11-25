import { Placeholder } from "@/components/Placeholder";
import { LinkButton } from "@/components/Button";
import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata = {
	title: "Educational Programs",
};

export default function EducationalProgramsPage() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			{/* Hero */}
			<section className="section-wide relative overflow-hidden">
				<div className="absolute inset-0 animated-gradient" aria-hidden />
				<div className="container relative">
					<h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">Educational Programs</h1>
					<p className="mt-4 text-lg text-muted max-w-3xl">
						Everyone can learn to create apps with MIT App Inventor. In today’s tech and AI‑powered world,
						app building helps students express ideas and become agents of change.
					</p>
				</div>
			</section>

			{/* 2025 Applied AI Crash Course */}
			<section className="section">
				<div className="container">
					<div className="grid gap-6 lg:grid-cols-2 items-start">
						<Placeholder label="2025 Applied AI Crash Course" className="w-full hover-raise reveal-up" style={{ animationDelay: "120ms" } as CSSProperties} />
						<div className="reveal-up" style={{ animationDelay: "220ms" }}>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">2025 Applied AI Crash Course</h2>
							<p className="mt-2 text-muted">
								Two‑week immersive program led by our Research Team. Learn essential AI concepts and apply them to
								real‑world projects without getting lost in theory.
							</p>
							<ul className="mt-3 list-disc pl-5 text-sm text-muted space-y-1">
								<li>Learn AI concepts: Machine Learning, Deep Learning, LLMs</li>
								<li>Mentored projects by our research team</li>
								<li>Community driven, collaborative learning</li>
								<li>Course set: Intro to ML, Deep Learning, Computer Vision, LLMs</li>
							</ul>
							<div className="mt-5"><LinkButton href="/contact" variant="primary">Join now</LinkButton></div>
						</div>
					</div>
				</div>
			</section>

			{/* 2024 Thanksgiving Crash Course */}
			<section className="section section-muted">
				<div className="container">
					<div className="grid gap-6 lg:grid-cols-2 items-start">
						<div className="reveal-up" style={{ animationDelay: "220ms" }}>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">2024 Thanksgiving Crash Course</h2>
							<p className="mt-2 text-muted">
								Explore Computer Vision AI while building apps with MIT App Inventor.
							</p>
							<ul className="mt-3 list-disc pl-5 text-sm text-muted space-y-1">
								<li>Week 1: Intro to AI, CV, and App Inventor — build an image classifier</li>
								<li>Week 2: PoseNet — Jumping Jack Tracker App</li>
								<li>Week 3: AI Research session</li>
							</ul>
							<div className="mt-5"><LinkButton href="/contact" variant="secondary">Join us now</LinkButton></div>
						</div>
						<Placeholder label="Thanksgiving Crash Course visuals" className="w-full hover-raise reveal-up" style={{ animationDelay: "120ms" } as CSSProperties} />
					</div>
				</div>
			</section>

			{/* 2024 Summer + Camps */}
			<section className="section">
				<div className="container">
					<div className="grid gap-6 lg:grid-cols-2 items-start">
						<Placeholder label="UI Design Workshop" className="w-full hover-raise reveal-up" style={{ animationDelay: "120ms" } as CSSProperties} />
						<div className="reveal-up" style={{ animationDelay: "220ms" }}>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">2024 Summer UI Design Workshop</h2>
							<p className="mt-2 text-muted">Dive into “clean” UI design — learn principles that improve how users perceive and interact with apps.</p>
							<div className="mt-4"><LinkButton href="/contact" variant="primary">Join now</LinkButton></div>
						</div>
					</div>
					<div className="mt-10 grid gap-6 lg:grid-cols-2 items-start">
						<div className="reveal-up" style={{ animationDelay: "220ms" }}>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">2024 App‑Innovator Summer Camp</h2>
							<ul className="mt-3 list-disc pl-5 text-sm text-muted space-y-1">
								<li>Week 1 (7/14): Formulate unique ideas and create proposals</li>
								<li>Week 2 (7/21): Refine proposals and get hands‑on with App Inventor</li>
								<li>Week 3 (7/28): Finalize designs and present comprehensive proposals</li>
							</ul>
						</div>
						<Placeholder label="App‑Innovator Camp" className="w-full hover-raise reveal-up" style={{ animationDelay: "120ms" } as CSSProperties} />
					</div>
				</div>
			</section>

			{/* Girl‑Led Spring Crash Course */}
			<section className="section section-muted">
				<div className="container">
					<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">2024 Girl‑Led Spring Crash Course</h2>
					<p className="mt-2 text-muted max-w-3xl">Award‑winning female officers lead a practical course using App Inventor.</p>
					<ul className="mt-3 list-disc pl-5 text-sm text-muted space-y-1">
						<li>Class 1: Data types, math operations, navigation</li>
						<li>Class 2: If statements, loops — dice roll simulator</li>
						<li>Class 3: Lists & dictionaries — art species gallery</li>
					</ul>
					<div className="mt-4 grid gap-4 sm:grid-cols-3">
						<Placeholder label="Class 1 poster" />
						<Placeholder label="Class 2 demo" />
						<Placeholder label="Class 3 demo" />
					</div>
					<div className="mt-6"><Link href="/contact" className="site-cta">Join us now</Link></div>
				</div>
			</section>

			{/* Ongoing offerings */}
			<section className="section">
				<div className="container">
					<div className="grid gap-4 sm:grid-cols-3">
						<div className="card shadow-elevation1 hover-raise">
							<div className="card-body">
								<h3 className="font-semibold">Rolling Crash Course</h3>
								<ul className="mt-2 list-disc pl-5 text-sm text-muted space-y-1">
									<li>Grades 4–11, group class, 60‑minute live online sessions</li>
									<li>Free for club members</li>
								</ul>
							</div>
						</div>
						<div className="card shadow-elevation1 hover-raise">
							<div className="card-body">
								<h3 className="font-semibold">Workshops</h3>
								<p className="mt-2 text-sm text-muted">Focused App Inventor workshops for members preparing for App of the Month and other challenges.</p>
							</div>
						</div>
						<div className="card shadow-elevation1 hover-raise">
							<div className="card-body">
								<h3 className="font-semibold">Tutoring / Mentoring</h3>
								<p className="mt-2 text-sm text-muted">One‑on‑one volunteer mentoring tailored to individual learning needs.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}


