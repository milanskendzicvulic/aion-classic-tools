<script lang="ts">
	import { enchantmentInfo } from "$lib/enchantment";

	// max item level to be displayed in the html select
	const MAX_ITEM_LEVEL: number = 55;

	// max item enchantment level to be displayed in the html select
	// TODO(#4): Different levels for different rarities
	const MAX_ITEM_ENCH_LEVEL: number = 15;

	// Is used to display item levels in the select, in descending order.
	// ie. 20, 19, 18, 17,...0
	const itemLvs = Array.from({ length: MAX_ITEM_LEVEL }, (_, i) => MAX_ITEM_LEVEL - i);

	// Is used to display item enchantment levels in the select, in descending order.
	// ie. 14, 13, 12,...0
	// NOTE: min level should be 0, and max level should be max level of possible enchantment lowered by 1
	const itemEnchLvs = Array.from(
		{ length: MAX_ITEM_ENCH_LEVEL },
		(_, i) => MAX_ITEM_ENCH_LEVEL - i - 1
	);

	let selectedItemRarity = "";
	let selectedItemLv: string = "";
	let selectedEnchLv: string = "";

	// TODO: better way to do parsing
	$: results = enchantmentInfo(
		selectedItemRarity,
		parseInt(selectedItemLv),
		parseInt(selectedEnchLv),
		{
			order: "desc"
		}
	);
</script>

<div class="filter">
	<select bind:value={selectedItemRarity}>
		<option value="" selected disabled>Item Rarity</option>
		<option class="text-orange-500" value="eternal">Eternal</option>
		<option class="text-amber-400" value="fabled">Fabled</option>
		<option class="text-blue-500" value="heroic">Heroic</option>
		<option class="text-green-500" value="superior">Superior</option>
	</select>
	<select bind:value={selectedItemLv}>
		<option value="" selected disabled>Item Lv</option>
		{#each itemLvs as itemLv (itemLv)}
			<option value={itemLv}>{itemLv}</option>
		{/each}
	</select>
	<select bind:value={selectedEnchLv}>
		<option value="" selected disabled>Enchantment Lv</option>
		{#each itemEnchLvs as itemEnchLv (itemEnchLv)}
			<option value={itemEnchLv}>{itemEnchLv}</option>
		{/each}
	</select>
</div>
<div class="table-wrapper">
	<table>
		<thead>
			<tr>
				<th>Enchantment Stone</th>
				<th>Enchantment Success Chance</th>
			</tr>
		</thead>
		<tbody>
			{#if results.length > 1}
				{#each results as result (result)}
					<tr>
						<td>L{result.enchantmentStone}</td>
						<td>{result.enchantmentSuccessChance}%</td>
					</tr>
				{/each}
			{:else}
				<tr>
					<td colspan="2">No data</td>
				</tr>
			{/if}
		</tbody>
	</table>
</div>

<style lang="scss">
	.filter {
		@apply flex flex-col sm:flex-row items-center justify-center gap-2;
	}

	.filter select {
		@apply p-2 w-full;
	}

	.table-wrapper {
		@apply overflow-y-auto mt-4 max-h-[70vh];
	}

	table {
		@apply border-collapse w-full;
	}

	thead {
		@apply sticky top-0;
	}

	td,
	th {
		@apply p-2 text-left;
	}

	th {
		@apply text-neutral-50 bg-neutral-900;
	}

	td[colspan="2"] {
		@apply text-center;
	}

	tr:nth-child(even) {
		@apply bg-neutral-300;
	}

	tr:nth-child(odd) {
		@apply bg-neutral-200;
	}
</style>
