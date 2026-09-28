import { hoursRows } from "../site";
import { OpenIndicator } from "./OpenIndicator";

export function HoursTable({ compact = false }: { compact?: boolean }) {
	return (
		<div>
			<div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
				<h2
					className={
						compact
							? "text-sm font-semibold"
							: "font-display text-2xl font-semibold tracking-tight"
					}
				>
					Opening hours
				</h2>
				<OpenIndicator className="text-sm text-muted" />
			</div>
			<table className="w-full border-collapse text-left text-sm sm:text-base">
				<caption className="sr-only">
					Opening hours. Monday to Saturday 9:00am to 3:00pm. Sunday closed.
				</caption>
				<thead className="sr-only">
					<tr>
						<th scope="col">Day</th>
						<th scope="col">Hours</th>
					</tr>
				</thead>
				<tbody>
					{hoursRows.map((row) => (
						<tr key={row.day} className="border-t border-line">
							<th
								scope="row"
								className={`py-2.5 pr-4 font-medium ${compact ? "text-sm" : ""}`}
							>
								{row.day}
							</th>
							<td
								className={`py-2.5 ${row.closed ? "text-muted" : ""} ${compact ? "text-sm" : ""}`}
							>
								{row.hours}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
