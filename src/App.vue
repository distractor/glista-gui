<template>
  <div class="flex-wrapper">
    <div id="app">
      <div id="nav">
        <navigation-bar></navigation-bar>
      </div>
      <b-container style="padding-top:50px;">
        <router-view />
      </b-container>
    </div>
    <div id="footer">
      <b-container fluid class="sticky-bottom">
        <b-row class="bg-light" align-h="end">
          <AppFooter />
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "@/components/Navigation.vue";
import AppFooter from "./components/layout/AppFooter.vue";

export default Vue.extend({
  components: {
    'navigation-bar': Navigation,
    AppFooter: AppFooter,
  }
});
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

#footer {
  bottom: 0;
  width: 100%;
}

.text {
  padding: 10px;
  text-align: justify;
}

.flex-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}

body {
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}
</style>
