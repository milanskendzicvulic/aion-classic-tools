import { schedule } from "./constants";

function scheduleDays(): string[] {
	return Object.keys(schedule);
}

export { scheduleDays };
