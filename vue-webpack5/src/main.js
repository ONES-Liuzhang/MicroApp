import './public-path.js'
import Vue from 'vue'
import { createRouter } from './router'
import App from './App.vue'

Vue.productionTips = false;

let instance = null
let router = null

function render(props = {}) {
	const { container } = props;
	
	let routebase = window.__POWERED_BY_QIANKUN__ ? "/vue-webpack5/" : "/";
	
	router = createRouter(routebase)

	instance = new Vue({
		router,
		render: (h) => h(App),
	}).$mount(container ? container.querySelector("#app") : "#app")
}

if(!window.__POWERED_BY_QIANKUN__) {
	render();
}

// 导出子应用生命周期
export async function bootstrap() {
	console.log("vue-webpack5 bootstrap")
}

export async function mount(props) {
	render(props);
	console.log("vue-webpack5 mount ", instance)
}

export async function unmount() {
	instance.$destroy();
	instance.$el.innerHtml = "";
	instance = null;
	router = null;
	console.log("vue-webpack5 unmount")
}

export async function update() {
	console.log("vue-webpack5 update")
}