<template>
  <div class="app-main">
    <AppNavBar />
    <router-view></router-view>
  </div>
</template>

@<script lang="ts">
import { defineComponent } from "vue";
import AppNavBar from "@/components/AppNavbar.vue";
export default defineComponent({
  name: "App",
  components: {
    AppNavBar,
  },
});
</script>

<style>
.app-main {
  height: 100vh;
  background-color: rgb(231, 250, 250);
}
</style>
