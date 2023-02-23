<template>
  <div class="ma-auto">
    <h1>{{textNow}}</h1>
    <div class="d-flex mt-5 justify-space-evenly">
      <v-btn class="bg-grey-darken-4 mx-1" v-for="btn in btnNow" @click="rek(btn.after)">{{btn.text}}</v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {type Ref, ref} from "vue";
import * as data from "@/assets/interactives/VooTalk.json"
import {rek, start} from "@/scripts/rek";

const textNow : Ref<string> = ref<string>("");
const btnNow : Ref<{text: string, after: any}[]>= ref([])

start(data, textNow, btnNow)

</script>

<style>

</style>
