<template>

	<div v-if="isForeground" v-on:mousedown="keyPressed">
		<div class="hehehaha">:)</div>
		<Foreground></Foreground>
	</div>
	<div v-else>
		<Background></Background>
	</div>

</template>

<script setup lang="ts">
import Foreground from "@/components/home/Foreground.vue";
import Background from "@/components/home/Background.vue";
import {isForeground} from "@/assets/States";
import {onMounted, ref} from "vue";

let pressed = 0;

function keyPressed() {
	if(pressed == 3)
		isForeground.value = false;
	pressed++;
}

const top = ref(-1)
const left = ref(-1)

onMounted(() => {
	top.value = Math.random() * window.innerHeight;
	left.value = Math.random() * window.innerWidth;

})

</script>

<style scoped>

.hehehaha{
	position: absolute;
	color: transparent;
	top: v-bind(top + "px");
	left: v-bind(left + "px");
	height: 10px;
	width: 10px;
	z-index: -1;
}

</style>