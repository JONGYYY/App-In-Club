import Link from "next/link";

function Icon({ children, size = "md" }: { children: React.ReactNode; size?: "sm" | "md" }) {
	return (
		<span
			aria-hidden
			className={`inline-flex items-center justify-center rounded-full bg-[color:var(--brand)] text-white shadow-elevation2 ${
				size === "sm" ? "h-8 w-8 text-sm" : "h-9 w-9"
			}`}
		>
			{children}
		</span>
	);
}

function IconButton({
	href,
	label,
	children,
	size,
}: {
	href: string;
	label: string;
	children: React.ReactNode;
	size?: "sm" | "md";
}) {
	return (
		<Link
			href={href}
			aria-label={label}
			className="icon-btn"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Icon size={size}>{children}</Icon>
			<span className="sr-only">{label}</span>
		</Link>
	);
}

export function SocialBar({
	variant = "floating",
}: {
	variant?: "floating" | "inline";
}) {
	return (
		<div
			className={`inline-flex items-center gap-2 rounded-full px-3 py-2 shadow-elevation2 backdrop-blur ${
				variant === "inline" ? "bg-white/30" : ""
			}`}
			style={{
				background:
					variant === "inline"
						? "linear-gradient(135deg, color-mix(in srgb, var(--blue-200) 65%, white), color-mix(in srgb, var(--blue-100) 70%, white))"
						: "linear-gradient(135deg, var(--blue-400), var(--brand))",
				color: "#fff",
				border: "1px solid color-mix(in srgb, var(--blue-100) 60%, white)",
			}}
		>
			<IconButton href="https://x.com" label="X (formerly Twitter)" size={variant === "inline" ? "sm" : "md"}>
				<span className="font-bold">X</span>
			</IconButton>
			<IconButton href="https://youtube.com" label="YouTube" size={variant === "inline" ? "sm" : "md"}>
				<span className="text-lg">▶</span>
			</IconButton>
			<IconButton href="https://discord.com" label="Discord" size={variant === "inline" ? "sm" : "md"}>
				<span className="font-bold">D</span>
			</IconButton>
			<IconButton href="https://linkedin.com" label="LinkedIn" size={variant === "inline" ? "sm" : "md"}>
				<span className="font-black text-base">in</span>
			</IconButton>
		</div>
	);
}


