import { createFileRoute } from "@tanstack/react-router";
import { PhotoSpot } from "../components/PhotoSpot";
import { pageHead, services, site } from "../site";

export const Route = createFileRoute("/grooming")({
	head: () =>
		pageHead(
			`Grooming — ${site.name}`,
			"Dog grooming in Louth, including full grooms, bath and brush, nail clipping for dogs that hate it, and cat grooming. Nervous dogs welcome. Call 01507 606863.",
		),
	component: Grooming,
});

function Grooming() {
	return (
		<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
			<h1 className="font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
				Grooming
			</h1>
			<p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty">
				Dog grooming in Louth, and cat grooming too. If your dog is nervous,
				anxious, elderly or has been turned away elsewhere, tell us. That is
				the sort of appointment we are good at.
			</p>

			<div className="mt-12 grid gap-6 sm:grid-cols-2">
				{services.map((service) => (
					<article
						key={service.slug}
						className="overflow-hidden rounded-card border border-line bg-card"
					>
						<PhotoSpot flushTop shoot={service.shoot} alt={service.alt} />
						<div className="p-5 sm:p-6">
							<h2 className="font-display text-2xl font-semibold tracking-tight">
								{service.title}
							</h2>
							<p className="mt-2 leading-relaxed">{service.line}</p>
							{"note" in service && service.note ? (
								<p className="mt-4 leading-relaxed text-muted">{service.note}</p>
							) : null}
						</div>
					</article>
				))}
			</div>

			<p className="mt-10 max-w-2xl text-lg leading-relaxed">
				Every dog is different, so we would rather talk it through than quote
				blind. Ring{" "}
				<a
					href={`tel:${site.phoneTel}`}
					className="font-semibold underline decoration-sage underline-offset-4"
				>
					{site.phoneDisplay}
				</a>
				.
			</p>
			<p className="mt-4 max-w-2xl leading-relaxed text-muted">
				Pet food and pet supplies are available in the shop.
			</p>

			<section className="mt-14 max-w-2xl rounded-card bg-sage/35 p-6 sm:p-8">
				<h2 className="font-display text-2xl font-semibold tracking-tight">
					Before your appointment
				</h2>
				<p className="mt-4 leading-relaxed">
					Brush your dog out beforehand if you can, and tell us anything that
					has changed — a new lump, a bad hip, a recent operation. It changes
					how we handle them.
				</p>
			</section>

			<section className="mt-10 max-w-2xl">
				<h2 className="font-display text-2xl font-semibold tracking-tight">
					Prices
				</h2>
				<p className="mt-4 leading-relaxed">
					Prices depend on the breed, the coat and the condition. Ring us and
					we will give you a straight answer.
				</p>
				<a href={`tel:${site.phoneTel}`} className="btn btn-primary mt-6">
					Call {site.phoneDisplay}
				</a>
			</section>
		</div>
	);
}
