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
		<section className="section-wide relative overflow-hidden">
			{/* Animated gradient background */}
			<div className="absolute inset-0 animated-gradient" aria-hidden />
			{/* Soft blobs */}
			<div className="absolute -top-10 -left-10 h-64 w-64 rounded-full blur-3xl opacity-30 bg-[color:var(--blue-300)] float-slow" aria-hidden />
			<div className="absolute -bottom-16 -right-10 h-72 w-72 rounded-full blur-3xl opacity-25 bg-[color:var(--brand)] float-slow" aria-hidden />
			<Container>
				<div className="mx-auto max-w-4xl text-center relative">
					{eyebrow && (
						<div className="mb-3 inline-flex items-center rounded-full bg-[color:var(--blue-100)] px-3 py-1 text-xs font-semibold text-[color:var(--blue-900)]">
							{eyebrow}
						</div>
					)}
					<h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text reveal-up" style={{ animationDelay: "100ms" }}>{title}</h1>
					{subtitle && <p className="mt-4 text-lg text-muted reveal-up" style={{ animationDelay: "250ms" }}>{subtitle}</p>}
					{actions && <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center reveal-up" style={{ animationDelay: "400ms" }}>{actions}</div>}
				</div>
			</Container>
		</section>
	);
}


