import Link from "next/link";
import { Card, CardBody } from "@/components/Card";
import { Badge } from "@/components/Badge";

export function EventCard({
	title,
	date,
	location,
	description,
	primaryHref,
	secondaryHref,
}: {
	title: string;
	date: string;
	location: string;
	description: string;
	primaryHref?: string;
	secondaryHref?: string;
}) {
	return (
		<Card elevation={2}>
			<CardBody>
				<Badge>Featured Event</Badge>
				<h3 className="mt-3 text-xl font-semibold">{title}</h3>
				<p className="mt-2 text-sm text-muted">{description}</p>
				<div className="mt-3 text-sm text-muted">
					<div>{date}</div>
					<div>{location}</div>
				</div>
				<div className="mt-4 flex gap-3">
					{primaryHref && (
						<Link href={primaryHref} className="site-cta">
							Register
						</Link>
					)}
					{secondaryHref && (
						<Link href={secondaryHref} className="site-nav-link">
							Donation
						</Link>
					)}
				</div>
			</CardBody>
		</Card>
	);
}


