import { NEWS } from "@/data/news";
import Container from "@/components/Container";

export const metadata = {
	title: "News & Events",
	description: "Latest news, achievements, and upcoming events from APP‑IN Club.",
};

export default function NewsPage() {
	return (
		<section className="section">
			<Container>
				<h1 className="text-3xl font-bold tracking-tight">News & Events</h1>
				<p className="mt-3 text-muted max-w-2xl">
					Highlights from recent achievements and announcements.
				</p>
				<ul className="mt-8 grid gap-4 sm:grid-cols-2">
					{NEWS.map((item) => (
						<li key={item.id} className="card shadow-elevation1">
							<div className="card-body">
								<div className="text-xs text-muted">{new Date(item.date).toLocaleDateString()}</div>
								<h3 className="mt-1 font-semibold">{item.title}</h3>
								<p className="mt-2 text-sm text-muted">{item.summary}</p>
							</div>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}


