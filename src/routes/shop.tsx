import { Link, createFileRoute } from "@tanstack/react-router";
import { PhotoSpot } from "../components/PhotoSpot";
import { pageHead, site } from "../site";

export const Route = createFileRoute("/shop")({
	head: () =>
		pageHead(
			`The shop — ${site.name}`,
			"Pet food shop in Louth at 180 Eastgate. Pet food and pet supplies. If we do not have what you need, ask and we will try to get it.",
		),
	component: Shop,
});

function Shop() {
	return (
		<div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-14 md:py-16">
			<div>
				<h1 className="font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
					The shop
				</h1>
				<p className="mt-6 max-w-prose text-lg leading-relaxed text-pretty">
					Pet food and pet supplies in the shop at 180 Eastgate. If we do not
					have what you need, ask and we will try to get it.
				</p>
				<p className="mt-6 max-w-prose leading-relaxed text-muted">
					We are a small grooming salon and pet food shop in Louth, on
					Eastgate, a few minutes from the Market Place. Come in while you are
					on the street, or ring first if you want to check we are open.
				</p>
				<div className="mt-8 grid max-w-md grid-cols-1 gap-3 sm:grid-cols-2 [&>a]:w-full">
					<a href={`tel:${site.phoneTel}`} className="btn btn-primary w-full">
						Call {site.phoneDisplay}
					</a>
					<Link to="/find-us" className="btn btn-secondary w-full">
						Find us
					</Link>
				</div>
			</div>
			<PhotoSpot
				ratio="aspect-[4/3]"
				src="/images/pet-food-bowl.jpg"
				alt="A bowl of dog food."
				shoot="The pet food shelves inside 180 Eastgate. Straight-on, everyday stock on the shelves. No brand names pushed at the camera. Warm shop light."
			/>
		</div>
	);
}
