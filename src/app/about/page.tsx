import Container from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Stat } from "@/components/Stat";

export const metadata = {
	title: "About",
	description:
		"APP‑IN Club is a global student‑run organization inspired by youth app inventors—promoting impact‑driven learning and real‑world app creation.",
};

export default function AboutPage() {
	return (
		<>
			<Hero
				title={<>Let’s APP‑IN together — APP‑FOR GOOD</>}
				subtitle={
					<>
						Inspired by youth app inventors and coders, we spark imagination and unlock creativity through
						inquiry‑based learning and real‑world app creation.
					</>
				}
				eyebrow={<>About APP‑IN Club</>}
			/>
			<section className="section">
				<Container>
					<div className="mx-auto max-w-3xl">
						<p className="text-lg text-muted">
							In our club you will learn to build impactful apps, share ideas, and apply technology skills to
							solve problems in areas like healthcare, transportation, and disaster relief. We envision everyone
							becoming full and active contributors to tomorrow’s society through App Inventor.
						</p>
						<blockquote className="mt-6 card shadow-elevation1">
							<p className="card-body text-base">
								<span className="font-semibold">Impact‑driven learning</span> — Anyone can create apps with
								social impact!
							</p>
						</blockquote>
					</div>
					<div className="mt-10 grid gap-4 sm:grid-cols-3">
						<Stat value="10,000+" label="Students impacted" />
						<Stat value="100+" label="Courses & events" />
						<Stat value="180+" label="App creations" />
					</div>
				</Container>
			</section>
		</>
	);
}


