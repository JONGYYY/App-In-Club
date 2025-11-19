import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
	variant?: "primary" | "secondary" | "ghost";
	asChild?: boolean;
};

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
	const base =
		"inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors h-10 px-4";
	const variants: Record<typeof variant, string> = {
		primary: "bg-[var(--brand)] text-white hover:bg-[color:var(--brand-600)] active:bg-[color:var(--brand-700)]",
		secondary:
			"border border-black/10 dark:border-white/15 text-black dark:text-white hover:bg-black/[.04] dark:hover:bg-white/[.06]",
		ghost: "text-black/80 dark:text-white/80 hover:bg-black/[.04] dark:hover:bg-white/[.06]",
	};
	return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

type LinkButtonProps = ComponentPropsWithoutRef<"a"> & {
	href: string;
	variant?: "primary" | "secondary" | "ghost";
};

export function LinkButton({ className = "", href, variant = "primary", ...props }: LinkButtonProps) {
	const base =
		"inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors h-10 px-4";
	const variants: Record<NonNullable<LinkButtonProps["variant"]>, string> = {
		primary: "bg-[var(--brand)] text-white hover:bg-[color:var(--brand-600)] active:bg-[color:var(--brand-700)]",
		secondary:
			"border border-black/10 dark:border-white/15 text-black dark:text-white hover:bg-black/[.04] dark:hover:bg-white/[.06]",
		ghost: "text-black/80 dark:text-white/80 hover:bg-black/[.04] dark:hover:bg-white/[.06]",
	};
	return (
		<Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
			{props.children}
		</Link>
	);
}


