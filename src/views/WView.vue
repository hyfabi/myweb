<template>
<main>
	<div>
		<fieldset class="fieldset">
			<div class="innerText">
				<p class="displayText">{{display.text}}</p>
				<p class="smallText"></p>
			</div>

			<legend class="legend">{{display.creator}}</legend>
		</fieldset>
	</div>
	<div class="fabiWishes">~Fabian</div>
</main>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {weisheiten} from "@/assets/data/w";

const display = ref({
	text: "",
	creator: ""
})

onMounted(()=>{
	let id : number = useRoute().params.id as unknown as number;

	if(id+"" == "")
		id = Math.floor(Math.random() * weisheiten.length)

	if(id >= weisheiten.length){
		display.value.text = "Du befindest dich auf meiner Webseite.... Pass auf....Ich sehe dich!"
		display.value.creator = "~Fabian"
	}else {
		display.value.text = weisheiten[id]?.text
		display.value.creator = weisheiten[id]?.creator
	}
})

</script>

<style scoped>
.displayText{
	color: white;
}

.innerText{

}

.legend{
	font-family: Pacifico, cursive;
}

.fieldset{
	width: 90%;
	margin: auto;
	font-size: 2em;
	font-family: Pacifico, sans-serif;
	text-align: center;
	vertical-align: bottom;
}

.fabiWishes{
	margin-top: 2em;
	width: 100%;
	text-align: center;
}

main{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-content: center;
}
</style>