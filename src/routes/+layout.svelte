<script lang="ts">
	import "../app.css";
</script>

<header class="bg-neutral-800 border-b border-neutral-700">
	<div class="container px-2 sm:px-0 mx-auto">
		<nav>
			<ul>
				<li>Enchantment Calculator</li>
			</ul>
		</nav>
	</div>
</header>
<div class="grow">
	<div class="container px-2 sm:px-0 mx-auto">
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
