<script setup>
import SpaceInvaders from "../components/Games/SpaceInvaders/SpaceIncaders.vue";
</script>

<template>
  <div class="container">
    <SpaceInvaders />
  </div>
</template>

<style scoped>
.container {
  margin-top: -50px;
  height: 100vh;
  overflow: hidden; /* preventing scrolling page */
  background-position: center;
  background-size: cover;
  background-image: url(../assets/image/SpaceInvaders/BG_space_Large.webp);
}
</style>
