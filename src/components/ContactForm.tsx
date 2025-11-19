\"use client\";

import { useState } from \"react\";

export function ContactForm() {
\tconst [status, setStatus] = useState<\"idle\" | \"submitting\" | \"success\" | \"error\">(\"idle\");

async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
\te.preventDefault();
\tif (status === \"submitting\") return;
\tsetStatus(\"submitting\");
\tconst form = e.currentTarget;
\tconst data = new FormData(form);
\ttry {
\t\tconst res = await fetch(\"/api/contact\", { method: \"POST\", body: data });
\t\tif (!res.ok) throw new Error(\"Request failed\");
\t\tsetStatus(\"success\");
\t\tform.reset();
\t} catch (_) {
\t\tsetStatus(\"error\");
\t}
}

return (
\t<form className=\"grid gap-4 max-w-xl\" onSubmit={onSubmit} aria-describedby=\"contact-status\">
\t\t<div className=\"grid gap-1\">
\t\t\t<label htmlFor=\"name\" className=\"text-sm font-medium\">Name</label>
\t\t\t<input id=\"name\" name=\"name\" required className=\"h-10 rounded-md border border-[color:var(--blue-200)] bg-white px-3\" />
\t\t</div>
\t\t<div className=\"grid gap-1\">
\t\t\t<label htmlFor=\"email\" className=\"text-sm font-medium\">Email</label>
\t\t\t<input id=\"email\" name=\"email\" type=\"email\" required className=\"h-10 rounded-md border border-[color:var(--blue-200)] bg-white px-3\" />
\t\t</div>
\t\t<div className=\"grid gap-1\">
\t\t\t<label htmlFor=\"message\" className=\"text-sm font-medium\">Message</label>
\t\t\t<textarea id=\"message\" name=\"message\" required rows={5} className=\"rounded-md border border-[color:var(--blue-200)] bg-white px-3 py-2\" />
\t\t</div>
\t\t<div className=\"flex items-center gap-3\">
\t\t\t<button className=\"site-cta\" disabled={status === \"submitting\"} aria-disabled={status === \"submitting\"}>
\t\t\t\t{status === \"submitting\" ? \"Sending...\" : \"Send\"}
\t\t\t</button>
\t\t\t{status === \"success\" && <span id=\"contact-status\" className=\"text-sm text-[color:var(--brand)]\">Message sent. We will reach out soon.</span>}
\t\t\t{status === \"error\" && <span id=\"contact-status\" className=\"text-sm text-red-600\">Something went wrong. Please try again.</span>}
\t\t</div>
\t</form>
);
}


