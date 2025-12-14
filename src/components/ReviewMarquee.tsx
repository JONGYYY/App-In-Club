import type { CSSProperties } from "react";

export type Review = {
	quote: string;
	name: string;
	role: string;
};

export function ReviewMarquee({
	title,
	subtitle,
	reviews,
}: {
	title: string;
	subtitle?: string;
	reviews: Review[];
}) {
	const doubled = [...reviews, ...reviews];
	return (
		<section className="section-tight section-muted">
			<div className="container">
				<div className="flex items-end justify-between gap-4">
					<div>
						<div className="text-xs uppercase tracking-wide text-muted">Social proof</div>
						<h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
						{subtitle && <p className="mt-2 text-muted max-w-2xl">{subtitle}</p>}
					</div>
				</div>

				<div className="mt-6 marquee-track">
					<div className="marquee" style={{ gap: "1rem" } as CSSProperties}>
						{doubled.map((r, idx) => (
							<div key={`${r.name}-${idx}`} className="card shadow-elevation1 hover-raise" style={{ width: 360 } as CSSProperties}>
								<div className="card-body">
									<p className="text-sm">&ldquo;{r.quote}&rdquo;</p>
									<div className="mt-3 text-xs text-muted">{r.name} &middot; {r.role}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}


