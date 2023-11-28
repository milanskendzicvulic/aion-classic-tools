import { test, expect } from "vitest";
import { includeClientTime } from "./utils";


test("includeClientTime should prepend '0' if the hour is a single digit", () => {
    const expected = "09:00";
    const result = includeClientTime("")

	expect(result).toEqual(expected);
});
