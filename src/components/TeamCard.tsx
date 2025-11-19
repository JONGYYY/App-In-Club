export function TeamCard({
	name,
	role,
	imageAlt = "",
}: {
	name: string;
	role: string;
	imageAlt?: string;
}) {
	return (
		<div className="card shadow-elevation1 text-center">
			<div className="card-body">
				<div className="mx-auto h-20 w-20 rounded-full bg-[color:var(--blue-100)]" aria-hidden />
				<div className="mt-3 font-semibold">{name}</div>
				<div className="text-sm text-muted">{role}</div>
			</div>
		</div>
	);
}


