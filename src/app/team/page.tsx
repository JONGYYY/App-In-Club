export const metadata = {
	title: "Team",
};

export default function TeamPage() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<section className="section-wide relative overflow-hidden">
				<div className="absolute inset-0 animated-gradient" aria-hidden />
				<div className="container relative">
					<h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">Team</h1>
					<p className="mt-4 text-lg text-muted max-w-3xl">
						Officers, mentors, and volunteers who support the APP‑IN mission.
					</p>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className="grid gap-4 sm:grid-cols-3">
						<div className="reveal-up" style={{ animationDelay: "120ms" }}>
							<div className="card shadow-elevation1 text-center"><div className="card-body"><div className="mx-auto h-20 w-20 rounded-full bg-[color:var(--blue-100)]" /><div className="mt-3 font-semibold">Officer Name</div><div className="text-sm text-muted">Role</div></div></div>
						</div>
						<div className="reveal-up" style={{ animationDelay: "220ms" }}>
							<div className="card shadow-elevation1 text-center"><div className="card-body"><div className="mx-auto h-20 w-20 rounded-full bg-[color:var(--blue-100)]" /><div className="mt-3 font-semibold">Officer Name</div><div className="text-sm text-muted">Role</div></div></div>
						</div>
						<div className="reveal-up" style={{ animationDelay: "320ms" }}>
							<div className="card shadow-elevation1 text-center"><div className="card-body"><div className="mx-auto h-20 w-20 rounded-full bg-[color:var(--blue-100)]" /><div className="mt-3 font-semibold">Officer Name</div><div className="text-sm text-muted">Role</div></div></div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}


