<script setup>
// import { Icon } from "@iconify/vue";
import { ref } from "vue";
import FinalPopup from "./FinalPopup.vue";

const Popup = {
  FinalPopup,
};

const finalpopup = ref(false);

const cardArrayEasy = ref([
  {
    name: "1",
    img: "/Memory/12cards/1.webp",
  },
  {
    name: "2",
    img: "/Memory/12cards/2.webp",
  },
  {
    name: "3",
    img: "/Memory/12cards/3.webp",
  },
  {
    name: "4",
    img: "/Memory/12cards/4.webp",
  },
  {
    name: "5",
    img: "/Memory/12cards/5.webp",
  },
  {
    name: "6",
    img: "/Memory/12cards/6.webp",
  },
  {
    name: "1",
    img: "/Memory/12cards/1.webp",
  },
  {
    name: "2",
    img: "/Memory/12cards/2.webp",
  },
  {
    name: "3",
    img: "/Memory/12cards/3.webp",
  },
  {
    name: "4",
    img: "/Memory/12cards/4.webp",
  },
  {
    name: "5",
    img: "/Memory/12cards/5.webp",
  },
  {
    name: "6",
    img: "/Memory/12cards/6.webp",
  },
]);

const cardArrayMedium = ref([
  {
    name: "1",
    img: "/Memory/18cards/1.webp",
  },
  {
    name: "2",
    img: "/Memory/18cards/2.webp",
  },
  {
    name: "3",
    img: "/Memory/18cards/3.webp",
  },
  {
    name: "4",
    img: "/Memory/18cards/4.webp",
  },
  {
    name: "5",
    img: "/Memory/18cards/5.webp",
  },
  {
    name: "6",
    img: "/Memory/18cards/6.webp",
  },

  {
    name: "7",
    img: "/Memory/18cards/7.webp",
  },
  {
    name: "8",
    img: "/Memory/18cards/8.webp",
  },
  {
    name: "9",
    img: "/Memory/18cards/9.webp",
  },
  {
    name: "1",
    img: "/Memory/18cards/1.webp",
  },
  {
    name: "2",
    img: "/Memory/18cards/2.webp",
  },
  {
    name: "3",
    img: "/Memory/18cards/3.webp",
  },
  {
    name: "4",
    img: "/Memory/18cards/4.webp",
  },
  {
    name: "5",
    img: "/Memory/18cards/5.webp",
  },
  {
    name: "6",
    img: "/Memory/18cards/6.webp",
  },

  {
    name: "7",
    img: "/Memory/18cards/7.webp",
  },
  {
    name: "8",
    img: "/Memory/18cards/8.webp",
  },
  {
    name: "9",
    img: "/Memory/18cards/9.webp",
  },
]);

const cardArrayHard = ref([
  {
    name: "1",
    img: "/Memory/22cards/1.webp",
  },
  {
    name: "2",
    img: "/Memory/22cards/2.webp",
  },
  {
    name: "3",
    img: "/Memory/22cards/3.webp",
  },
  {
    name: "4",
    img: "/Memory/22cards/4.webp",
  },
  {
    name: "5",
    img: "/Memory/22cards/5.webp",
  },
  {
    name: "6",
    img: "/Memory/22cards/6.webp",
  },

  {
    name: "7",
    img: "/Memory/22cards/7.webp",
  },
  {
    name: "8",
    img: "/Memory/22cards/8.webp",
  },
  {
    name: "9",
    img: "/Memory/22cards/9.webp",
  },
  {
    name: "10",
    img: "/Memory/22cards/10.webp",
  },
  {
    name: "11",
    img: "/Memory/22cards/11.webp",
  },
  {
    name: "12",
    img: "/Memory/22cards/12.webp",
  },
  {
    name: "1",
    img: "/Memory/22cards/1.webp",
  },
  {
    name: "2",
    img: "/Memory/22cards/2.webp",
  },
  {
    name: "3",
    img: "/Memory/22cards/3.webp",
  },
  {
    name: "4",
    img: "/Memory/22cards/4.webp",
  },
  {
    name: "5",
    img: "/Memory/22cards/5.webp",
  },
  {
    name: "6",
    img: "/Memory/22cards/6.webp",
  },

  {
    name: "7",
    img: "/Memory/22cards/7.webp",
  },
  {
    name: "8",
    img: "/Memory/22cards/8.webp",
  },
  {
    name: "9",
    img: "/Memory/22cards/9.webp",
  },
  {
    name: "10",
    img: "/Memory/22cards/10.webp",
  },
  {
    name: "11",
    img: "/Memory/22cards/11.webp",
  },
  {
    name: "12",
    img: "/Memory/22cards/12.webp",
  },
]);

const cardsChosen = ref([]);
const cardsChosenId = ref([]);
const moves = ref(0);
let timeElapsed = ref(0); // includes game time
let timeRunning = ref(false);
let timerInterval = null;
const chosenCardArray = ref([]);

// function for choose arrays
const setChosenCardArray = cards => {
  chosenCardArray.value = cards;
};
setChosenCardArray(cardArrayEasy.value);

// 1.this sort card random way
chosenCardArray.value.sort(() => 0.5 - Math.random());

//3. function for check macht
const checkForMatch = () => {
  const [optionOneId, optionTwoId] = cardsChosenId.value;
  const [cardOneName, cardTwoName] = cardsChosen.value;
  const cards = document.querySelectorAll(".grid img");
  // you have macht
  if (cardOneName === cardTwoName) {
    cards[optionOneId].classList.add("hidden");
    cards[optionTwoId].classList.add("hidden");
  } else {
    // if dony have macht
    chosenCardArray.value[optionOneId].flipped = false;
    chosenCardArray.value[optionTwoId].flipped = false;
  }
  cardsChosen.value = [];
  cardsChosenId.value = [];
  // Check if all tabs are hidden (have class hidden)
  const allCardsHidden = Array.from(cards).every(card =>
    card.classList.contains("hidden")
  );
  //FOR END GAME - if all cards are revelead
  if (allCardsHidden) {
    console.log(allCardsHidden, "odkryłes wszytskie karty");
    const finalTime = formatTime(timeElapsed.value);
    const movesCount = moves.value;
    console.log("koniec gry ");
    finalpopup.value = true;

    toggleTimer(false);
  }
};

// 2.Revealing cards
function flipCard(index) {
  // start time
  if (!timeRunning.value) {
    toggleTimer();
  }
  const cardId = index;
  const selectedCard = chosenCardArray.value[index];

  // flip card
  chosenCardArray.value[index].flipped = true;
  moves.value++;
  cardsChosen.value.push(selectedCard.name);
  cardsChosenId.value.push(cardId);
  // check macht and satrt setTimeout
  if (cardsChosen.value.length === 2) {
    setTimeout(checkForMatch, 1000);
  }
}

// 4. Format of Time
function formatTime(time) {
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}

// Time meter
const toggleTimer = () => {
  if (timeRunning.value) {
    clearInterval(timerInterval);
  } else {
    timerInterval = setInterval(() => {
      timeElapsed.value++;
    }, 1200);
  }
  timeRunning.value = !timeRunning.value;
};

// Reset Game
function resetGame() {
  cardsChosen.value = [];
  cardsChosenId.value = [];
  moves.value = 0;
  timeElapsed.value = 0;
  clearInterval(timerInterval);

  chosenCardArray.value.sort(() => 0.5 - Math.random());
  chosenCardArray.value.forEach(card => {
    card.flipped = false;
  });

  const cards = document.querySelectorAll(".grid img.hidden");
  cards.forEach(card => {
    card.classList.remove("hidden");
  });
}
</script>

<template>
  <div class="box">
    <div class="board">
      <!-- levels buttons-->
      <div class="changeVisibility">
        <div class="levels">
          <h2>Yor level:</h2>
          <button
            @click="setChosenCardArray(cardArrayEasy)"
            :class="{ easy: chosenCardArray === cardArrayEasy }"
          >
            Easy 12 cards
          </button>
          <button
            @click="setChosenCardArray(cardArrayMedium)"
            :class="{ medium: chosenCardArray === cardArrayMedium }"
          >
            Medium 14 cards
          </button>
          <button
            @click="setChosenCardArray(cardArrayHard)"
            :class="{ hard: chosenCardArray === cardArrayHard }"
          >
            Hard 16 cards
          </button>
        </div>

        <!-- reset/start buttons -->
        <div class="reset_TimeBtns">
          <button @click="resetGame">Reset Game</button>
          <button @click="toggleTimer">
            {{ timeRunning ? "Stop Time" : "StartTime" }}
          </button>
        </div>
      </div>

      <div class="game-info">
        <p>
          Moves: <span id="moves"> {{ moves }}</span>
        </p>
        <p>
          <span id="time">Time: {{ formatTime(timeElapsed) }}</span>
        </p>
      </div>

      <!-- main board  -->
      <div class="grid">
        <div
          v-for="(card, index) in chosenCardArray"
          :key="index"
          @click="flipCard(index)"
        >
          <img
            :src="card.flipped ? card.img : '/Memory/blank.webp'"
            :data-id="card.name"
            class="card-image"
          />
        </div>
      </div>

      <!-- Final popup -->
      <transition name="popup">
        <FinalPopup class="finalPopup" v-if="finalpopup">
          <div class="final">
            <p>You Moves:</p>
            <span>{{ moves }}</span>
            <p>Your Time:</p>
            <span>{{ formatTime(timeElapsed) }}</span>
            <!-- <br /> -->
          </div>
          <button class="closeButton" @click="finalpopup = false">Close</button>
        </FinalPopup>
      </transition>
      <!--  -->

      <!-- <button class="Button" @click="finalpopup = true">open</button> -->
    </div>
  </div>
</template>

<style>
.box {
  font-family: "Orbitron", sans-serif;
  color: var(--orange-primary);
  padding: 5em 4em;
  background: var(--bg-color);
  height: 100%;
}
button {
  font-family: "Orbitron", sans-serif;
}
.board {
  text-align: center;
}

/* animation for levels buttons */
.changeVisibility {
  animation: hiddenLevels linear forwards;
  animation-timeline: view();
  animation-range-start: 90vh;
  animation-range-end: 100vh;
}

@keyframes hiddenLevels {
  100% {
    opacity: 10%;
  }
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
  cursor: pointer;
}
.reset_TimeBtns button {
  margin: 2rem 0.5rem;
  padding: 0.7rem;
  font-weight: 600;
  background-color: var(--orange-primary);
  color: var(--blue-color);
  border-color: var(--blue-color);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}
.game-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: var(--blue-color);
  font-weight: bold;
  font-size: 1.5rem;
}
.grid img {
  width: 7.5rem;
  height: 7rem;
  margin: 5px;
  align-self: center;
  cursor: pointer;
}
.grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  width: 60%;
}
.grid h1 {
  text-align: center;
  padding: 5rem;
}

/*** active class for levels buttons ***/
.hidden {
  visibility: hidden;
}
.easy {
  background-color: green !important;
  color: var(--blue-color) !important;
  font-weight: bold !important;
}
.medium {
  background-color: #f4f80c !important;
  color: var(--blue-color) !important;
  font-weight: bold !important;
}
.hard {
  background-color: rgb(224, 43, 88) !important;
  color: var(--blue-color) !important;
  font-weight: bold !important;
}

/* for Final popUp */
.final p {
  font-size: 20px;
  font-weight: bold;
  color: white;
}

span {
  font-weight: 800;
  font-size: 20px;
}

.closeButton {
  border-radius: 10px;
  border-color: var(--orange-primary);
  background-color: var(--orange-primary);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: var(--blue-color);
  font-weight: 800;
  padding: 20px;
  margin: 4em;
}

/* ========== @media screen =================*/
@media screen and (min-width: 2560px) {
  .changeVisibility {
    margin-top: 5rem;
  }

  .grid {
    width: 50%;
  }
  .grid img {
    width: 10rem;
    height: 10rem;
  }
}
@media screen and (max-width: 1440px) {
  .grid {
    width: 60%;
  }
}

@media screen and (max-width: 1024px) {
  .grid {
    width: 100%;
  }
}
@media screen and (max-width: 834px) {
  .box {
    padding: 5em 0 1em;
  }

  .grid img {
    width: 6.3rem;
    height: 6.3rem;
  }
}

@media screen and (max-width: 600px) {
  .grid img {
    width: 5em;
    height: 5em;
  }

  .game-info {
    p {
      font-size: 15px;
    }
  }
}

@media screen and (max-width: 428px) {
  .box {
    padding: 5em 0 1em 0;
  }

  .reset_TimeBtns button {
    font-size: 10px;
    padding: 6px;
  }

  .game-info {
    font-size: 1em;
  }
  .grid {
    width: 90%;
  }

  .grid img {
    width: 5rem;
    height: 5rem;
    margin: 1px 2px;
  }
}

@media screen and (max-width: 375px) {
  h2 {
    font-size: 18px;
  }

  .levels button {
    padding: 0.5em 0.3em;
    margin: 0.6em;
    width: 5em;
    font-size: 12px;
  }

  .grid img {
    width: 3.5rem;
    height: 3.5rem;
  }
}
@media screen and (max-width: 320px) {
  .game-info {
    font-size: 0.7em;
  }
  .grid img {
    width: 3rem;
    height: 3rem;
  }
}
</style>
