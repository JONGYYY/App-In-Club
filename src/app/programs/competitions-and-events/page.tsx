import { Placeholder } from "@/components/Placeholder";
import { LinkButton } from "@/components/Button";
import Link from "next/link";

export const metadata = {
	title: "Competitions & Events",
};

export default function CompetitionsAndEventsPage() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<section className="section-wide relative overflow-hidden">
				<div className="absolute inset-0 animated-gradient" aria-hidden />
				<div className="container relative">
					<h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">Competitions & Events</h1>
					<p className="mt-4 text-lg text-muted max-w-3xl">
						We organize and participate in regional, national, and international competitions. Students gain confidence, teamwork, and real‑world problem‑solving skills.
					</p>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<h2 className="text-xl font-semibold">Highlights</h2>
					<ul className="mt-4 grid gap-3">
						<li className="card"><div className="card-body text-sm">07/24–26/2024 — MIT Hack the Climate</div></li>
						<li className="card"><div className="card-body text-sm">03/11–05/13/2024 — Global AI Hackathon</div></li>
						<li className="card"><div className="card-body text-sm">12/03–04/2023 — WAICY (World AI Competition for Youth)</div></li>
						<li className="card"><div className="card-body text-sm">11/01/2023 — Congressional App Challenge 2023</div></li>
						<li className="card"><div className="card-body text-sm">08/23/2023 — MIT App Inventor Summer Appathon</div></li>
					</ul>
				</div>
			</section>

			<section className="section section-muted">
				<div className="container">
					<div className="grid gap-6 lg:grid-cols-2 items-start">
						<div className="reveal-up" style={{ animationDelay: "220ms" }}>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">MIT Hack the Climate</h2>
							<p className="mt-2 text-muted">APP‑IN Club teams received top awards at the MIT AI&EDU Summit event.</p>
						</div>
						{/* simple placeholder box to drop imagery later */}
						<Placeholder label="MIT AI&EDU Summit photos" className="w-full hover-raise reveal-up" style={{ animationDelay: "120ms" } as any} />
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<div className="grid gap-6 lg:grid-cols-2 items-start">
						<Placeholder label="Global AI & WAICY" className="w-full hover-raise reveal-up" style={{ animationDelay: "120ms" } as any} />
						<div className="reveal-up" style={{ animationDelay: "220ms" }}>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Global AI Hackathon & WAICY</h2>
							<p className="mt-2 text-muted">Youth team award, honorable mentions, and multi‑category awards at WAICY.</p>
							<ul className="mt-3 list-disc pl-5 text-sm text-muted space-y-1">
								<li>Youth Team Winner: “SignLingo” — Amy Wang, Adrian Zhang, Justin Wang, Jonathan Shan</li>
								<li>Honorable Mentions: “Smart Vision” — Aiden Chen</li>
								<li>High School Showcase Track, Global Gold: “Scribe AI” — Tianyi Huang, Richard Xiong</li>
								<li>High School AI LLM Track, Global Silver: “AIRanger” — Yuekai (Kevin) Wang, Sarina Feng, Wenqian (Nancy) Chen, Joshua Edwards</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="section section-muted">
				<div className="container">
					<div className="grid gap-6 lg:grid-cols-2 items-start">
						<div className="reveal-up" style={{ animationDelay: "220ms" }}>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Congressional App Challenge</h2>
							<p className="mt-2 text-muted">Members invited to Washington DC #HouseOfCode to celebrate winners and finalists.</p>
							<h3 className="mt-6 font-semibold">MIT App Inventor Summer Appathon</h3>
							<p className="text-sm text-muted mt-1">Global community event — many APP‑IN members participate annually.</p>
						</div>
						<Placeholder label="App Challenge / Appathon" className="w-full hover-raise reveal-up" style={{ animationDelay: "120ms" } as any} />
					</div>
				</div>
			</section>

			{/* Honor Wall */}
			<section className="section">
				<div className="container">
					<header className="mb-6 sm:mb-8 text-center">
						<h2 className="text-3xl font-extrabold tracking-tight">Honor Wall</h2>
						<p className="mt-2 text-muted">We celebrate outstanding winners and teams that inspire our community.</p>
					</header>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						<div className="card hover-raise">
							<div className="card-body">
								<Placeholder label="First Place photo" className="mb-3" aspect="16 / 9" />
								<h3 className="font-semibold">MIT AI & EDU Summit 2024 — Hack the Climate</h3>
								<p className="text-sm text-muted mt-1">FIRST PLACE: “Compost Connects” — Aidon Chen, Justin Tang, Ray Li</p>
							</div>
						</div>
						<div className="card hover-raise">
							<div className="card-body">
								<Placeholder label="Poster Selected" className="mb-3" aspect="16 / 9" />
								<h3 className="font-semibold">MIT AI & EDU Summit 2024</h3>
								<p className="text-sm text-muted mt-1">POSTER SELECTED — SECOND PLACE: “SignLingo” — Amy Wang, Justin Wang, Jonathan Shan</p>
							</div>
						</div>
						<div className="card hover-raise">
							<div className="card-body">
								<Placeholder label="Paper Selected" className="mb-3" aspect="16 / 9" />
								<h3 className="font-semibold">MIT AI & EDU Summit 2024</h3>
								<p className="text-sm text-muted mt-1">PAPER SELECTED: “Extracurricular Success of Early AI Education” — Tianyi Huang</p>
							</div>
						</div>
						<div className="card hover-raise">
							<div className="card-body">
								<Placeholder label="Global AI Hackathon" className="mb-3" aspect="16 / 9" />
								<h3 className="font-semibold">MIT Global AI Hackathon 2024</h3>
								<p className="text-sm text-muted mt-1">Youth Team Winner: “SignLingo” — Amy Wang, Adrian Zhang, Justin Wang, Jonathan Shan</p>
							</div>
						</div>
						<div className="card hover-raise">
							<div className="card-body">
								<Placeholder label="San Ramon Hackathon" className="mb-3" aspect="16 / 9" />
								<h3 className="font-semibold">San Ramon Hackathon — AI in Action</h3>
								<p className="text-sm text-muted mt-1">Community‑driven innovation with AI projects from students.</p>
							</div>
						</div>
						<div className="card hover-raise">
							<div className="card-body">
								<Placeholder label="Cerebria" className="mb-3" aspect="16 / 9" />
								<h3 className="font-semibold">First Prize Winner — Cerebria</h3>
								<p className="text-sm text-muted mt-1">By Aiden Cheng, Kevin Xia</p>
							</div>
						</div>
						<div className="card hover-raise">
							<div className="card-body">
								<Placeholder label="Wildfire Drone" className="mb-3" aspect="16 / 9" />
								<h3 className="font-semibold">Second Prize — ML Drone for Early Wildfire Detection</h3>
								<p className="text-sm text-muted mt-1">By Lucas Su, Dale Liu, Pranav Saharan</p>
							</div>
						</div>
						<div className="card hover-raise">
							<div className="card-body">
								<Placeholder label="Youth Individual" className="mb-3" aspect="16 / 9" />
								<h3 className="font-semibold">Youth Individual</h3>
								<p className="text-sm text-muted mt-1">First: Ecoplate — Michelle (Siyuan) Yang</p>
								<p className="text-sm text-muted">Second: Council Calendar — Evan Yang</p>
							</div>
						</div>
						<div className="card hover-raise">
							<div className="card-body">
								<Placeholder label="Youth Team" className="mb-3" aspect="16 / 9" />
								<h3 className="font-semibold">Youth Team</h3>
								<p className="text-sm text-muted mt-1">Second: Productiviteams — Jaida Gao, Jason Huang, Etai Miller, Caleb Su, Kevin Lu</p>
							</div>
						</div>
					</div>
					<div className="mt-8 text-center">
						<Link href="/news" className="site-nav-link">See more achievements in News</Link>
					</div>
				</div>
			</section>
		</div>
	);
}


