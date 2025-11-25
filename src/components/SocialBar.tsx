import Link from "next/link";

function Icon({ children }: { children: React.ReactNode }) {
	return (
		<span
			aria-hidden
			className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--brand)] text-white shadow-elevation2"
		>
			{children}
		</span>
	);
}

function IconButton({
	href,
	label,
	children,
}: {
	href: string;
	label: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			aria-label={label}
			className="icon-btn"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Icon>{children}</Icon>
			<span className="sr-only">{label}</span>
		</Link>
	);
}

export function SocialBar() {
	return (
		<div className="inline-flex items-center gap-2 rounded-full px-3 py-2 shadow-elevation2 backdrop-blur"
			style={{ background: "linear-gradient(135deg, var(--blue-400), var(--brand))", color: "#fff", border: "1px solid color-mix(in srgb, var(--blue-100) 60%, white)" }}
		>
			<IconButton href="https://x.com" label="X (formerly Twitter)">
				<span className="font-bold">X</span>
			</IconButton>
			<IconButton href="https://youtube.com" label="YouTube">
				<span className="text-lg">▶</span>
			</IconButton>
			<IconButton href="https://discord.com" label="Discord">
				<span className="font-bold">D</span>
			</IconButton>
			<IconButton href="https://linkedin.com" label="LinkedIn">
				<span className="font-black text-base">in</span>
			</IconButton>
		</div>
	);
}


