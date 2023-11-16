import type { ItemRarity } from "./types";

const itemRarities: Record<string, ItemRarity> = {
	eternal: { enchantmentRateModifier: 1.5, socketingRate: 60 },
	fabled: { enchantmentRateModifier: 2, socketingRate: 70 },
	heroic: { enchantmentRateModifier: 3, socketingRate: 80 },
	superior: { enchantmentRateModifier: 4, socketingRate: 90 }
};

export { itemRarities };
