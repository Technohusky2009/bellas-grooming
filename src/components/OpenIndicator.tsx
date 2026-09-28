import { isOpenNow } from "../lib/hours";

export function OpenIndicator({ className = "" }: { className?: string }) {
	const open = isOpenNow();

	return (
		<span
			className={`inline-flex items-center gap-2 ${className}`}
			suppressHydrationWarning
		>
			<span
				className={`size-2.5 shrink-0 rounded-full ${open ? "bg-ink" : "bg-muted/50"}`}
				aria-hidden
			/>
			{open ? "Open now" : "Closed now"}
		</span>
	);
}
