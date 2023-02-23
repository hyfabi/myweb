<template>
  <div class="ma-auto pa-2 text-center" style="font-size: 2em">
    <div style="font-size: 2em"><b>Wieso stalkst du mich?!</b></div>
    <div class="mt-9">Geh weg...</div>
    <div>{{val}}...</div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {start} from "@/scripts/rek";

const val = ref("4");

onMounted(() => {
  start({
    "text": "3",
    "wait": 2,
    "after": {
      "wait": 2,
      "text": "2",
      "after": {
        "wait": 2,
        "text": "1",
        "after": {
          "redirect": "https://letmegooglethat.com/?q=how+do+I+stop+stalking%3F"
        }
      }
    }
  }, val)
})
</script>

<style scoped>

</style>