import Container from "@/components/Container";
import { Hero } from "@/components/Hero";
import { COMPETITIONS } from "@/data/programs";

export const metadata = {
	title: "Competitions & Events",
	description:
		"Participate in regional, national, and international competitions — with award‑winning teams and projects.",
};

export default function CompetitionsAndEventsPage() {
	return (
		<>
			<Hero
				title={<>Competitions & Events</>}
				subtitle={<>Build skills and confidence through challenges at every level &mdash; from local to global.</>}
				eyebrow={<>Programs</>}
			/>
			<section className="section">
				<Container>
					<h2 className="text-xl font-semibold">Recent Competitions</h2>
					<ul className="mt-4 grid gap-3">
						{COMPETITIONS.map((c, i) => (
							<li key={i} className="card shadow-elevation1 hover-raise">
								<div className="card-body">
									<div className="font-medium">{c.title}</div>
									{c.dates && <div className="text-sm text-muted mt-1">{c.dates}</div>}
								</div>
							</li>
						))}
					</ul>
				</Container>
			</section>
		</>
	);
}


