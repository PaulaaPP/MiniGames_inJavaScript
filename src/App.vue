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
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,400;1,500;1,700&display=swap");

body {
  margin: 0;
  padding: 0;
  font-family: Poppins;
  background-color: rgb(97, 97, 97);
  /* color: wheat; */
}
</style>
