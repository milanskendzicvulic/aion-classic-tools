// TODO: document

import { Duration } from "$lib/time";

function clientTime(utcTime: string): string {
	const clientOffsetTime = new Date().getTimezoneOffset();

	// if the clients time zone is the same as UTC
	if (clientOffsetTime == 0) {
		return utcTime;
	} else {
		return internalClientTime(utcTime, clientOffsetTime);
	}
}

function internalClientTime(utcTime: string, clientOffsetTime: number): string {
	const [hour, minute] = utcTime.split(":");

	const utc = new Date(2000, 0, 1, parseInt(hour), parseInt(minute));

	console.log(utc);

	const clientLocalTime = new Date(utc.getTime() - clientOffsetTime * Duration.Minute);

	const resultHour = clientLocalTime.getHours().toString();
	let resultMinute = clientLocalTime.getMinutes().toString();

	// if (clientLocalTime.getHours() < 10) {
	// 	resultHour = "0" + resultHour;
	// }

	// prepend a '0' if the minute is a single digit
	if (clientLocalTime.getMinutes() < 10) {
		resultMinute = "0" + resultMinute;
	}

	return `${resultHour}:${resultMinute}`;
}

export { clientTime, internalClientTime };
