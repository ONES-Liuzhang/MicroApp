import Vue from 'vue'
import App from './App.vue'

export default function render({ loading }) {
  return new Vue({
    render: (h) => h(App, {props: {
      loading
    }})
  }).$mount('#subapp-container')
}