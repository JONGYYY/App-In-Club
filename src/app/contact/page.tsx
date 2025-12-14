export const metadata = {
	title: "Contact",
};

import { ContactForm } from "@/components/ContactForm";
import { Placeholder } from "@/components/Placeholder";
import { LinkButton } from "@/components/Button";
import type { CSSProperties } from "react";

export default function ContactPage() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			{/* Financia-style compact hero */}
			<section className="relative overflow-hidden py-12 sm:py-14">
				<div className="absolute inset-0 animated-gradient" aria-hidden />
				<div className="absolute -top-10 -left-10 h-64 w-64 rounded-full blur-3xl opacity-25 bg-[color:var(--blue-300)] float-slow" aria-hidden />
				<div className="absolute -bottom-16 -right-10 h-72 w-72 rounded-full blur-3xl opacity-20 bg-[color:var(--brand)] float-slow" aria-hidden />
				<div className="container relative">
					<h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text reveal-up" style={{ animationDelay: "100ms" } as CSSProperties}>
						Contact
					</h1>
					<p className="mt-3 text-lg text-muted max-w-2xl reveal-up" style={{ animationDelay: "220ms" } as CSSProperties}>
						Questions about joining, starting a chapter, events, or partnerships? Send us a message and we’ll get back soon.
					</p>
				</div>
			</section>

			<section className="section-tight">
				<div className="container">
					<div className="grid gap-6 lg:grid-cols-5 items-start">
						<div className="lg:col-span-2 space-y-4">
							<div className="card shadow-elevation1 hover-raise">
								<div className="card-body">
									<h2 className="text-lg font-semibold">Contact info</h2>
									<ul className="mt-3 space-y-2 text-sm text-muted">
										<li>34157 Fremont Blvd, Fremont, CA, 94555</li>
										<li>
											<a className="hover:underline" href="mailto:appinclubstudent@gmail.com">appinclubstudent@gmail.com</a>
										</li>
										<li>
											<a className="hover:underline" href="mailto:appinclubofficer@gmail.com">appinclubofficer@gmail.com</a>
										</li>
									</ul>
									<div className="mt-4">
										<LinkButton href="/chapter" variant="primary">Start a chapter</LinkButton>
									</div>
								</div>
							</div>
							<Placeholder label="Map / location image" className="w-full hover-raise" aspect="16 / 10" />
						</div>
						<div className="lg:col-span-3">
							<div className="card shadow-elevation2">
								<div className="card-body">
									<h2 className="text-xl font-semibold">Send us a message</h2>
									<p className="text-sm text-muted mt-2">We usually reply within a few days.</p>
									<div className="mt-4"><ContactForm /></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}


