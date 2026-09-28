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

export function EnquiryForm() {
	const [submitted, setSubmitted] = useState<{
		name: string;
		phone: string;
	} | null>(null);

	function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const name = String(data.get("name") ?? "").trim();
		const phone = String(data.get("phone") ?? "").trim();
		if (!name || !phone) return;
		setSubmitted({ name, phone });
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

			<button type="submit" className="btn btn-primary mt-8 w-full sm:w-auto">
				Send enquiry
			</button>
		</form>
	);
}
