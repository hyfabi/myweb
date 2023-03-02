<template>

	<div v-if="isForeground">
		<div class="hehehaha position-absolute" style="z-index: 10000" @click="keyPressed()">:)</div>
		<Foreground></Foreground>
	</div>
	<div v-else>
      <DotLinesBackground>
        <Background></Background>
      </DotLinesBackground>
	</div>

</template>

<script setup lang="ts">
import Foreground from "@/components/home/Foreground.vue";
import Background from "@/components/home/Background.vue";
import {isForeground} from "@/store/States";
import {onMounted, ref} from "vue";
import DotLinesBackground from "@/components/basic/DotLinesBackground.vue";
import {removeRD} from "@/scripts/rek";

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