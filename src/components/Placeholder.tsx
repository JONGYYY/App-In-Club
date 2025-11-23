export function Placeholder({
	label = "Image",
	className = "",
	aspect = "16 / 9",
}: {
	label?: string;
	className?: string;
	aspect?: string;
}) {
	return (
		<div
			className={`img-placeholder ${className}`}
			style={{ aspectRatio: aspect }}
			aria-label={`${label} placeholder`}
		>
			<span className="img-placeholder-label">{label}</span>
		</div>
	);
}


