<script lang="ts">
	import "../styles/app.scss";
</script>

<header class="bg-neutral-950 border-b border-neutral-500 h-12 flex items-center">
	<div class="custom-container">
		<nav>
			<ul class="flex items-center gap-2">
				<li>
					<a
						class="text-white font-semibold px-2 py-1 rounded-md hover:bg-neutral-800 active:bg-neutral-900"
						href="/">Enchantment Calculator</a
					>
				</li>
				<li>
					<a
						class="text-white font-semibold px-2 py-1 rounded-md hover:bg-neutral-800 active:bg-neutral-900"
						href="/enchantment-simulator">Enchantment Simulator</a
					>
				</li>
			</ul>
		</nav>
	</div>
</header>
<div class="grow">
	<div class="custom-container">
		<main class="my-4">
			<slot />
		</main>
	</div>
</div>

<!-- <footer class="bg-yellow-400">
	<div class="container px-2 sm:px-0 mx-auto">
		<p>Kakao</p>
	</div>
</footer> -->

<style lang="scss">
	.custom-container {
		@apply container px-2 sm:px-0 mx-auto;
	}
</style>
