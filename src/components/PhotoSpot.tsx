export function PhotoSpot({
	shoot,
	alt,
	ratio = "aspect-[4/3]",
	flushTop = false,
}: {
	shoot: string;
	alt: string;
	ratio?: string;
	flushTop?: boolean;
}) {
	return (
		<figure>
			<div
				className={`${ratio} flex flex-col justify-end bg-sage/35 p-5 sm:p-6 ${
					flushTop ? "" : "rounded-card border border-line"
				}`}
				role="img"
				aria-label={alt}
			>
				<p className="text-xs font-semibold tracking-wide text-ink/70 uppercase">
					Photograph to take
				</p>
				<p className="mt-2 max-w-md text-sm leading-relaxed text-pretty text-ink">
					{shoot}
				</p>
			</div>
		</figure>
	);
}
