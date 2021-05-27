<template>
  <div class="text">
    <span>{{year}} &copy; Coded with <b-icon-heart-fill></b-icon-heart-fill></span>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "AppFooter",

  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
});
</script>
