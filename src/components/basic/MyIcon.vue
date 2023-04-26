<template>
  <div class="position-absolute specialIcon ">
    ❤️
  </div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";

const props = defineProps<{
  left: number,
  top: number,
  iconName: string
}>()

let topp = props.top
let leftt = props.left

let rotation = ref(0);

onMounted(() => {
  if(Math.random() * 10  < 5)
    rotation.value = Math.random() * 365
});

</script>

<style scoped>

.specialIcon{
  top: v-bind(topp + "px");
  left: v-bind(leftt+ "px");
  transform: rotate(v-bind(rotation + "deg"));
  z-index: -1;
}

</style>