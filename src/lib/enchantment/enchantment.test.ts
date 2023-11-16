import { test, expect } from "vitest";
import { enchantmentInfo } from "./enchantment";
import type { EnchantmentInfo } from "./types";

// TODO(#6): add more tests


test("calculateEnchantmentInfo should have only positive enchantment stone levels", () => {
	const expected: EnchantmentInfo[] = [
		{ enchantmentStone: 1, enchantmentSuccessChance: 15 },
		{ enchantmentStone: 2, enchantmentSuccessChance: 16.5 },
		{ enchantmentStone: 3, enchantmentSuccessChance: 18 },
		{ enchantmentStone: 4, enchantmentSuccessChance: 19.5 },
		{ enchantmentStone: 5, enchantmentSuccessChance: 20 }
	];

	// const result = calculateEnchantmentInfo("eternal", 1, 0);
	const result = enchantmentInfo("eternal", 1, 0, { maxEnchantmentSuccessChance0: 20 });

	expect(result).toEqual(expected);
});

test("calculateEnchantmentInfo should start with 0 success chance when stone level is not negative, and should stop at 30%", () => {
	const expected: EnchantmentInfo[] = [
		{ enchantmentStone: 45, enchantmentSuccessChance: 0 },
		{ enchantmentStone: 46, enchantmentSuccessChance: 1.5 },
		{ enchantmentStone: 47, enchantmentSuccessChance: 3 },
		{ enchantmentStone: 48, enchantmentSuccessChance: 4.5 },
		{ enchantmentStone: 49, enchantmentSuccessChance: 6 },
		{ enchantmentStone: 50, enchantmentSuccessChance: 7.5 },
		{ enchantmentStone: 51, enchantmentSuccessChance: 9 },
		{ enchantmentStone: 52, enchantmentSuccessChance: 10.5 },
		{ enchantmentStone: 53, enchantmentSuccessChance: 12 },
		{ enchantmentStone: 54, enchantmentSuccessChance: 13.5 },
		{ enchantmentStone: 55, enchantmentSuccessChance: 15 },
		{ enchantmentStone: 56, enchantmentSuccessChance: 16.5 },
		{ enchantmentStone: 57, enchantmentSuccessChance: 18 },
		{ enchantmentStone: 58, enchantmentSuccessChance: 19.5 },
		{ enchantmentStone: 59, enchantmentSuccessChance: 21 },
		{ enchantmentStone: 60, enchantmentSuccessChance: 22.5 },
		{ enchantmentStone: 61, enchantmentSuccessChance: 24 },
		{ enchantmentStone: 62, enchantmentSuccessChance: 25.5 },
		{ enchantmentStone: 63, enchantmentSuccessChance: 27 },
		{ enchantmentStone: 64, enchantmentSuccessChance: 28.5 },
		{ enchantmentStone: 65, enchantmentSuccessChance: 30 }
	];

	// const result = calculateEnchantmentInfo("eternal", 55, 0);
	const result = enchantmentInfo("eternal", 55, 0, {
		maxEnchantmentSuccessChance0: 30
	});

	expect(result).toEqual(expected);
});

test("calculateEnchantmentInfo should cap at 50% for eternal items with enchantment levels 10 and above", () => {
	const expected: EnchantmentInfo[] = [
		{ enchantmentStone: 45, enchantmentSuccessChance: 0 },
		{ enchantmentStone: 46, enchantmentSuccessChance: 0.75 },
		{ enchantmentStone: 47, enchantmentSuccessChance: 1.5 },
		{ enchantmentStone: 48, enchantmentSuccessChance: 2.25 },
		{ enchantmentStone: 49, enchantmentSuccessChance: 3 },
		{ enchantmentStone: 50, enchantmentSuccessChance: 3.75 },
		{ enchantmentStone: 51, enchantmentSuccessChance: 4.5 },
		{ enchantmentStone: 52, enchantmentSuccessChance: 5.25 },
		{ enchantmentStone: 53, enchantmentSuccessChance: 6 },
		{ enchantmentStone: 54, enchantmentSuccessChance: 6.75 },
		{ enchantmentStone: 55, enchantmentSuccessChance: 7.5 },
		{ enchantmentStone: 56, enchantmentSuccessChance: 8.25 },
		{ enchantmentStone: 57, enchantmentSuccessChance: 9 },
		{ enchantmentStone: 58, enchantmentSuccessChance: 9.75 },
		{ enchantmentStone: 59, enchantmentSuccessChance: 10.5 },
		{ enchantmentStone: 60, enchantmentSuccessChance: 11.25 },
		{ enchantmentStone: 61, enchantmentSuccessChance: 12 },
		{ enchantmentStone: 62, enchantmentSuccessChance: 12.75 },
		{ enchantmentStone: 63, enchantmentSuccessChance: 13.5 },
		{ enchantmentStone: 64, enchantmentSuccessChance: 14.25 },
		{ enchantmentStone: 65, enchantmentSuccessChance: 15 }
	];
	const result = enchantmentInfo("eternal", 55, 11, {
		maxEnchantmentSuccessChance10: 15
	});

	expect(result).toEqual(expected);
});

