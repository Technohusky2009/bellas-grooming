import { Link } from "@tanstack/react-router";
import { site } from "../site";
import { HoursTable } from "./HoursTable";

export function Footer() {
	return (
		<footer className="border-t border-line bg-card">
			<div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
				<div>
					<p className="font-display text-lg font-semibold">{site.name}</p>
					<p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
						{site.footerLine}
					</p>
					<address className="mt-4 text-sm not-italic leading-relaxed">
						{site.address.line1}
						<br />
						{site.address.town}
						<br />
						{site.address.postcode}
					</address>
					<p className="mt-4">
						<a
							href={`tel:${site.phoneTel}`}
							className="text-base font-semibold underline decoration-sage underline-offset-4"
						>
							{site.phoneDisplay}
						</a>
					</p>
					<p className="mt-3 text-sm">
						<a
							href={site.facebookUrl}
							rel="noopener noreferrer"
							target="_blank"
							className="underline decoration-line underline-offset-4 hover:decoration-ink"
						>
							{site.facebookLabel}
						</a>
					</p>
				</div>

				<HoursTable compact />

				<nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
					<Link to="/" className="hover:underline">
						Home
					</Link>
					<Link to="/grooming" className="hover:underline">
						Grooming
					</Link>
					<Link to="/shop" className="hover:underline">
						The shop
					</Link>
					<Link to="/find-us" className="hover:underline">
						Find us
					</Link>
					<Link to="/book" className="hover:underline">
						Book
					</Link>
				</nav>
			</div>
		</footer>
	);
}
