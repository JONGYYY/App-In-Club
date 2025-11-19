export function Timeline({
	items,
}: {
	items: Array<{ date: string; title: string; description: string }>;
}) {
	return (
		<ol className="relative border-l border-[color:var(--blue-200)] pl-6">
			{items.map((it, i) => (
				<li key={i} className="mb-8">
					<div className="absolute -left-2.5 mt-1 h-2.5 w-2.5 rounded-full bg-[color:var(--brand)]" aria-hidden />
					<div className="text-sm text-muted">{it.date}</div>
					<div className="font-semibold mt-0.5">{it.title}</div>
					<p className="text-sm text-muted mt-1">{it.description}</p>
				</li>
			))}
		</ol>
	);
}


