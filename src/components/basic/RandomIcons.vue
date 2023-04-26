<template>
  <aside>
    <MyIcon v-for="icon in icons" :top="icon.top" :left="icon.left" :icon-name="props.iconName"/>
  </aside>
</template>

<script setup lang="ts">

import {onMounted, type Ref, ref} from "vue";
import MyIcon from "@/components/basic/MyIcon.vue";

const props = defineProps<{
  iconName: string
}>()
const icons : Ref = ref([])

onMounted(() => {

  let count : number = Math.random() * 100 +10

  for (let i = 0; i < count; i++){
    icons.value[i] = {
      top : Math.random() * window.innerHeight,
      left : Math.random() * window.innerWidth,
      iconName: props.iconName
    }
  }
})

</script>

<style scoped>

</style>