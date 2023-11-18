<script lang="ts">
	import { schedule, scheduleDays, scheduleEvents, scheduleHours } from "$lib/schedule";
</script>

<div class="table-wrapper">
	<table>
		<thead>
			<tr>
				<th>Time</th>
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
			{#each scheduleHours() as hour}
				<tr>
					<th>{hour}</th>
					{#each scheduleDays() as day}
						<td>
							{#each scheduleEvents(day, hour) as event}
								<div>{event}</div>
							{/each}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss">
	.table-wrapper {
		@apply overflow-x-auto mt-4 max-h-[70vh];
	}

	table {
		@apply border-separate border-spacing-0 w-full;
	}

	thead {
		@apply sticky top-0 z-20;
	}

	thead th {
		@apply border border-neutral-700;
	}

	thead th + th {
		@apply border-l-0;
	}

	thead th:first-child {
		@apply sticky left-0 z-30;
	}

	tbody th {
		@apply sticky left-0 z-10 border border-t-0 border-neutral-700;
	}

	tbody tr td div {
		@apply whitespace-nowrap;
	}

	td,
	th {
		@apply p-2 text-left;
	}

	th {
		@apply text-neutral-50 bg-neutral-900;
	}

	/* 	td[colspan="2"] {
		@apply text-center;
	} */

	tr:nth-child(even) {
		@apply bg-neutral-300;
	}

	tr:nth-child(odd) {
		@apply bg-neutral-200;
	}
	// table {
	// 	@apply block border-collapse w-full overflow-x-auto;
	// }

	// thead {
	// 	@apply table w-full;
	// }

	// tbody {
	// 	@apply table w-full;
	// }

	// td,
	// th {
	// 	@apply p-2 text-left;
	// }

	// th {
	// 	@apply text-neutral-50 bg-neutral-900;
	// }

	// tr:nth-child(even) {
	// 	@apply bg-neutral-300;
	// }

	// tr:nth-child(odd) {
	// 	@apply bg-neutral-200;
	// }
</style>
