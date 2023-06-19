<template>
	<v-main class="d-flex flex-column pa-3">
      <div class="mx-auto mt-3 text-center text-red">
        <h1>You should not be here!</h1>
        <span>This site is hidden!</span>
      </div>
      <aside>
        <div v-for="x in siteRouter.default.getRoutes()">
          <a :href="x.path">
            {{x.path}}
          </a>
          <br class="mb-2">
        </div>

      </aside>
	</v-main>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import Canvas from "@/components/basic/Canvas.vue";
import {removeRD} from "@/scripts/rek";
import * as siteRouter from "@/plugins/router"


onMounted(() => {
  removeRD();
  console.log(siteRouter.default.getRoutes())
})
</script>

<style scoped>


</style>