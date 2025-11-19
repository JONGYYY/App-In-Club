export const metadata = {
	title: "Contact",
};

export default function ContactPage() {
	return (
		<div className="section">
			<div className="container max-w-3xl">
				<h1 className="text-3xl font-bold tracking-tight">Contact</h1>
				<p className="mt-4 text-muted">
					We’d love to hear from you. Reach us at:
				</p>
				<ul className="mt-4 space-y-2 text-sm">
					<li>34157 Fremont Blvd, Fremont, CA, 94555</li>
					<li>
						<a className="hover:underline" href="mailto:appinclubstudent@gmail.com">
							appinclubstudent@gmail.com
						</a>
					</li>
					<li>
						<a className="hover:underline" href="mailto:appinclubofficer@gmail.com">
							appinclubofficer@gmail.com
						</a>
					</li>
				</ul>
				<div className="mt-10">
					<h2 className="text-xl font-semibold">Send us a message</h2>
					<p className="text-sm text-muted mt-2">We usually reply within a few days.</p>
					<div className="mt-4">
						{/* @ts-expect-error Server/Client boundary handled by Next */}
						{/* eslint-disable-next-line @next/next/no-sync-scripts */}
						{require("@/components/ContactForm").ContactForm()}
					</div>
				</div>
			</div>
		</div>
	);
}


