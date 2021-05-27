<template>
  <div id="app">
    <div id="nav">
      <navigation-bar></navigation-bar>
    </div>
    <b-container style="padding-top:50px;">
      <router-view />
    </b-container>
  </div>
</template>

<script lang="ts">
import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    'navigation-bar': Navigation
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}
</style>
