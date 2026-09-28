import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "../components/EnquiryForm";
import { HoursTable } from "../components/HoursTable";
import { pageHead, site } from "../site";

export const Route = createFileRoute("/book")({
	head: () =>
		pageHead(
			`Book — ${site.name}`,
			"Book dog or cat grooming in Louth. Send an enquiry and we will ring you back, or call 01507 606863. Nervous dogs welcome.",
		),
	component: Book,
});

function Book() {
	return (
		<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
			<h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
				Book
			</h1>
			<p className="mt-4 max-w-2xl text-lg leading-relaxed">
				The fastest way to book is to ring.
			</p>
			<p className="mt-6">
				<a
					href={`tel:${site.phoneTel}`}
					className="font-display text-3xl font-semibold tracking-tight text-ink underline decoration-sage decoration-4 underline-offset-8 sm:text-4xl"
				>
					{site.phoneDisplay}
				</a>
			</p>
			<p className="mt-6 max-w-prose leading-relaxed text-muted">
				If you cannot ring now, send an enquiry. This is an enquiry, not a
				confirmed appointment. We will ring you back to agree a time.
			</p>

			<div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
				<EnquiryForm />
				<aside>
					<HoursTable compact />
					<p className="mt-8 text-sm leading-relaxed text-muted">
						{site.address.full}
					</p>
				</aside>
			</div>
		</div>
	);
}
