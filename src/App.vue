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
    <RouterView class="" v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" key="$route.fullPath" />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Changa One", sans-serif;
  /* overflow: hidden; preventing scrolling page */
  background-image: linear-gradient(to right, #434343 0%, black 100%);
}

body h1 h2 h3 {
  font-weight: normal;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0.1;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
