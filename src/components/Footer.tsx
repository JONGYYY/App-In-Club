import Container from "@/components/Container";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="mt-16 border-t border-black/5 dark:border-white/10 py-10">
			<Container>
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<div>
						<div className="text-base font-bold tracking-tight">APP‑IN Club</div>
						<p className="mt-3 text-sm text-black/70 dark:text-white/70 max-w-sm">
							A global student‑run organization promoting impact‑driven learning through app creation,
							workshops, competitions, and community.
						</p>
					</div>
					<div>
						<div className="text-sm font-semibold">Contact</div>
						<ul className="mt-3 space-y-2 text-sm">
							<li>34157 Fremont Blvd, Fremont, CA 94555</li>
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
					<div>
						<div className="text-sm font-semibold">Follow</div>
						<div className="mt-3 flex gap-3">
							<Link href="#" className="site-nav-link">Twitter</Link>
							<Link href="#" className="site-nav-link">YouTube</Link>
							<Link href="#" className="site-nav-link">Discord</Link>
							<Link href="#" className="site-nav-link">LinkedIn</Link>
						</div>
					</div>
				</div>
				<div className="mt-8 text-xs text-black/60 dark:text-white/60">
					&copy; {new Date().getFullYear()} APP‑IN Club. All rights reserved.
				</div>
			</Container>
		</footer>
	);
}


