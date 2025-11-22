export const metadata = {
	title: "Members",
};

export default function MembersPage() {
	return (
		<div className="section">
			<div className="container">
				<h1 className="text-3xl font-bold tracking-tight">Members</h1>
				<p className="mt-4 text-muted max-w-2xl">
					Access workshops, mentorship, community projects, and opportunities to grow skills and leadership.
				</p>
				<div className="mt-8 grid gap-4 sm:grid-cols-3">
					<div className="card shadow-elevation1 hover-raise">
						<div className="card-body">
							<div className="font-semibold">Workshops</div>
							<div className="text-sm text-muted mt-1">Hands‑on sessions to build apps and learn by doing.</div>
						</div>
					</div>
					<div className="card shadow-elevation1 hover-raise">
						<div className="card-body">
							<div className="font-semibold">Mentorship</div>
							<div className="text-sm text-muted mt-1">One‑on‑one support and guidance from experienced peers.</div>
						</div>
					</div>
					<div className="card shadow-elevation1 hover-raise">
						<div className="card-body">
							<div className="font-semibold">Competitions</div>
							<div className="text-sm text-muted mt-1">Prepare for local and global challenges with your team.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


