<template>
  <div class="layout">
    <SideBar class="sideBar"/>
    <div class="container"></div>
  </div>
</template>
<script>
import SideBar from './sidebar.vue'
export default {
  name: "Layout",
  components: { SideBar }
}
</script>
<script>
export default {
  .layout {
  }
}
</script>