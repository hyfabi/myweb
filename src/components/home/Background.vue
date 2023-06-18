<template>
<!--	<Canvas></Canvas>-->
	<main>

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