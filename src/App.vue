<template>
  <v-app>
    <navigations-bar />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationsBar from "@/components/NavigationsBar.vue";

export default Vue.extend({
  name: "App",

  components: { NavigationsBar },

  data: () => ({
    //
  })
});
</script>
