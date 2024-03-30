<script setup>
import Memory from "../components/Games/Memory/Memory.vue";
</script>

<template>
  <div class="container">
    <Memory />
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  margin-top: -50px;
  overflow: hidden;
  background: var(--bg-color);
}

@media screen and (max-width: 1440px) {
  .container {
    overflow: scroll;
    /* background: var(--bg-color); */
  }
}
</style>
