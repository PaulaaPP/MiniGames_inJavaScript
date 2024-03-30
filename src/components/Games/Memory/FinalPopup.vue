<script setup></script>
<template>
  <div>
    <h1>Congratulations!</h1>
    <p>You found them all</p>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* width: 50%;
  height: 50%; */
  border-radius: 10px;
  padding: 3em;
  transform: translate(-50%);
  background-color: var(--blue-color);
  color: var(--orange-primary);
}
h1 {
  font-size: 2em;
}

p {
  font-size: 1.5em;
}

@media screen and (max-width: 428px) {
  div {
    padding: 0.5em 0;
  }

  h1 {
    font-size: 1em;
  }
  p {
    font-size: 0.7em;
  }
}
</style>
