import Link from "next/link";
import { Card, CardBody } from "@/components/Card";

import { Placeholder } from "@/components/Placeholder";

export function ProgramCard({
	title,
	description,
	href,
	imageLabel,
}: {
	title: string;
	description: string;
	href: string;
	imageLabel?: string;
}) {
	return (
		<Card className="h-full">
			<CardBody>
				{imageLabel && <Placeholder label={imageLabel} className="mb-3 w-full" aspect="16 / 9" />}
				<h3 className="text-lg font-semibold">{title}</h3>
				<p className="mt-2 text-sm text-muted">{description}</p>
				<Link href={href} className="mt-3 inline-block site-nav-link">
					Read more
				</Link>
			</CardBody>
		</Card>
	);
}


