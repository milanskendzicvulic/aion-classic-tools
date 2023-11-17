import { schedule } from "./constants";

function scheduleDays(): string[] {
	return Object.keys(schedule);
}

function scheduleHours(): string[] {
	const hours = new Set<string>();

	for (const day in schedule) {
		for (const hour in schedule[day]) {
			hours.add(hour);
		}
	}

	// not sorted because 00:00 and 01:00 should appear after 23:00
	return Array.from(hours);
}

function scheduleEvents(day: string, hour: string): string[] {
	return schedule[day][hour];
}

export { scheduleDays, scheduleHours, scheduleEvents };
