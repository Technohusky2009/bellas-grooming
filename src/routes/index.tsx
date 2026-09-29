import { Link, createFileRoute } from "@tanstack/react-router";
import { PhotoSpot } from "../components/PhotoSpot";
import { pageHead, site } from "../site";

export const Route = createFileRoute("/")({
	head: () => pageHead(site.seoTitle, site.seoDescription),
	component: Home,
});

function Home() {
	return (
		<>
			<div className="sticky top-0 z-30 bg-ink text-paper">
				<p className="mx-auto max-w-6xl px-4 py-2.5 text-center text-sm leading-snug sm:px-6">
					Taking bookings — call{" "}
					<a
						href={`tel:${site.phoneTel}`}
						className="font-semibold underline decoration-sage underline-offset-2"
					>
						{site.phoneDisplay}
					</a>
					. Open Monday to Saturday, 9am to 3pm.
				</p>
			</div>

			<section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 md:grid-cols-2 md:gap-14 md:py-16">
				<div>
					<h1 className="font-display text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
						{site.tagline}
					</h1>
					<p className="mt-5 max-w-md text-lg leading-relaxed text-pretty text-muted">
						A small grooming salon and pet food shop on Eastgate. Open Monday
						to Saturday, 9am until 3pm.
					</p>
					<div className="mt-8 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-2 [&>a]:w-full">
						<a href={`tel:${site.phoneTel}`} className="btn btn-primary w-full">
							Call {site.phoneDisplay}
						</a>
						<Link to="/grooming" className="btn btn-secondary w-full">
							What we do
						</Link>
					</div>
				</div>
				<PhotoSpot
					ratio="aspect-square"
					src="/images/bellas-dog-grooming-puppy.jpg"
					alt="Happy dog after grooming at Bella's Dog Grooming."
				/>
			</section>

			<section className="bg-sage/40">
				<div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-baseline md:gap-10">
					<p className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
						4.8
					</p>
					<ul className="grid gap-3 text-sm leading-relaxed sm:text-base md:grid-cols-3 md:gap-8">
						{site.trust.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
				<h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
					Nervous dogs, and cats too
				</h2>
				<ul className="mt-8 divide-y divide-line border-y border-line">
					<li className="grid gap-2 py-6 md:grid-cols-[minmax(12rem,18rem)_1fr] md:gap-10">
						<h3 className="font-semibold">Nervous and anxious dogs welcome</h3>
						<p className="max-w-prose leading-relaxed text-muted">
							If your dog is worried, elderly, or has been turned away
							elsewhere, tell us. That is the sort of appointment we are good
							at. We go slowly, and we do not mind if it takes a little longer.
						</p>
					</li>
					<li className="grid gap-2 py-6 md:grid-cols-[minmax(12rem,18rem)_1fr] md:gap-10">
						<h3 className="font-semibold">Short-notice appointments where we can</h3>
						<p className="max-w-prose leading-relaxed text-muted">
							Ring us on {site.phoneDisplay}. If we have a gap, we will say so.
							We would rather fit you in than leave you guessing.
						</p>
					</li>
					<li className="grid gap-2 py-6 md:grid-cols-[minmax(12rem,18rem)_1fr] md:gap-10">
						<h3 className="font-semibold">Puppies welcome for gentle first grooms</h3>
						<p className="max-w-prose leading-relaxed text-muted">
							Cat grooming in Louth, in the same small salon. If your cat has
							never been groomed before, say so when you book.
						</p>
					</li>
				</ul>
			</section>

			<section className="bg-card">
				<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
					<p className="max-w-prose text-lg leading-relaxed text-pretty">
						We keep to appointment times, so you are not left waiting in the
						car park. If your animal finds it hard, we are patient with them.
						That is how a nervous dog groomer in Louth ought to work: slowly,
						and without fuss.
					</p>
				</div>
			</section>

			<section className="bg-ink text-paper">
				<div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between md:py-20">
					<div className="max-w-xl">
						<h2 className="font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
							Would you like us to ring you back?
						</h2>
						<p className="mt-4 text-paper/80">
							Send a short enquiry and we will call you to agree a time. Or
							ring us now if that is easier.
						</p>
					</div>
					<div className="grid w-full max-w-md grid-cols-1 gap-3 sm:grid-cols-2 [&>a]:w-full">
						<Link to="/book" className="btn btn-primary">
							Send an enquiry
						</Link>
						<a href={`tel:${site.phoneTel}`} className="btn btn-outline border-paper/40 bg-transparent text-paper">
							Call {site.phoneDisplay}
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
