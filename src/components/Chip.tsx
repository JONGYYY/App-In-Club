export function Chip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
	return (
		<span
			className={`inline-flex items-center rounded-full border border-[color:var(--blue-200)] bg-white text-[color:var(--blue-900)] px-3 py-1 text-xs ${className}`}
		>
			{children}
		</span>
	);
}


