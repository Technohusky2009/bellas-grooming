export function PhotoSpot({
  shoot,
  alt,
  src,
  ratio = "aspect-[4/3]",
  position = "object-center",
}: {
  shoot?: string;
  alt: string;
  src?: string;
  ratio?: string;
  position?: string;
}) {
  return (
    <figure>
      <div
        className={`${ratio} group overflow-hidden rounded-[22px] bg-sage/10`}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className={`h-full w-full object-cover ${position} transition-transform duration-500 group-hover:scale-[1.02]`}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-sage/10">
            <p className="text-xs font-semibold tracking-wide text-ink/50 uppercase">
              Photo coming soon
            </p>
          </div>
        )}
      </div>
    </figure>
  );
}
