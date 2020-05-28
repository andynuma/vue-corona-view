<template>
  <div class="wrapper">
    <h1>Corona Virus Statistics</h1>
    <Corona />
  </div>
</template>

<script lang="ts">
import Corona from "@/components/Corona/Corona.vue";

export default {
  name: "CoronaPage",
  components: {
    Corona
  }
};
</script>

<style scoped>
.wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
}
</style>
