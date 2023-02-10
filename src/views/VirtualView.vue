<template>
	<iframe :width="size.width" :height="size.height" :src="src">



	</iframe>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const size = ref({
	width: 0,
	height: 0
})

onMounted(() => {
	size.value.width = window.innerWidth *0.95
	size.value.height = window.innerHeight*0.95

	if(useRoute().params.id+"" == "1"){
		src.value = "https://jcw87.github.io/c2-sans-fight/"
	}
})

const src = ref<string>("")

</script>

<style scoped>

</style>