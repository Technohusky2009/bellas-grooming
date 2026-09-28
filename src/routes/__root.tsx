import type { ReactNode } from "react";
import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRoute,
} from "@tanstack/react-router";
import { Layout } from "../components/Layout";
import { jsonLd, site } from "../site";
import appCss from "../styles.css?url";

const fontStylesheet =
	"https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700&family=Outfit:wght@500;600;700&display=swap";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ title: site.seoTitle },
			{ name: "description", content: site.seoDescription },
			{ name: "color-scheme", content: "light only" },
			{ name: "theme-color", content: "#2F4A3C" },
			{ property: "og:title", content: site.seoTitle },
			{ property: "og:description", content: site.seoDescription },
			{ name: "twitter:card", content: "summary" },
		],
		links: [
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{ rel: "stylesheet", href: fontStylesheet },
			{ rel: "stylesheet", href: appCss },
		],
	}),
	component: RootLayout,
	shellComponent: RootDocument,
	notFoundComponent: NotFound,
});

function RootLayout() {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
}

function RootDocument({ children }: { children: ReactNode }) {
	return (
		<html lang="en-GB">
			<head>
				<HeadContent />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}

function NotFound() {
	return (
		<div className="mx-auto max-w-xl px-4 py-20 sm:px-6">
			<h1 className="font-display text-4xl font-semibold tracking-tight">
				That page is not here
			</h1>
			<p className="mt-4 text-lg leading-relaxed text-muted">
				Try the menu, or ring us if you were looking for an appointment.
			</p>
			<a
				href={`tel:${site.phoneTel}`}
				className="btn btn-primary mt-8"
			>
				Call {site.phoneDisplay}
			</a>
		</div>
	);
}
