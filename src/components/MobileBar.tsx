import { site } from "../site";

export function MobileBar() {
	return (
		<div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper pb-[env(safe-area-inset-bottom)] md:hidden">
			<div className="grid grid-cols-2 gap-2 px-3 py-2">
				<a
					href={`tel:${site.phoneTel}`}
					className="btn btn-primary text-sm"
				>
					Call {site.phoneDisplay}
				</a>
				<a
					href={site.mapsDirections}
					rel="noopener noreferrer"
					target="_blank"
					className="btn btn-secondary text-sm"
				>
					Directions
				</a>
			</div>
		</div>
	);
}
