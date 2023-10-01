type ItemRarity = {
	enchantingRateModifier: number;
	socketingRate: number;
};

const itemRarities: Record<string, ItemRarity> = {
	eternal: { enchantingRateModifier: 1.5, socketingRate: 60 },
	fabled: { enchantingRateModifier: 2, socketingRate: 70 },
	heroic: { enchantingRateModifier: 3, socketingRate: 80 },
	superior: { enchantingRateModifier: 4, socketingRate: 90 }
};

type EnchantmentInfo = {
	enchantmentStone: number;
	enchantmentSuccessChance: number;
};

// TODO: document the thing
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

	let modifier = rarity.enchantingRateModifier;
	let maxEnchantRate = 80;

	if (enchantmentLv >= 10) {
		modifier = modifier / 2;
		maxEnchantRate = 50;
	}
	const stoneCount = Math.ceil(maxEnchantRate / modifier) + 1;

	const firstStone = (-10 * modifier + itemLv * modifier) / modifier;

	for (let i = 0; i < stoneCount; i++) {
		const enchantmentStone = firstStone + i;
		let enchantmentSuccessChance = modifier * i;

		enchantmentSuccessChance = Math.min(enchantmentSuccessChance, maxEnchantRate);

		result.push({
			enchantmentStone: enchantmentStone,
			enchantmentSuccessChance: enchantmentSuccessChance
		});
	}

	return result;
}

export { enchantmentInfo };
