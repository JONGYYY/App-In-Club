export function Testimonial({
	quote,
	name,
	role,
}: {
	quote: string;
	name: string;
	role: string;
}) {
	return (
		<figure className="card shadow-elevation1">
			<blockquote className="card-body">
				<p className="text-base">&ldquo;{quote}&rdquo;</p>
				<figcaption className="mt-3 text-sm text-muted">
					{name} &middot; {role}
				</figcaption>
			</blockquote>
		</figure>
	);
}


