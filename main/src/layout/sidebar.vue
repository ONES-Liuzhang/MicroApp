<template>
  <div>
    <li>
      <a v-on:click="push('/netease')">
        vue-netease
      </a>
    </li>
    <li>
      <a v-on:click="push('/vue-webpack5')">
        vue-webpack5
      </a>
      </li>
  </div>  
</template>
<script>
export default {
  name: "SideBar",
  methods: {
    push(subapp) {
      history.pushState(null, subapp, subapp)
    }
  },
}
</script>