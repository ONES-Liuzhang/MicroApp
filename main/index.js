import { registerMicroApps, start } from "qiankun";
import Vue from 'vue/dist/vue.esm'



// 注册微应用
registerMicroApps([
  {
    name: "netease",
    entry: "//localhost:3333",
    container: "#subapp-viewport",
    activeRule: '/netease'
  }
])

start();
