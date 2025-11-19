import Container from "@/components/Container";

export function Section({
	title,
	eyebrow,
	children,
	muted = false,
	actions,
}: {
	title?: string;
	eyebrow?: string;
	children: React.ReactNode;
	muted?: boolean;
	actions?: React.ReactNode;
}) {
	return (
		<section className={`section ${muted ? "section-muted" : ""}`}>
			<Container>
				{(eyebrow || title || actions) && (
					<header className="mb-6 sm:mb-8 flex items-end justify-between gap-4">
						<div>
							{eyebrow && (
								<div className="text-xs uppercase tracking-wide text-black/60 dark:text-white/60">
									{eyebrow}
								</div>
							)}
							{title && <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>}
						</div>
						{actions}
					</header>
				)}
				{children}
			</Container>
		</section>
	);
}


