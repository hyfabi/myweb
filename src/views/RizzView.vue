<template>
  <RandomIcons icon-name="mdi-cancel"/>
  <div class="ma-auto pa-2 text-center" style="font-size: 2em; background-color: rgba(0,0,0,.75)">
    <fieldset class="pa-8">
      <v-divider/>
      <div class="text-center mt-3">
        <p class="displayText">{{display.text}}</p>
      </div>
      <legend class="text-center" style="font-size: 1.5em"><i>{{display.type}}</i></legend>
    </fieldset>
    <div class="d-flex mt-2" style="font-size: .5em">
      <span class="mx-auto">~Fabian</span>
    </div>

    <v-btn @click="load(rizzData)" class="mt-10" color="#111111">
      Give me another one!
    </v-btn>

  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted , ref} from "vue";
import {rizzData} from "@/assets/data/rizz";
import type RizzRecord from "@/models/Rizz";
import RandomIcons from "@/components/basic/RandomIcons.vue";


const display = ref({
  text: "...",
  type: "..."
})

onMounted(()=>{
  load(rizzData)
})

function load(data : RizzRecord[]) {
  let id : number | undefined = useRoute()?.params?.id as unknown as number;

  if(id + "" == "" || id == undefined)
   id = Math.floor(Math.random() * data.length)

  if(id >= data.length || Math.floor(Math.random() * 200) == 69){
    display.value.text = "Du befindest dich auf meiner Webseite.... Pass auf....Ich sehe dich!"
    display.value.type = "~Fabian"
  }else {
    display.value.text = data[id]?.text
    if(data[id]?.type != null)
      display.value.type = `(${data[id]?.type})`;
    else
      display.value.type = "??";
  }
}

</script>

<style scoped>

</style>