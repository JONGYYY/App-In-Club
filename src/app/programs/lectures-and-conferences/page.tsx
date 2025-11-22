import Container from "@/components/Container";
import { Hero } from "@/components/Hero";
import { LECTURES } from "@/data/programs";

export const metadata = {
	title: "Lectures & Conferences",
	description:
		"We invite renowned scholars, industry leaders, competition champions, and top university students to share experiences.",
};

export default function LecturesAndConferencesPage() {
	return (
		<>
			<Hero
				title={<>Lectures & Conferences</>}
				subtitle={<>Hear from scholars, industry leaders, world champions, and top university students.</>}
				eyebrow={<>Programs</>}
			/>
			<section className="section">
				<Container>
					<h2 className="text-xl font-semibold">Highlights</h2>
					<ul className="mt-4 grid gap-3">
						{LECTURES.map((c, i) => (
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


