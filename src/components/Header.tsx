import { Link, useRouterState } from "@tanstack/react-router";
import { site } from "../site";

const nav = [
	{ to: "/", label: "Home" },
	{ to: "/grooming", label: "Grooming" },
	{ to: "/shop", label: "The shop" },
	{ to: "/find-us", label: "Find us" },
	{ to: "/book", label: "Book" },
] as const;

export function Header() {
	const pathname = useRouterState({
		select: (state) => state.location.pathname,
	});

	return (
		<header className="border-b border-line bg-paper">
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
				<Link
					to="/"
					className="min-w-0 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl"
				>
					<span className="block leading-tight">Bella&apos;s</span>
					<span className="block text-xs font-medium tracking-wide text-muted uppercase">
						Dog Grooming &amp; Pet Food
					</span>
				</Link>

				<nav
					aria-label="Primary"
					className="hidden items-center gap-6 text-sm md:flex"
				>
					{nav.map((item) => {
						const active = pathname === item.to;
						return (
							<Link
								key={item.to}
								to={item.to}
								aria-current={active ? "page" : undefined}
								className={
									active
										? "font-semibold text-ink"
										: "text-muted hover:text-ink"
								}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>

				<a
					href={`tel:${site.phoneTel}`}
					className="btn btn-primary hidden shrink-0 text-sm md:inline-flex"
				>
					Call {site.phoneDisplay}
				</a>

				<details className="relative md:hidden">
					<summary className="flex min-h-12 min-w-12 cursor-pointer list-none items-center justify-center rounded-card border border-line bg-card text-sm font-semibold">
						<span className="sr-only">Open menu</span>
						<span aria-hidden>Menu</span>
					</summary>
					<nav
						aria-label="Primary"
						className="absolute right-0 z-40 mt-2 w-52 rounded-card border border-line bg-paper p-2 shadow-sm"
					>
						{nav.map((item) => {
							const active = pathname === item.to;
							return (
								<Link
									key={item.to}
									to={item.to}
									aria-current={active ? "page" : undefined}
									className={`block rounded-xl px-3 py-3 text-sm ${
										active ? "bg-card font-semibold" : "hover:bg-card"
									}`}
								>
									{item.label}
								</Link>
							);
						})}
					</nav>
				</details>
			</div>
		</header>
	);
}
