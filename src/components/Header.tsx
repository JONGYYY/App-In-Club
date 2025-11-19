"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "@/components/Container";
import { LinkButton } from "@/components/Button";

const nav = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{
		label: "Programs",
		children: [
			{ label: "Educational Programs", href: "/programs/educational-programs" },
			{ label: "Competitions & Events", href: "/programs/competitions-and-events" },
			{ label: "Lectures & Conferences", href: "/programs/lectures-and-conferences" },
		],
	},
	{ label: "Members", href: "/members" },
	{ label: "Team", href: "/team" },
	{ label: "Impact", href: "/impact" },
	{ label: "Contact", href: "/contact" },
];

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [openMenu, setOpenMenu] = useState<string | null>(null);

	return (
		<header className="site-header">
			<Container>
				<div className="flex h-16 items-center justify-between gap-4">
					<div className="flex items-center gap-6">
						<Link href="/" className="text-base font-bold tracking-tight">
							APP‑IN Club
						</Link>
						<nav className="hidden md:flex items-center gap-1">
							{nav.map((item) =>
								item.children ? (
									<div key={item.label} className="relative">
										<button
											className="site-nav-link"
											aria-haspopup="menu"
											aria-expanded={openMenu === item.label}
											onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
											onBlur={() => setOpenMenu(null)}
										>
											{item.label}
											<ChevronDownIcon className="size-4 opacity-70" />
										</button>
										{openMenu === item.label && (
											<div
												role="menu"
												className="absolute left-0 mt-2 w-72 rounded-lg border border-black/5 dark:border-white/10 bg-background shadow-lg p-2"
											>
												{item.children.map((c) => (
													<Link
														key={c.href}
														href={c.href}
														className="block px-3 py-2 rounded-md text-sm hover:bg-black/[.04] dark:hover:bg-white/[.06]"
														role="menuitem"
													>
														{c.label}
													</Link>
												))}
											</div>
										)}
									</div>
								) : (
									<Link key={item.href} href={item.href} className="site-nav-link">
										{item.label}
									</Link>
								),
							)}
						</nav>
					</div>
					<div className="hidden md:flex items-center gap-3">
						<Link href="#" className="site-nav-link">
							My Profile
						</Link>
						<LinkButton href="#" variant="secondary">
							Sign Up
						</LinkButton>
						<LinkButton href="#" variant="primary">
							Log In
						</LinkButton>
					</div>
					<div className="md:hidden">
						<button
							aria-label="Toggle navigation"
							aria-expanded={mobileOpen}
							className="site-nav-link"
							onClick={() => setMobileOpen((v) => !v)}
						>
							Menu
						</button>
					</div>
				</div>
				{mobileOpen && (
					<div className="md:hidden pb-4">
						<nav className="grid gap-1">
							{nav.map((item) =>
								item.children ? (
									<div key={item.label} className="grid gap-1">
										<div className="px-3 pt-2 text-xs uppercase tracking-wide text-black/60 dark:text-white/60">
											{item.label}
										</div>
										<div className="grid">
											{item.children.map((c) => (
												<Link
													key={c.href}
													href={c.href}
													className="px-3 py-2 rounded-md text-sm hover:bg-black/[.04] dark:hover:bg-white/[.06]"
												>
													{c.label}
												</Link>
											))}
										</div>
									</div>
								) : (
									<Link key={item.href} href={item.href} className="px-3 py-2 rounded-md text-sm hover:bg-black/[.04] dark:hover:bg-white/[.06]">
										{item.label}
									</Link>
								),
							)}
							<div className="mt-2 grid grid-cols-2 gap-2 px-2">
								<LinkButton href="#" variant="secondary" className="w-full justify-center">
									Sign Up
								</LinkButton>
								<LinkButton href="#" variant="primary" className="w-full justify-center">
									Log In
								</LinkButton>
							</div>
						</nav>
					</div>
				)}
			</Container>
		</header>
	);
}

// Minimal chevron-down icon (inline for simplicity)
export function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
			<path
				fillRule="evenodd"
				d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
				clipRule="evenodd"
			/>
		</svg>
	);
}


