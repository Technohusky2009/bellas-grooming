const LONDON = "Europe/London";

export function isOpenNow(now = new Date()): boolean {
	const parts = new Intl.DateTimeFormat("en-GB", {
		timeZone: LONDON,
		weekday: "long",
		hour: "numeric",
		minute: "numeric",
		hourCycle: "h23",
	}).formatToParts(now);

	const weekday = parts.find((part) => part.type === "weekday")?.value;
	const hour = Number(parts.find((part) => part.type === "hour")?.value);
	const minute = Number(parts.find((part) => part.type === "minute")?.value);

	if (!weekday || Number.isNaN(hour) || Number.isNaN(minute)) return false;
	if (weekday === "Sunday") return false;

	const mins = hour * 60 + minute;
	return mins >= 9 * 60 && mins < 15 * 60;
}
