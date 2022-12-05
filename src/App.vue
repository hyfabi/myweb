<template>

	<main v-if="isForeground" v-on:mousedown="keyPressed">
		<div>a</div>
		<ForegroundView></ForegroundView>
	</main>
	<main v-else>
		<header>
			<nav >
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</header>

		<RouterView/>
	</main>

</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {ref} from "vue";
import ForegroundView from "@/views/ForegroundView.vue";

const isForeground = ref<boolean>(true)

let pressed = 0;

function keyPressed(obj : any) {
	if(pressed == 3)
		isForeground.value = false;
	pressed++;
}

</script>
