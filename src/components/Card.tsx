import { ReactNode } from "react";

type Elevation = 0 | 1 | 2 | 3 | 4;

export function Card({
	className = "",
	children,
	elevation = 1,
	as = "div",
}: {
	className?: string;
	children: ReactNode;
	elevation?: Elevation;
	as?: "div" | "section" | "article" | "li";
}) {
	const As = as as any;
	const elevationClass =
		elevation === 0
			? ""
			: elevation === 1
			? "shadow-elevation1"
			: elevation === 2
			? "shadow-elevation2"
			: elevation === 3
			? "shadow-elevation3"
			: "shadow-elevation4";
	return <As className={`card ${elevationClass} ${className}`}>{children}</As>;
}

export function CardBody({ className = "", children }: { className?: string; children: ReactNode }) {
	return <div className={`card-body ${className}`}>{children}</div>;
}


