export const metadata = {
	title: "About",
};

import { Placeholder } from "@/components/Placeholder";
import type { CSSProperties } from "react";
import { SocialBar } from "@/components/SocialBar";

export default function AboutPage() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			{/* Financia-inspired compact about hero */}
			<section className="relative overflow-hidden py-14 sm:py-16">
				<div className="absolute inset-0 animated-gradient" aria-hidden />
				<div className="absolute -top-10 -left-10 h-64 w-64 rounded-full blur-3xl opacity-25 bg-[color:var(--blue-300)] float-slow" aria-hidden />
				<div className="absolute -bottom-16 -right-10 h-72 w-72 rounded-full blur-3xl opacity-20 bg-[color:var(--brand)] float-slow" aria-hidden />
				<div className="container relative">
					<div className="grid gap-10 lg:grid-cols-2 items-center">
						<div>
							<div className="inline-flex items-center rounded-full bg-white/30 px-3 py-1 text-xs font-semibold text-[color:var(--blue-900)] shadow-elevation1 backdrop-blur">
								About APP‑IN Club
							</div>
							<h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight gradient-text reveal-up" style={{ animationDelay: "100ms" } as CSSProperties}>
								Let&rsquo;s APP‑IN together
							</h1>
							<p className="mt-4 text-lg text-muted reveal-up" style={{ animationDelay: "220ms" } as CSSProperties}>
								App‑In Club is inspired by youth app inventors and coders. We spark imagination &amp; curiosity, unlock creativity, and help students create apps with real‑world impact.
							</p>
							<div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4 reveal-up" style={{ animationDelay: "340ms" } as CSSProperties}>
								<div className="flex flex-wrap gap-2">
									<span className="inline-flex items-center rounded-full border border-[color:var(--blue-200)] bg-white/60 px-3 py-1 text-xs">Impact‑driven learning</span>
									<span className="inline-flex items-center rounded-full border border-[color:var(--blue-200)] bg-white/60 px-3 py-1 text-xs">APP‑FOR GOOD</span>
								</div>
								<div className="sm:ml-2">
									<div className="text-xs text-muted mb-2">Connect</div>
									<SocialBar variant="inline" />
								</div>
							</div>
						</div>
						<div className="reveal-up" style={{ animationDelay: "260ms" } as CSSProperties}>
							<div className="card shadow-elevation3 overflow-hidden">
								<div className="card-body p-0">
									<div className="relative" style={{ aspectRatio: "16 / 10" }}>
										<iframe
											className="absolute inset-0 h-full w-full"
											src="https://www.youtube-nocookie.com/embed/exZTTLOj--U"
											title="APP‑IN Club — About video"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowFullScreen
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<div className="grid gap-8 sm:grid-cols-3">
						<div className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "120ms" }}>
							<div className="card-body">
								<div className="text-3xl font-bold text-[color:var(--brand)]">10,000+</div>
								<div className="text-sm text-muted mt-1">Students impacted</div>
							</div>
						</div>
						<div className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "220ms" }}>
							<div className="card-body">
								<div className="text-3xl font-bold text-[color:var(--brand)]">100+</div>
								<div className="text-sm text-muted mt-1">Courses & events</div>
							</div>
						</div>
						<div className="card shadow-elevation1 hover-raise reveal-up" style={{ animationDelay: "320ms" }}>
							<div className="card-body">
								<div className="text-3xl font-bold text-[color:var(--brand)]">180+</div>
								<div className="text-sm text-muted mt-1">Apps created</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section section-muted">
				<div className="container">
					<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Our Mission</h2>
					<p className="mt-3 text-muted max-w-3xl">
						We envision everyone becoming full and active contributors to tomorrow’s society through App Inventor. Learn how to create apps to improve the world across healthcare, transportation, environment, and more.
					</p>
					<blockquote className="mt-6 card shadow-elevation1">
						<p className="card-body text-base">
							<span className="font-semibold">Impact‑driven learning</span> — Anyone can create apps with social impact!
						</p>
					</blockquote>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<header className="flex items-end justify-between gap-4">
						<div>
							<div className="text-xs uppercase tracking-wide text-muted">What we create</div>
							<h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight">Our latest insight &amp; update</h2>
							<p className="mt-2 text-muted max-w-2xl">Student projects that turn ideas into real-world impact.</p>
						</div>
						<span className="site-nav-link">More updates</span>
					</header>
					<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						<div className="card shadow-elevation1 hover-raise">
							<div className="card-body">
								<Placeholder label="Snap Cook" className="mb-3" aspect="16 / 10" />
								<div className="text-xs text-muted">Project</div>
								<h3 className="mt-1 font-semibold">Snap Cook</h3>
								<p className="mt-2 text-sm text-muted">Transforms food photos into recipes to reduce waste.</p>
							</div>
						</div>
						<div className="card shadow-elevation1 hover-raise">
							<div className="card-body">
								<Placeholder label="Productiviteams" className="mb-3" aspect="16 / 10" />
								<div className="text-xs text-muted">Appathon</div>
								<h3 className="mt-1 font-semibold">Productiviteams</h3>
								<p className="mt-2 text-sm text-muted">MIT Summer Appathon submission.</p>
							</div>
						</div>
						<div className="card shadow-elevation1 hover-raise">
							<div className="card-body">
								<Placeholder label="EdBox" className="mb-3" aspect="16 / 10" />
								<div className="text-xs text-muted">Education</div>
								<h3 className="mt-1 font-semibold">EdBox</h3>
								<p className="mt-2 text-sm text-muted">Platform to share and reuse educational resources.</p>
							</div>
						</div>
						<div className="card shadow-elevation1 hover-raise">
							<div className="card-body">
								<Placeholder label="Animal Services" className="mb-3" aspect="16 / 10" />
								<div className="text-xs text-muted">Community</div>
								<h3 className="mt-1 font-semibold">Animal Services App</h3>
								<p className="mt-2 text-sm text-muted">Helps people when animals are lost or hurt.</p>
							</div>
						</div>
						<div className="card shadow-elevation1 hover-raise">
							<div className="card-body">
								<Placeholder label="iHELP" className="mb-3" aspect="16 / 10" />
								<div className="text-xs text-muted">Safety</div>
								<h3 className="mt-1 font-semibold">iHELP</h3>
								<p className="mt-2 text-sm text-muted">Alerts nearby helpers when someone needs help.</p>
							</div>
						</div>
						<div className="card shadow-elevation1 hover-raise">
							<div className="card-body">
								<Placeholder label="Garbage Sort" className="mb-3" aspect="16 / 10" />
								<div className="text-xs text-muted">Sustainability</div>
								<h3 className="mt-1 font-semibold">Garbage Sort</h3>
								<p className="mt-2 text-sm text-muted">High-efficiency solution for future garbage processing.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}


