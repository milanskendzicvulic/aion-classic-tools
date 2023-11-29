<script lang="ts">
	import { browser } from "$app/environment";
	import { clientTime } from "$lib/schedule";

	function displayTime(time: string): string {
		if (!browser) {
			return time;
		}

		const ct = clientTime(time);

		return `${ct}`;
	}

	const arenaOfDiscipline = `Daily from ${displayTime("13:00")} to ${displayTime("01:00")}`;
	const arenaOfChaos = `Daily from ${displayTime("13:00")} to ${displayTime("01:00")}`;
	const arenaOfGlory = `Saturday and Sunday from ${displayTime("19:00")} to ${displayTime(
		"20:00"
	)}`;

	const dredgion = `Daily from ${displayTime("11:00")} to ${displayTime("13:00")}, ${displayTime(
		"17:00"
	)} to ${displayTime("19:00")}, ${displayTime("23:00")} to ${displayTime("01:00")}`;
	const tiarkh = `Daily from ${displayTime("19:00")} to ${displayTime("21:00")}`;
</script>

<h1>Arenas</h1>
<ul>
	<li>
		<strong>Arena of Discipline:</strong>
		<span>{arenaOfDiscipline}</span>
	</li>
	<li>
		<strong>Arena of Chaos:</strong>
		<span>{arenaOfChaos}</span>
	</li>
	<li>
		<strong>Arena of Glory:</strong>
		<span>{arenaOfGlory}</span>
	</li>
</ul>
<h1>PvP Dungeons</h1>
<ul>
	<li>
		<strong>Dredgion:</strong>
		<span>{dredgion}</span>
	</li>
	<li>
		<strong>Tiarkh Testing Lab:</strong>
		<span>
			{tiarkh}
		</span>
	</li>
</ul>
<h1>Sieges</h1>
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
			<tr>
				<th>{displayTime("18:00")}</th>
				<td />
				<td />
				<td>
					<div>Sulphur Fortress</div>
					<div>Siel's West Fortress</div>
					<div>Siel's East Fortress</div>
				</td>
				<td />
				<td />
				<td>
					<div>Roah Fortress</div>
					<div>Asteria Fortress</div>
				</td>
				<td>
					<div>Miren Fortress</div>
					<div>Kysis Fortress</div>
					<div>Krotan Fortress</div>
				</td>
			</tr>
			<tr>
				<th>{displayTime("19:00")}</th>
				<td />
				<td />
				<td />
				<td />
				<td />
				<td />
				<td />
			</tr>
			<tr>
				<th>{displayTime("20:00")}</th>
				<td />
				<td />
				<td />
				<td />
				<td />
				<td />
				<td />
			</tr>
			<tr>
				<th>{displayTime("21:00")}</th>
				<td />
				<td />
				<td>
					<div>Gelkmaros Siege</div>
				</td>
				<td>
					<div>Inggison Siege</div>
				</td>
				<td />
				<td>
					<div>Divine Fortress</div>
				</td>
				<td>
					<div>Inggison Siege</div>
					<div>Gelkmaros Siege</div>
				</td>
			</tr>
			<!-- {#each scheduleHours() as hour}
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
			{/each} -->
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
