import Link from "next/link";
import { Card, CardBody } from "@/components/Card";

export function ProgramCard({
	title,
	description,
	href,
}: {
	title: string;
	description: string;
	href: string;
}) {
	return (
		<Card className="h-full">
			<CardBody>
				<h3 className="text-lg font-semibold">{title}</h3>
				<p className="mt-2 text-sm text-muted">{description}</p>
				<Link href={href} className="mt-3 inline-block site-nav-link">
					Read more
				</Link>
			</CardBody>
		</Card>
	);
}


