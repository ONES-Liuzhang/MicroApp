<template>
  <div class="layout">
    <SideBar class="sideBar"/>
    <div id="subapp-viewport">
      loading...
    </div>
  </div>
</template>
<script>
import SideBar from './sidebar.vue'
export default {
  name: "Layout",
  props: ["loading"],
  components: { SideBar }
}
</script>
<style>
.sideBar {
  width: 300px;
  height: 500px;
  float: left;
}

#subapp-viewport {
  display: flow-root;
}
</style>