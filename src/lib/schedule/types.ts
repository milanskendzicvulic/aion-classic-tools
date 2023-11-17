interface EventSchedule {
	[day: string]: {
		[time: string]: string[];
	};
}

export type { EventSchedule };
