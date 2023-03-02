<template>
<!--	<Canvas></Canvas>-->
	<main>
		Welcome Fellow, so you found out?
	</main>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import Canvas from "@/components/basic/Canvas.vue";
import {removeRD} from "@/scripts/rek";

onMounted(() => {
  removeRD();
})
</script>

<style scoped>


</style>