<template>
  <div class="ma-auto pa-2" style="font-size: 2em">
    <fieldset class="pa-8">
      <v-divider/>
      <div class="text-center mt-3">
        <p class="displayText">{{display.text}}</p>
      </div>
      <legend class="text-center" style="font-size: 1.5em"><i>{{display.creator}}</i></legend>
    </fieldset>
    <div class="d-flex mt-2" style="font-size: .5em">
      <span class="mx-auto">~Fabian</span>
    </div>
  </div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import type {WType} from "@/models/Wei";
import type Wei from "@/models/Wei";

const props = defineProps<{
  type : WType
}>()

const display = ref({
  text: "...",
  creator: "..."
})

onMounted(()=>{
  switch (props.type){
    case "FUNNY":
      import("@/assets/data/w/funny").then(value => load(value.default));
      break;
    case "REAL":
      import("@/assets/data/w/actual").then(value => load(value.default));
      break;
    default:
      console.debug("No props!")
  }

})

function load(data : Wei[]) {
  let id : number = useRoute()?.params?.id as unknown as number;

  /*if(id+"" == "")*/
  id = Math.floor(Math.random() * data.length)

  if(id >= data.length || Math.floor(Math.random() * 200) == 69){
    display.value.text = "Du befindest dich auf meiner Webseite.... Pass auf....Ich sehe dich!"
    display.value.creator = "~Fabian"
  }else {
    display.value.text = data[id]?.text
    display.value.creator = data[id]?.creator
  }
}

</script>

<style scoped>
</style>