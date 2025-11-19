export function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
	return (
		<span
			className={`inline-flex items-center rounded-full bg-[color:var(--blue-100)] text-[color:var(--blue-900)] px-2.5 py-1 text-xs font-semibold ${className}`}
		>
			{children}
		</span>
	);
}


