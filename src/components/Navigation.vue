<script setup></script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/contact">Contacts</router-link>
  </nav>
</template>

<style>
nav a {
  color: rgb(238, 243, 243);
  font-size: 20px;
  text-decoration: none;
  margin-right: 40px;
}

nav {
  width: 1140px;
  max-width: 80%;
  margin: auto;
  height: 50px;
  display: flex;
  align-items: center;
  
  /* this is need to make  nav visible top-of on carusel image*/
  position: relative;
  z-index: 100;
}
</style>
