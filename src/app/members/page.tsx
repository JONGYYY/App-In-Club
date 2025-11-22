export const metadata = {
	title: "Members",
};

export default function MembersPage() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<section className="section-wide relative overflow-hidden">
				<div className="absolute inset-0 animated-gradient" aria-hidden />
				<div className="container relative">
					<h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">Members</h1>
					<p className="mt-4 text-lg text-muted max-w-3xl">
						Access workshops, mentorship, competitions, and a supportive community to grow your skills and impact.
					</p>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className="grid gap-4 sm:grid-cols-3">
						<div className="card shadow-elevation1 hover-raise"><div className="card-body"><h3 className="font-semibold">Workshops</h3><p className="text-sm text-muted mt-2">Regular sessions to build app skills and collaborate.</p></div></div>
						<div className="card shadow-elevation1 hover-raise"><div className="card-body"><h3 className="font-semibold">Mentorship</h3><p className="text-sm text-muted mt-2">Guidance from experienced members and leaders.</p></div></div>
						<div className="card shadow-elevation1 hover-raise"><div className="card-body"><h3 className="font-semibold">Community Projects</h3><p className="text-sm text-muted mt-2">Build real apps that serve community needs.</p></div></div>
					</div>
				</div>
			</section>
		</div>
	);
}


