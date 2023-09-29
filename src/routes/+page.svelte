<script lang="ts">
	// max item level to be displayed in the html select
	const MAX_ITEM_LEVEL: number = 55;

	// max item enchantment level to be displayed in the html select
	// TODO: Different levels for different rarities
	const MAX_ITEM_ENCH_LEVEL: number = 15;

	// Is used to display item levels in the select, in descending order.
	// ie. 20, 19, 18, 17,...0
	const itemLvs = Array.from({ length: MAX_ITEM_LEVEL }, (_, i) => MAX_ITEM_LEVEL - i);

	// Is used to display item enchantment levels in the select, in descending order.
	// ie. 14, 13, 12,...0
	// NOTE: min level should be 0, and max level should be max level of possible enchantment lowered by 1
	const itemEnchLv = Array.from(
		{ length: MAX_ITEM_ENCH_LEVEL },
		(_, i) => MAX_ITEM_ENCH_LEVEL - i - 1
	);
</script>

<div class="filter">
	<select name="item-rarity" id="">
		<option value="" selected disabled>Item Rarity</option>
		<option class="text-orange-500" value="eternal">Eternal</option>
		<option class="text-amber-400" value="fabled">Fabled</option>
		<option class="text-blue-500" value="heroic">Heroic</option>
		<option class="text-green-500" value="superior">Superior</option>
	</select>
	<select name="item-lv" id="">
		<option value="" selected disabled>Item Lv</option>
		{#each itemLvs as itemLv (itemLv)}
			<option value={itemLv}>{itemLv}</option>
		{/each}
	</select>
	<select name="item-ench-lv" id="">
		<option value="" selected disabled>Enchantment Lv</option>
		{#each itemEnchLv as itemEnchLv (itemEnchLv)}
			<option value={itemEnchLv}>{itemEnchLv}</option>
		{/each}
	</select>
</div>
<div class="table-wrapper container max-h-[70vh] mt-4 mx-auto">
	<table class="w-full">
		<thead class="sticky top-0">
			<tr>
				<th>Enchantment Stone</th>
				<th>Enchantment Success Chance</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
			<tr>
				<td>L43</td>
				<td>20%</td>
			</tr>
		</tbody>
	</table>
</div>
