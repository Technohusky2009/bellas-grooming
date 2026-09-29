export function PhotoSpot({
  shoot,
  alt,
  src,
  ratio = "aspect-[4/3]",
  flushTop = false,
}: {
  shoot?: string;
  alt: string;
  src?: string;
  ratio?: string;
  flushTop?: boolean;
}) {
  return (
    <figure>
      <div
        className={`${ratio} overflow-hidden bg-sage/20 ${
          flushTop ? "" : "rounded-card border border-line"
        }`}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full flex-col justify-end p-5 sm:p-6">
            <p className="text-xs font-semibold tracking-wide text-ink/70 uppercase">
              Photo coming soon
            </p>
          </div>
        )}
      </div>
    </figure>
  );
}
