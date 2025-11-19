export default function Home() {
  return (
		<main className="min-h-screen flex items-center justify-center bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
			<section className="max-w-3xl text-center px-6 py-16">
				<h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Your Company</h1>
				<p className="mt-4 text-base sm:text-lg text-black/70 dark:text-white/70">
					Modern web solutions to help your business grow. This is a placeholder
					homepage — we’ll replace it with your real branding and content.
				</p>
				<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
					<a
						className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-5"
						href="mailto:hello@example.com"
					>
						Contact us
					</a>
					<a
						className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-5"
						href="https://github.com/JONGYYY/App-In-Club.git"
						target="_blank"
						rel="noopener noreferrer"
					>
						View GitHub
					</a>
				</div>
			</section>
		</main>
  );
}
