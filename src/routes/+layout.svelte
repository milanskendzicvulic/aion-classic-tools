<script lang="ts">
	import { base } from "$app/paths";
	import { browser } from "$app/environment";
	import { navigating } from "$app/stores";
	import "../styles/app.scss";
	import MenuIcon from "$lib/components/icons/menu-icon.svelte";
	import XIcon from "$lib/components/icons/x-icon.svelte";

	const DRAWER_BREAKPOINT: number = 1024;

	let isDrawerOpen: boolean = false;
	let innerWidth: number = 0;

	function toggleDrawer() {
		isDrawerOpen = !isDrawerOpen;
	}

	$: if (innerWidth >= DRAWER_BREAKPOINT) {
		isDrawerOpen = false;
	}

	// close the sidebar when navigating to a different page
	$: if ($navigating) {
		isDrawerOpen = false;
	}

	// when the drawer is open the scrollbar gets removed
	$: if (browser) {
		document.body.classList.toggle("overflow-hidden", isDrawerOpen);
	}
</script>

<svelte:window bind:innerWidth />

<!-- TODO(#X, medium): Make a drawer component, and move all the styles there -->
<!-- DRAWER -->
<aside class:translate-x-full={isDrawerOpen} class="drawer">
	<nav class="mobile-nav">
		<div class="mobile-nav__header">
			<button on:click={toggleDrawer} class="mobile-nav__close"><XIcon /></button>
		</div>
		<ul>
			<li><a href="{base}/">Home</a></li>
			<li><a href="{base}/enchantment-calculator">Enchantment Calculator</a></li>
			<li><a href="{base}/enchantment-simulator">Enchantment Simulator</a></li>
		</ul>
	</nav>
</aside>
<!-- Backdrop -->
<!-- TODO: find a way to deal with the 4 classes in a better way, maybe a reusable Backdrop component -->
<div
	on:mousedown={toggleDrawer}
	class:pointer-events-none={!isDrawerOpen}
	class:opacity-0={!isDrawerOpen}
	class:pointer-events-auto={isDrawerOpen}
	class:opacity-50={isDrawerOpen}
	class="backdrop"
/>
<header>
	<button on:click={toggleDrawer} class="mobile-menu"><MenuIcon /></button>
	<div class="center-container">
		<nav>
			<ul>
				<li>
					<a href="{base}/">Home</a>
				</li>
				<li>
					<a href="{base}/enchantment-calculator">Enchantment Calculator</a>
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
		@apply bg-neutral-950 text-white font-semibold border-b border-neutral-700 h-12 flex items-center;
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

	main {
		@apply text-white;
	}

	.drawer {
		@apply bg-neutral-950 text-white z-20 -left-3/4 transition-transform duration-300 ease-in-out sm:-left-1/2 md:-left-1/3 absolute h-full w-3/4 sm:w-1/2 md:w-1/3 lg:duration-0 lg:w-52 xl:w-60 border-r border-neutral-800;
	}

	.backdrop {
		@apply fixed z-10 h-screen w-screen bg-black transition duration-300 ease-in-out;
	}

	.mobile-nav {
		@apply px-2;
	}

	.mobile-nav ul {
		@apply flex flex-col gap-1;
	}

	.mobile-nav ul li {
		@apply flex;
	}

	.mobile-nav ul li a {
		@apply w-full px-2 py-2 rounded-md hover:bg-neutral-800 active:bg-neutral-900;
	}

	.mobile-nav__header {
		@apply flex items-center h-12;
	}

	.mobile-nav__close {
		@apply lg:hidden p-1 rounded-md hover:bg-neutral-800 active:bg-neutral-900;
	}
</style>
