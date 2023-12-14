<template>
	<iframe class="flex-grow-1" :src="src">
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
	if(useRoute().params.id+"" == "1"){
		src.value = "https://jcw87.github.io/c2-sans-fight/"
	}
})

const src = ref<string>("")

</script>

<style scoped>

</style>