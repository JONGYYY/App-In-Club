import { Placeholder } from "@/components/Placeholder";

export function PhoneMock({
	metricValue = "10,000+",
	metricLabel = "Students impacted",
	subLabel = "Impact-driven learning worldwide",
}: {
	metricValue?: string;
	metricLabel?: string;
	subLabel?: string;
}) {
	return (
		<div className="relative mx-auto w-full max-w-md">
			{/* Glow */}
			<div
				aria-hidden
				className="absolute -inset-10 rounded-[40px] blur-3xl opacity-30"
				style={{
					background:
						"radial-gradient(closest-side, color-mix(in srgb, var(--brand) 45%, transparent), transparent)",
				}}
			/>

			{/* Phone */}
			<div className="relative rounded-[40px] border border-white/60 bg-white/70 shadow-elevation4 backdrop-blur p-3">
				<div className="relative rounded-[32px] overflow-hidden bg-white shadow-elevation2">
					{/* Notch */}
					<div
						aria-hidden
						className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-[color:var(--blue-900)]/10"
					/>

					{/* Screen placeholder */}
					<div className="p-4">
						<div className="flex items-center gap-2">
							<div className="h-9 w-9 rounded-xl bg-[color:var(--blue-100)]" aria-hidden />
							<div className="text-sm font-semibold">APP‑IN Club</div>
						</div>
						<div className="mt-4 grid gap-3">
							<Placeholder label="App screen" aspect="16 / 9" />
							<Placeholder label="App screen" aspect="16 / 9" />
						</div>
					</div>
				</div>
			</div>

			{/* Floating metric pill */}
			<div className="absolute -bottom-6 left-6 rounded-2xl bg-[color:var(--blue-900)]/90 text-white shadow-elevation3 backdrop-blur px-4 py-3">
				<div className="flex items-center gap-3">
					<div className="flex -space-x-2" aria-hidden>
						<div className="h-8 w-8 rounded-full bg-[color:var(--blue-200)] border-2 border-[color:var(--blue-900)]/50" />
						<div className="h-8 w-8 rounded-full bg-[color:var(--blue-300)] border-2 border-[color:var(--blue-900)]/50" />
						<div className="h-8 w-8 rounded-full bg-[color:var(--blue-400)] border-2 border-[color:var(--blue-900)]/50" />
					</div>
					<div>
						<div className="text-base font-bold leading-tight">{metricValue}</div>
						<div className="text-xs opacity-85">{metricLabel}</div>
					</div>
				</div>
				<div className="mt-1 text-[11px] opacity-75">{subLabel}</div>
			</div>
		</div>
	);
}


