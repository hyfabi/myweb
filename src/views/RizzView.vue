<template>
  <RandomIcons :key="reloads" icon-name="mdi-cancel"/>
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

    <v-btn @click="next()" class="mt-10" color="#111111">
      Give me another one!
    </v-btn>

  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {rizzData} from "@/assets/data/rizz";
import type RizzRecord from "@/models/Rizz";
import RandomIcons from "@/components/basic/RandomIcons.vue";
import {useHead, useServerHeadSafe} from "@unhead/vue";
import {load, shuffle} from "@/scripts/RizzOG";

const reloads = ref(0)

const display = ref({
  text: "Loading...",
  type: "Loading..."
})

let queue = [];

onMounted(()=>{
	console.log('myheader mounted');
	queue = shuffle(rizzData);
	console.debug("aa", queue);
	next();
})

function reload() :void {
  load(rizzData, display)
  console.debug("Reloaded Rizz")
}

function next(){
  let text : string = "??";
  let type: string = "??";

  if(queue.length == 0){
  	text = "You have seen all Rizz :("
  }
  else if(Math.floor(Math.random() * 200) == 69){
    text = "Du befindest dich auf meiner Webseite.... Pass auf....Ich sehe dich!"
    type = "~Fabian"
  }else {
    text = queue[0].text;
    type = queue[0].type ?? "??";
    queue.shift();
  }
  display.value.text = text;
	display.value.type = type;
  reloads.value = reloads.value +1;
}



useServerHeadSafe( {
	meta: [
		{
			property: "og:type",
			content: "website"
		},{
			property: "og:url",
			content: "https://hyfabi.xyz/rizz"
		},{
			property: "og:title",
			content: "Rizz of todayy: (I stole it)"
		},{
			property: "og:description",
			content: load(rizzData) + "\n ~Fabi"
		}
	]
}, {})

</script>

<style scoped>

</style>