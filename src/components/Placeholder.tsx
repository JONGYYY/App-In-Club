import type { CSSProperties } from "react";

export function Placeholder({
	label = "Image",
	className = "",
	aspect = "16 / 9",
	style,
}: {
	label?: string;
	className?: string;
	aspect?: string;
	style?: CSSProperties;
}) {
	return (
		<div
			className={`img-placeholder ${className}`}
			style={{ aspectRatio: aspect, ...(style || {}) }}
			aria-label={`${label} placeholder`}
		>
			<span className="img-placeholder-label">{label}</span>
		</div>
	);
}


