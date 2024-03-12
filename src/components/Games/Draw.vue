<template>
  <div class="popup">
    <div class="popup-content">
      <img src="../../assets/image/draw.png" alt="" />
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Draw",
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #827c7c;
  padding: 20px;
  border-radius: 8px;
}

img {
  height: 600px;
  margin-bottom: 20px;
}
</style>
