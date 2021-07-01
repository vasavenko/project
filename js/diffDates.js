import { DateTime } from "./Luxon.js";

export function diffDates (firstDate, secondDate) {
	firstDate = DateTime.fromISO(firstDate);
	secondDate = DateTime.fromISO(secondDate);

if(firstDate > secondDate)
	[firstDate, secondDate] = [secondDate, firstDate];

	return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();

}

export const diffToHTML = diff => `
	<span>
		${diff.years ? 'лет ' + diff.years : ''}	
		${diff.months ? 'месяцев ' + diff.months : ''}	
		${diff.days ? 'дней ' + diff.days : ''}	
	</span>
`