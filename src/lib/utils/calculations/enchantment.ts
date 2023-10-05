type ItemRarity = {
	enchantmentRateModifier: number;
	socketingRate: number;
};

const itemRarities: Record<string, ItemRarity> = {
	eternal: { enchantmentRateModifier: 1.5, socketingRate: 60 },
	fabled: { enchantmentRateModifier: 2, socketingRate: 70 },
	heroic: { enchantmentRateModifier: 3, socketingRate: 80 },
	superior: { enchantmentRateModifier: 4, socketingRate: 90 }
};

type EnchantmentInfo = {
	enchantmentStone: number;
	enchantmentSuccessChance: number;
};

// TODO: add options for sorting
function enchantmentInfo(
	itemRarity: string,
	itemLv: number,
	enchantmentLv: number
): EnchantmentInfo[] {
	const result: EnchantmentInfo[] = [];

	const rarity = itemRarities[itemRarity];

	// TODO: do a better check, this seems hacky
	if (!rarity || isNaN(itemLv) || isNaN(enchantmentLv)) {
		return result;
	}

	let enchantmentRateModifier = rarity.enchantmentRateModifier;
	let maxEnchantmentSuccessChance = 80;

	// if the enchantment level is 10 or above, we will half the enchantmentRateModifier
	// this is done according to the formula
	if (enchantmentLv >= 10) {
		enchantmentRateModifier /= 2;
		maxEnchantmentSuccessChance = 50;
	}

	// enchantmentStone has a value of the enchantment stone level needed to have a 0% success chance when enchanting
	// this value can be negative,
	// ie. a level 1 stone will provide a 10% success chance (hypothetically, the values are made up)
	let enchantmentStone =
		(-10 * enchantmentRateModifier + itemLv * enchantmentRateModifier) /
		enchantmentRateModifier;

	let enchantmentSuccessChance = 0;

	while (enchantmentSuccessChance < maxEnchantmentSuccessChance) {
		// only positive enchantment stones should be added
		if (enchantmentStone >= 1) {
			result.push({
				enchantmentStone: enchantmentStone,
				enchantmentSuccessChance: enchantmentSuccessChance
			});
		}

		enchantmentStone += 1;
		enchantmentSuccessChance += enchantmentRateModifier;
	}

	// since the while loop wont add the final stone due to the success chance cap it will be added here
	// using maxEnchantmentSuccessChance to remove the need to calculate
	result.push({
		enchantmentStone: enchantmentStone,
		enchantmentSuccessChance: maxEnchantmentSuccessChance
	});

	return result;
}
// const stoneCount = Math.ceil(maxEnchantmentSuccessChance / enchantmentRateModifier) + 1;

// const firstStone = (-10 * enchantmentRateModifier + itemLv * enchantmentRateModifier) / enchantmentRateModifier;

// for (let i = 0; i < stoneCount; i++) {
// 	const enchantmentStone = firstStone + i;

// 	if (enchantmentStone > 0) {
// 		let enchantmentSuccessChance = enchantmentRateModifier * i;

// 		enchantmentSuccessChance = Math.min(enchantmentSuccessChance, maxEnchantmentSuccessChance);

// 		result.push({
// 			enchantmentStone: enchantmentStone,
// 			enchantmentSuccessChance: enchantmentSuccessChance
// 		});
// 	}
// }

export { enchantmentInfo };
export type { EnchantmentInfo };
