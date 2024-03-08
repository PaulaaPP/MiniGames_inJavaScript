<script setup>
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div>
    <header>
      <Navigation />

      <!--  -->
    </header>
    <main></main>
    <footer></footer>
    <router-view></router-view>
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Nunito", sans-serif;
  overflow: hidden; /* preventing scrolling page*/
}
</style>
