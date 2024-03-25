<script setup>
// import { Icon } from "@iconify/vue";
import { ref } from "vue";

const cardArrayEasy = ref([
  {
    name: "1",
    img: "/Memory/12/1.jpg",
  },
  {
    name: "2",
    img: "/Memory/12/2.jpg",
  },
  {
    name: "3",
    img: "/Memory/12/3.jpg",
  },
  {
    name: "4",
    img: "/Memory/12/4.jpg",
  },
  {
    name: "5",
    img: "/Memory/12/5.jpg",
  },
  {
    name: "6",
    img: "/Memory/12/6.jpg",
  },
  {
    name: "1",
    img: "/Memory/12/1.jpg",
  },
  {
    name: "2",
    img: "/Memory/12/2.jpg",
  },
  {
    name: "3",
    img: "/Memory/12/3.jpg",
  },
  {
    name: "4",
    img: "/Memory/12/4.jpg",
  },
  {
    name: "5",
    img: "/Memory/12/5.jpg",
  },
  {
    name: "6",
    img: "/Memory/12/6.jpg",
  },
]);

cardArrayEasy.value.sort(() => 0.5 - Math.random());

const grid = ref();

// function createBoard() {
//   for (let i = 0; i < cardArrayEasy.length; i++) {
//     const card = document.createElement("img");
//     card.setAttribute("src", "../../../assets/image/Memory/blank.png");
//     card.setAttribute("data-id", i);
//     grid.appendChild(card);
//     console.log(card, i);
//   }
// }

// createBoard();

// console.log(grid);
</script>

<template>
  <div class="box">
    <!--  -->
    <div class="board">
      <!-- levels of games -->
      <div class="levels">
        <h2>Yor level:</h2>
        <button id="easyButton">Easy 12 cards</button>
        <button id="mediumButton">Medium 14 card</button>
        <button id="hardButton">Hard 16 cards</button>
      </div>
      <!-- buttons -->
      <div class="reset_TimeBtns">
        <button id="resetButton">Reset Game</button>
        <button id="resetButton">Stop / start</button>
      </div>

      <!-- popup na koniec -->
      <!-- <h3><span id="result"></span></h3> -->
      <div class="game-info">
        <p>Moves: <span id="moves"></span></p>
        <p><span id="time">Time:</span></p>
      </div>

      <!-- main board  -->

      <div class="grid">
        <div v-for="(card, index) in cardArrayEasy" :key="index" class="card">
          <img :src="card.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid img {
  width: 200px;
  height: 200px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  /* width: 400px; */
}

.easy {
  background-color: green;
}

.medium {
  background-color: rgb(50, 48, 212);
}
.hard {
  background-color: rgb(224, 43, 88);
}

/*  */

.box {
  font-family: "Orbitron", sans-serif;
  color: var(--orange-primary);
  padding: 5rem;
}

button {
  font-family: "Orbitron", sans-serif;
}
.board {
  text-align: center;
}

.levels button {
  color: var(--orange-primary);
  background-color: transparent;
  text-align: center;
  font-weight: 500;
  border-color: var(--orange-primary);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 0.5em 0;
  margin: 1rem;
  width: 5.5em;
}

.reset_TimeBtns button {
  margin: 2rem 0.5rem;
  padding: 0.3rem;
  font-weight: 600;
  background-color: var(--orange-primary);
  color: var(--blue-color);
  border-color: var(--blue-color);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.game-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: var(--blue-color);
  font-weight: bold;
  font-size: 1.5rem;
}

.grid h1 {
  text-align: center;
  padding: 5rem;
}
</style>
