import { createFileRoute } from "@tanstack/react-router";
import { HoursTable } from "../components/HoursTable";
import { PhotoSpot } from "../components/PhotoSpot";
import { pageHead, site } from "../site";

export const Route = createFileRoute("/find-us")({
	head: () =>
		pageHead(
			`Find us — ${site.name}`,
			"Dog grooming Louth at 180 Eastgate, a few minutes from the Market Place. Open Monday to Saturday, 9am to 3pm. Call 01507 606863.",
		),
	component: FindUs,
});

function FindUs() {
	return (
		<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
			<h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
				Find us
			</h1>
			<p className="mt-4 max-w-2xl text-lg leading-relaxed">
				{site.address.full}. On Eastgate, Louth&apos;s main independent
				shopping street, a few minutes from the Market Place.
			</p>

			<div className="mt-8 overflow-hidden rounded-card border border-line bg-card">
				<iframe
					title="Map of Bella's Dog Grooming & Pet Food at 180 Eastgate, Louth"
					src={site.mapsEmbed}
					className="h-72 w-full bg-card md:h-96"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</div>
			<p className="mt-3 text-sm text-muted">
				<a
					href={site.mapsDirections}
					rel="noopener noreferrer"
					target="_blank"
					className="underline decoration-line underline-offset-4 hover:decoration-ink"
				>
					Open a larger map of 180 Eastgate, Louth
				</a>
			</p>

			<div className="mt-10 grid gap-10 md:grid-cols-2">
				<div>
					<h2 className="font-display text-2xl font-semibold tracking-tight">
						From the Market Place
					</h2>
					<p className="mt-4 max-w-prose leading-relaxed">
						Walk from the Market Place along Eastgate. Stay on Eastgate. You
						will find us at number 180, a few minutes from the square.
					</p>
					<div className="mt-6 grid max-w-md grid-cols-1 gap-3 sm:grid-cols-2 [&>a]:w-full">
						<a
							href={site.mapsDirections}
							rel="noopener noreferrer"
							target="_blank"
							className="btn btn-secondary w-full"
						>
							Tap for directions
						</a>
						<a
							href={`tel:${site.phoneTel}`}
							className="btn btn-primary w-full"
						>
							Call {site.phoneDisplay}
						</a>
					</div>
				</div>
				<HoursTable />
			</div>

			<div className="mt-12 max-w-xl">
				<PhotoSpot
					ratio="aspect-[16/9]"
					alt="Placeholder for a photograph of the Eastgate frontage of Bella's Dog Grooming & Pet Food at 180 Eastgate, Louth."
					shoot="The Eastgate frontage of the shop. Number 180 readable. Taken from the pavement in daylight. The street, not a studio set."
				/>
			</div>
		</div>
	);
}
