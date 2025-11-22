import Container from "@/components/Container";
import { Hero } from "@/components/Hero";
import { EDUCATIONAL_COURSES } from "@/data/programs";

export const metadata = {
	title: "Educational Programs",
	description: "MIT App Inventor courses, workshops, tutoring/mentoring for all levels.",
};

export default function EducationalProgramsPage() {
	return (
		<>
			<Hero
				title={<>Educational Programs</>}
				subtitle={<>Learn to build apps with MIT App Inventor. Courses, workshops, and mentorship for every level.</>}
				eyebrow={<>Programs</>}
			/>
			<section className="section">
				<Container>
					<h2 className="text-xl font-semibold">Highlighted Courses</h2>
					<ul className="mt-4 grid gap-3">
						{EDUCATIONAL_COURSES.map((c, i) => (
							<li key={i} className="card shadow-elevation1 hover-raise">
								<div className="card-body">
									<div className="font-medium">{c.title}</div>
									{c.dates && <div className="text-sm text-muted mt-1">{c.dates}</div>}
								</div>
							</li>
						))}
					</ul>
					<p className="mt-6 text-sm text-muted">
						We organize discussions and provide one‑on‑one tutoring/mentoring to support student growth.
					</p>
				</Container>
			</section>
		</>
	);
}


