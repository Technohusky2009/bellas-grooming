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
        className={`${ratio} group overflow-hidden rounded-[24px] border border-line bg-sage/10 p-2 shadow-[0_14px_40px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.11)] ${
          flushTop ? "" : ""
        }`}
      >
        {src ? (
          <div className="h-full w-full overflow-hidden rounded-[18px] bg-white">
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="flex h-full flex-col justify-end rounded-[18px] bg-sage/10 p-5 sm:p-6">
            <p className="text-xs font-semibold tracking-wide text-ink/70 uppercase">
              Photo coming soon
            </p>
          </div>
        )}
      </div>
    </figure>
  );
}
