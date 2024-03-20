import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuetify from 'vite-plugin-vuetify'
import ogPlugin from 'vite-plugin-open-graph';
import {rizzData} from "./src/assets/data/rizz";

// https://vitejs.dev/config/
export default defineConfig({
	server:{
		host: "0.0.0.0",
		port: 3000,
	},
	plugins: [vue(),
		vueJsx(),
		vuetify({
			autoImport: true
		}),
		ogPlugin({
			basic: {
				title: "Rizz of the week (I stole it)",
				url: "https://hyfabi.xyz/rizz",
				type: "website",
				description: rizzData[Math.floor(Math.random() * rizzData.length)]?.text as string
			}
		})
	],
	resolve: {
		alias: {
		  '@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
