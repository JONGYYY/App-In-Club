import Container from "@/components/Container";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="mt-16 border-t border-black/5 dark:border-white/10 py-10">
			<Container>
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					<div>
						<div className="text-base font-bold tracking-tight">APP‑IN Club</div>
						<p className="mt-3 text-sm text-muted max-w-sm">
							A global student‑run organization promoting impact‑driven learning through app creation,
							workshops, competitions, and community.
						</p>
					</div>
					<div>
						<div className="text-sm font-semibold">Quick links</div>
						<ul className="mt-3 space-y-2 text-sm">
							<li><Link href="/about" className="hover:text-[color:var(--brand)]">About</Link></li>
							<li><Link href="/programs/educational-programs" className="hover:text-[color:var(--brand)]">Educational Programs</Link></li>
							<li><Link href="/programs/competitions-and-events" className="hover:text-[color:var(--brand)]">Competitions & Events</Link></li>
							<li><Link href="/programs/lectures-and-conferences" className="hover:text-[color:var(--brand)]">Lectures & Conferences</Link></li>
							<li><Link href="/news" className="hover:text-[color:var(--brand)]">News & Events</Link></li>
						</ul>
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
					<div className="">
						<div className="text-sm font-semibold">Follow</div>
						<div className="mt-3 flex gap-3">
							<Link href="#" className="site-nav-link hover:text-[color:var(--brand)]">Twitter</Link>
							<Link href="#" className="site-nav-link hover:text-[color:var(--brand)]">YouTube</Link>
							<Link href="#" className="site-nav-link hover:text-[color:var(--brand)]">Discord</Link>
							<Link href="#" className="site-nav-link hover:text-[color:var(--brand)]">LinkedIn</Link>
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


