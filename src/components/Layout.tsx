import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileBar } from "./MobileBar";

export function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col bg-paper pb-24 text-ink md:pb-0">
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-card focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
			>
				Skip to content
			</a>
			<Header />
			<main id="main" className="flex-1">
				{children}
			</main>
			<Footer />
			<MobileBar />
		</div>
	);
}
