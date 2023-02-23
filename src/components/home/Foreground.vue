<template>
  <div class="center">
    <span id="text">{{textNow}}</span>
    <v-btn @click="" v-for="btn in btnNow" >{{btn}}</v-btn>
  </div>
</template>

<script setup lang="ts">

import {type Ref, ref} from "vue";
import * as data from "@/assets/interactives/ForegroundText.json"
import {start} from "@/scripts/rek";

const textNow : Ref<string> = ref<string>("");
const btnNow : Ref<string[]>= ref([])

start(data, textNow)



</script>

<style scoped>
.center{
  width: 100%;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
}

#text{
  font-family: Bahnschrift;
  font-size: larger;
  color: white;
}
</style>