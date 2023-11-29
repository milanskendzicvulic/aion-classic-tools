import { test, expect } from "vitest";
import { internalClientTime } from "./schedule";
// TODO: Add tests for internalClientTime

const testCases = [
	{ inputTime: "12:00", timeOffset: -180, expected: "15:00" },
	{ inputTime: "12:00", timeOffset: -60, expected: "13:00" },
	{ inputTime: "12:00", timeOffset: 0, expected: "12:00" },
	{ inputTime: "12:00", timeOffset: 60, expected: "11:00" },
	{ inputTime: "12:00", timeOffset: 180, expected: "9:00" }
];

test.each(testCases)(
	"internalClientTime should return the expected local time for input time %s and offset %d",
	({ inputTime, timeOffset, expected }) => {
		const result = internalClientTime(inputTime, timeOffset);

		expect(result).toEqual(expected);
	}
);
