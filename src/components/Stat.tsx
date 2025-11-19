export function Stat({
	label,
	value,
}: {
	label: string;
	value: string;
}) {
	return (
		<div className="card shadow-elevation1">
			<div className="card-body">
				<div className="text-3xl font-bold text-[color:var(--brand)]">{value}</div>
				<div className="mt-1 text-sm text-muted">{label}</div>
			</div>
		</div>
	);
}


