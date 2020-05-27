<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Corona</router-link>
      <span>|</span>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { coronaModule } from "./store/modules/corona";

export default Vue.extend({
  mounted() {
    coronaModule.setData();
  }
});
</script>

<style>
</style>
