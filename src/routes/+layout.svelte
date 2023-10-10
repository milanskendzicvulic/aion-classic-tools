<script lang="ts">
	import "../styles/app.scss";
	import MenuIcon from "$lib/components/icons/menu-icon.svelte";

	import { base } from "$app/paths";
</script>

<header>
	<button class="mobile-menu"><MenuIcon /></button>
	<div class="center-container">
		<nav>
			<ul>
				<li>
					<a href="{base}/">Enchantment Calculator</a>
				</li>
				<li>
					<a href="{base}/enchantment-simulator">Enchantment Simulator</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
<div class="content">
	<div class="center-container">
		<main>
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
	.content {
		@apply grow;
	}

	.content main {
		@apply my-4;
	}

	.center-container {
		@apply container px-2 sm:px-0 mx-auto;
	}

	header {
		@apply bg-neutral-950 text-white font-semibold border-b border-neutral-500 h-12 flex items-center;
	}

	header nav {
		@apply flex items-center;
	}

	.mobile-menu {
		@apply lg:hidden ml-2 p-1 rounded-md hover:bg-neutral-800 active:bg-neutral-900;
	}

	header nav ul {
		@apply hidden lg:flex items-center gap-2;
	}

	header nav ul li a {
		@apply px-2 py-1 rounded-md hover:bg-neutral-800 active:bg-neutral-900;
	}
</style>
