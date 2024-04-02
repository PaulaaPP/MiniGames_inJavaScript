<script setup>
import RockScissors from "../components/Games/RockandScossors/RockScissors.vue";
</script>

<template>
  <div class="container">
    <RockScissors />
  </div>
</template>

<style scoped>
.container {
  margin-top: -50px;
  height: 100vh;
  overflow: hidden; /* preventing scrolling page */
  background-position: center;
  background-size: cover;
  background-image: url(../assets/image/RockScissors/arenaBG.jpg);
}
</style>
