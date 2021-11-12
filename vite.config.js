import { createVuePlugin } from 'vite-plugin-vue2'
import legacy from "@vitejs/plugin-legacy";
import path from 'path'
console.log(path.resolve(__dirname, "src"))
export default {
	plugins: [
		createVuePlugin(),
		legacy({
			targets: ['> 1%, last 1 version, ie >= 11'],
			additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // 面向IE11时需要此插件
		}),],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src")
		}
	}
}

