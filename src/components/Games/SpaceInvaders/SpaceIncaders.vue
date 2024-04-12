<script setup>


</script>

<template>
  <div>
    <div class="container">
      <!-- <h1>Space Invaders</h1> -->
      <h1 class="results">0</h1>
      <div class="grid"></div>

      <button id="startButton">Start Game</button>
      <br />
      <button id="easyButton">Łatwy</button>
      <button id="mediumButton">Średni</button>
      <button id="hardButton">Trudny</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 10em;
  color: white;
}

.grid {
  width: 500px;
  height: 500px;
  border: solid black 1px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  background-color: rgba(241, 235, 235, 0.24);
}

/* do zmiany */
.grid div {
  width: 20px;
  height: 20px;
}

.invader {
  color: rgb(43, 226, 67);
  /* background-image: url(./ufo.jpg); */
  background-size: cover;
}

.shooter {
  background-color: rgb(188, 20, 230);
}

.laser {
  /* background-image: url(./l.png); */
  color: red;
  background-size: cover;
  background-position: center;
  width: 5px;
}

.boom {
  color: yellow;
  /* background-image: url(./boom.jpg); */
  background-size: cover;
}

/* i {
  width: 200px;
} */
</style>
