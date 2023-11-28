import { browser } from "$app/environment";

function includeClientTime(utcTime: string): string {
	if (!browser) {
		return utcTime;
	}

	const [hour, minute] = utcTime.split(":");

	const utc = new Date();
	utc.setUTCHours(parseInt(hour), 10);
	utc.setUTCMinutes(parseInt(minute), 10);

	const clientOffsetTime = new Date().getTimezoneOffset();

	const clientLocalTime = new Date(utc.getTime() - clientOffsetTime * 60000);

	let resultHour = clientLocalTime.getHours().toString();
	let resultMinute = clientLocalTime.getMinutes().toString();

	if (clientLocalTime.getHours() < 10) {
		resultHour = "0" + resultHour;
	}

	if (clientLocalTime.getMinutes() < 10) {
		resultMinute = "0" + resultMinute;
	}

	return `${resultHour}:${resultMinute}`;
}

export { includeClientTime };
