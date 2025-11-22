export const metadata = {
	title: "Impact",
};

export default function ImpactPage() {
	return (
		<div className="section">
			<div className="container">
				<h1 className="text-3xl font-bold tracking-tight">Impact</h1>
				<p className="mt-4 text-muted max-w-2xl">
					Stories and outcomes from our members and community — awards, projects, and service.
				</p>
				<div className="mt-8">
					<h2 className="text-xl font-semibold">Recent Highlights</h2>
					<ul className="mt-4 grid gap-3 sm:grid-cols-2">
						<li className="card shadow-elevation1"><div className="card-body text-sm">MIT AI & EDU Summit “Hack the Climate” — first place and poster selection.</div></li>
						<li className="card shadow-elevation1"><div className="card-body text-sm">Congressional App Challenge winners invited to #HouseOfCode.</div></li>
						<li className="card shadow-elevation1"><div className="card-body text-sm">Global AI Hackathon youth award and honorable mention.</div></li>
						<li className="card shadow-elevation1"><div className="card-body text-sm">ACA community service award and scholarship (San Diego Chapter).</div></li>
					</ul>
				</div>
			</div>
		</div>
	);
}


