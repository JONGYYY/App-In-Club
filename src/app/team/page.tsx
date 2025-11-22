export const metadata = {
	title: "Team",
};

export default function TeamPage() {
	return (
		<div className="section">
			<div className="container">
				<h1 className="text-3xl font-bold tracking-tight">Team</h1>
				<p className="mt-4 text-muted max-w-2xl">
					Meet the officers, mentors, and volunteers who support APP‑IN Club’s mission.
				</p>
				<div className="mt-8 grid gap-4 sm:grid-cols-3">
					<div className="card shadow-elevation1 text-center">
						<div className="card-body">
							<div className="mx-auto h-20 w-20 rounded-full bg-[color:var(--blue-100)]" aria-hidden />
							<div className="mt-3 font-semibold">Officer Name</div>
							<div className="text-sm text-muted">President</div>
						</div>
					</div>
					<div className="card shadow-elevation1 text-center">
						<div className="card-body">
							<div className="mx-auto h-20 w-20 rounded-full bg-[color:var(--blue-100)]" aria-hidden />
							<div className="mt-3 font-semibold">Officer Name</div>
							<div className="text-sm text-muted">VP Programs</div>
						</div>
					</div>
					<div className="card shadow-elevation1 text-center">
						<div className="card-body">
							<div className="mx-auto h-20 w-20 rounded-full bg-[color:var(--blue-100)]" aria-hidden />
							<div className="mt-3 font-semibold">Officer Name</div>
							<div className="text-sm text-muted">Mentor Lead</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


