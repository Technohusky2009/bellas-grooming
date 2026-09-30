import { useState, type FormEvent } from "react";
import { site } from "../site";

const services = [
	{ value: "full-groom", label: "Full groom" },
	{ value: "bath-and-brush", label: "Bath and brush" },
	{ value: "nails", label: "Nails" },
	{ value: "cat-grooming", label: "Cat grooming" },
	{ value: "not-sure", label: "Not sure" },
] as const;

const fieldClass =
	"mt-1.5 w-full min-h-12 rounded-card border border-line bg-paper px-3 text-base text-ink placeholder:text-muted/70";

// Web3Forms access key. This is a public key (Web3Forms expects it in the
// browser) and it is locked to the inbox it was issued for, so it is safe to
// keep as the built-in default: the site then delivers even when no build-time
// environment variable is present. Set VITE_WEB3FORMS_KEY to override it.
const ACCESS_KEY =
	(import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) ??
	"4219ef69-aa13-4456-a684-2528e2b018dd";

export function EnquiryForm() {
	const [submitted, setSubmitted] = useState<{
		name: string;
		phone: string;
	} | null>(null);
	const [sending, setSending] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const name = String(data.get("name") ?? "").trim();
		const phone = String(data.get("phone") ?? "").trim();
		if (!name || !phone) return;

		if (!ACCESS_KEY) {
			setError(
				"This form is not connected yet. Please ring us instead and we will book you in.",
			);
			return;
		}

		setError(null);
		setSending(true);
		try {
			const payload: Record<string, string> = {
				access_key: ACCESS_KEY,
				subject: `Website enquiry from ${name}`,
				from_name: "Bella's Dog Grooming website",
			};
			for (const [key, value] of data.entries()) {
				if (key === "botcheck") continue;
				payload[key] = String(value);
			}

			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(payload),
			});
			const result = (await response.json()) as {
				success?: boolean;
				message?: string;
			};
			if (!response.ok || !result.success) {
				throw new Error(result.message || "The enquiry could not be sent.");
			}
			setSubmitted({ name, phone });
		} catch (err) {
			setError(
				err instanceof Error && err.message
					? err.message
					: "Something went wrong sending that. Please ring us instead.",
			);
		} finally {
			setSending(false);
		}
	}

	if (submitted) {
		return (
			<div className="rounded-card border border-line bg-card p-6 sm:p-8">
				<h2 className="font-display text-2xl font-semibold tracking-tight">
					Thank you, {submitted.name}.
				</h2>
				<p className="mt-4 max-w-prose text-lg leading-relaxed">
					This is an enquiry, not a confirmed appointment. We will ring you
					back on {submitted.phone} to agree a time.
				</p>
				<p className="mt-6 text-muted">
					If you would rather not wait, the fastest way to book is to ring us
					now.
				</p>
				<a
					href={`tel:${site.phoneTel}`}
					className="btn btn-primary mt-6 text-lg"
				>
					Call {site.phoneDisplay}
				</a>
			</div>
		);
	}

	return (
		<form
			onSubmit={onSubmit}
			className="rounded-card border border-line bg-card p-5 sm:p-8"
			noValidate={false}
		>
			{/* Bot trap — hidden from people, filled in by scrapers. */}
			<input
				type="checkbox"
				name="botcheck"
				className="hidden"
				style={{ display: "none" }}
				tabIndex={-1}
				autoComplete="off"
			/>

			<p className="rounded-card bg-sage/40 px-4 py-3 text-sm leading-relaxed">
				This is an enquiry, not a confirmed appointment. We will ring you back
				to agree a time.
			</p>

			<div className="mt-6 grid gap-5">
				<label className="block">
					<span className="text-sm font-semibold">Your name</span>
					<input
						className={fieldClass}
						type="text"
						name="name"
						autoComplete="name"
						required
					/>
				</label>

				<label className="block">
					<span className="text-sm font-semibold">Phone</span>
					<input
						className={fieldClass}
						type="tel"
						name="phone"
						autoComplete="tel"
						inputMode="tel"
						required
					/>
				</label>

				<label className="block">
					<span className="text-sm font-semibold">
						Email <span className="font-normal text-muted">(optional)</span>
					</span>
					<input
						className={fieldClass}
						type="email"
						name="email"
						autoComplete="email"
					/>
				</label>

				<fieldset>
					<legend className="text-sm font-semibold">Dog or cat</legend>
					<div className="mt-2 flex flex-wrap gap-3">
						<label className="inline-flex min-h-12 items-center gap-2 rounded-card border border-line bg-paper px-4">
							<input
								type="radio"
								name="animal"
								value="dog"
								required
								className="size-4 accent-ink"
							/>
							Dog
						</label>
						<label className="inline-flex min-h-12 items-center gap-2 rounded-card border border-line bg-paper px-4">
							<input
								type="radio"
								name="animal"
								value="cat"
								className="size-4 accent-ink"
							/>
							Cat
						</label>
					</div>
				</fieldset>

				<label className="block">
					<span className="text-sm font-semibold">Breed</span>
					<input className={fieldClass} type="text" name="breed" />
				</label>

				<label className="block">
					<span className="text-sm font-semibold">What you would like</span>
					<select className={fieldClass} name="service" required defaultValue="">
						<option value="" disabled>
							Please choose
						</option>
						{services.map((item) => (
							<option key={item.value} value={item.value}>
								{item.label}
							</option>
						))}
					</select>
				</label>

				<label className="block">
					<span className="text-sm font-semibold">Preferred day</span>
					<input
						className={fieldClass}
						type="text"
						name="preferred-day"
						placeholder="Tuesday morning"
					/>
				</label>

				<label className="block">
					<span className="text-sm font-semibold">
						Anything we should know about your animal
					</span>
					<textarea
						className={`${fieldClass} min-h-28 py-3`}
						name="notes"
						rows={4}
					/>
				</label>
			</div>

			{error ? (
				<p
					role="alert"
					className="mt-6 rounded-card border border-red-300 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-800"
				>
					{error}
				</p>
			) : null}

			<button
				type="submit"
				disabled={sending}
				className="btn btn-primary mt-8 w-full sm:w-auto disabled:opacity-60"
			>
				{sending ? "Sending…" : "Send enquiry"}
			</button>
		</form>
	);
}
