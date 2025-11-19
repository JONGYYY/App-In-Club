export function FAQ({
	items,
}: {
	items: Array<{ question: string; answer: string }>;
}) {
	return (
		<div className="space-y-3">
			{items.map((it, idx) => (
				<details key={idx} className="card">
					<summary className="card-body cursor-pointer select-none font-medium">
						{it.question}
					</summary>
					<div className="px-5 pb-5 text-sm text-muted -mt-2">{it.answer}</div>
				</details>
			))}
		</div>
	);
}


