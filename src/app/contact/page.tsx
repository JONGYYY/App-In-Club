export const metadata = {
	title: "Contact",
};

export default function ContactPage() {
	return (
		<div className="section">
			<div className="container max-w-3xl">
				<h1 className="text-3xl font-bold tracking-tight">Contact</h1>
				<p className="mt-4 text-black/70 dark:text-white/70">
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
			</div>
		</div>
	);
}


