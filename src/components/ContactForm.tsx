"use client";

import { useState } from "react";

export function ContactForm() {
	const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (status === "submitting") return;
		setStatus("submitting");
		const form = e.currentTarget;
		const data = new FormData(form);
		try {
			const res = await fetch("/api/contact", { method: "POST", body: data });
			if (!res.ok) throw new Error("Request failed");
			setStatus("success");
			form.reset();
		} catch (_) {
			setStatus("error");
		}
	}

	return (
		<form className="grid gap-4 max-w-xl" onSubmit={onSubmit} aria-describedby="contact-status">
			<div className="grid gap-1">
				<label htmlFor="name" className="text-sm font-medium">Name</label>
				<input id="name" name="name" required className="h-10 rounded-md border border-[color:var(--blue-200)] bg-white px-3" />
			</div>
			<div className="grid gap-1">
				<label htmlFor="email" className="text-sm font-medium">Email</label>
				<input id="email" name="email" type="email" required className="h-10 rounded-md border border-[color:var(--blue-200)] bg-white px-3" />
			</div>
			<div className="grid gap-1">
				<label htmlFor="message" className="text-sm font-medium">Message</label>
				<textarea id="message" name="message" required rows={5} className="rounded-md border border-[color:var(--blue-200)] bg-white px-3 py-2" />
			</div>
			<div className="flex items-center gap-3">
				<button className="site-cta" disabled={status === "submitting"} aria-disabled={status === "submitting"}>
					{status === "submitting" ? "Sending..." : "Send"}
				</button>
				{status === "success" && <span id="contact-status" className="text-sm text-[color:var(--brand)]">Message sent. We will reach out soon.</span>}
				{status === "error" && <span id="contact-status" className="text-sm text-red-600">Something went wrong. Please try again.</span>}
			</div>
		</form>
	);
}


