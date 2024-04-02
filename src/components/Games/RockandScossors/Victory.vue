<template>
  <div class="popup">
    <div class="popup-content">
      <img src="../../../assets/image/RockScissors/vitoryCup.png" alt="" />
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Victory",
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #568bc5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

img {
  height: 600px;
}

@media screen and (max-width: 428px) {
  img {
    height: 300px;
  }
}
</style>
