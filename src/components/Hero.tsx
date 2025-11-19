import { ReactNode } from "react";
import Container from "@/components/Container";

export function Hero({
	title,
	subtitle,
	actions,
	eyebrow,
}: {
	title: ReactNode;
	subtitle?: ReactNode;
	actions?: ReactNode;
	eyebrow?: ReactNode;
}) {
	return (
		<section className="section-wide hero-brand">
			<Container>
				<div className="mx-auto max-w-4xl text-center">
					{eyebrow && (
						<div className="mb-3 inline-flex items-center rounded-full bg-[color:var(--blue-100)] px-3 py-1 text-xs font-semibold text-[color:var(--blue-900)]">
							{eyebrow}
						</div>
					)}
					<h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{title}</h1>
					{subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
					{actions && <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">{actions}</div>}
				</div>
			</Container>
		</section>
	);
}


