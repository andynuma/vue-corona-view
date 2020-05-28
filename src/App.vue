<template>
  <div>
    <div class="header">
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
.header {
  float: right;
  padding-right: 4%;
}
</style>
