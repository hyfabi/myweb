<template>
  <div class="position-absolute specialIcon ">
    &lt;3
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

let r = 255
let g = 255
let b = 255

onMounted(() => {
  if(Math.random() * 10  < 10){
    r = Math.random() * 240
    g = Math.random() * 240
    b = Math.random() * 240
  }

  if(Math.random() * 10  < 7)
    rotation.value = Math.random() * 360
});

</script>

<style scoped>

.specialIcon{
  top: v-bind(topp + "px");
  left: v-bind(leftt+ "px");
  transform: rotate(v-bind(rotation + "deg"));
  z-index: -1;
  color: rgba(v-bind(r), v-bind(g), v-bind(b), .75);
}

</style>