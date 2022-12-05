<template>
	<div class="center">
		<span id="text">{{textNow}}</span>
	</div>
</template>

<script setup lang="ts">

import { ref} from "vue";
import * as data from "@/assets/interactives/ForegroundText.json"
import {isForeground} from "@/assets/States";

const textNow = ref<string>();

wait(1, data);

function rek(data : any){
	if(!isForeground.value)
		return;
	if(data.text !== undefined)
		write(data.text);
	if(data.wait !== undefined)
		wait(data.wait, data.after)
	if(data.redirect !== undefined)
		redirect(data.redirect)
}

//Need "text"
function write(text : string){
	console.log(text)
	textNow.value = text
}

//If "wait" => Always "after"
function wait(time : number, data : any){
	setTimeout(function () {
		rek(data);
	}, time * 1000);
}

function redirect(link : string){
	window.location.replace(link);
}

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