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

interface CalculateEnchantmentInfoOptions {
	maxEnchantmentSuccessChance0?: number;
	maxEnchantmentSuccessChance10?: number;
	order?: "asc" | "desc";
}

type EnchantmentInfo = {
	enchantmentStone: number;
	enchantmentSuccessChance: number;
};

function calculateEnchantmentInfo(
	itemRarity: string,
	itemLv: number,
	enchantmentLv: number,
	{
		maxEnchantmentSuccessChance0 = 80,
		maxEnchantmentSuccessChance10 = 50,
		order = "asc"
	}: CalculateEnchantmentInfoOptions = {}
): EnchantmentInfo[] {
	const result: EnchantmentInfo[] = [];

	const rarity = itemRarities[itemRarity];

	// TODO: do a better check, this seems hacky
	if (!rarity || isNaN(itemLv) || isNaN(enchantmentLv)) {
		return result;
	}

	let enchantmentRateModifier = rarity.enchantmentRateModifier;
	let maxEnchantmentSuccessChance = maxEnchantmentSuccessChance0;

	// if the enchantment level is 10 or above, we will half the enchantmentRateModifier
	// this is done according to the formula
	if (enchantmentLv >= 10) {
		enchantmentRateModifier /= 2;
		maxEnchantmentSuccessChance = maxEnchantmentSuccessChance10;
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

	// since the array is already in a descecnding order we can just reverse it to get an ascending order
	if (order === "desc") {
		result.reverse();
	}

	console.log(result);

	return result;
}

export { calculateEnchantmentInfo };
export type { EnchantmentInfo };