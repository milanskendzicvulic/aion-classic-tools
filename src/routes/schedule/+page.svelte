<script lang="ts">
	import { schedule, scheduleDays } from "$lib/schedule";

	const days = Object.entries(schedule);
</script>

<table>
	<thead>
		<tr>
			<th>Hour</th>
			<th>Monday</th>
			<th>Tuesday</th>
			<th>Wednesday</th>
			<th>Thursday</th>
			<th>Friday</th>
			<th>Saturday</th>
			<th>Sunday</th>
		</tr>
	</thead>
	<tbody>
		{#each scheduleDays() as day}
			<tr>
				<td>
					{day}
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style lang="scss">
	table {
		@apply border-collapse w-full;
	}

	/* 	thead {
		@apply sticky top-0;
	} */

	td,
	th {
		@apply p-2 text-left;
	}

	th {
		@apply text-neutral-50 bg-neutral-900;
	}

	tr:nth-child(even) {
		@apply bg-neutral-300;
	}

	tr:nth-child(odd) {
		@apply bg-neutral-200;
	}
</style>
