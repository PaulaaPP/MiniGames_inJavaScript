<script setup>
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";

const squaresArray = ref([]); //all divs for the battle area
let currentShooterIndex = ref(100);
let currentLaserIndex = ref(null);
let width = 20;
let goingRight = true; // define direction of invaders
let invadersId;
let shootingInterval;
let gameStart = false;
const resultGame = ref(null);
const openModal = ref(true);
const selectedDifficulty = ref("");

// Funkcja do aktualizacji wartości w zależności od szerokości okna
const updateValues = () => {
  if (window.innerWidth <= 768) {
    width = 12;
    currentShooterIndex.value = 135;
  } else {
    width = 12;
    currentShooterIndex.value = 140;
  }
};

// size of battle area
for (let i = 0; i < 225; i++) {
  squaresArray.value.push(i);
}

// number of alien
const alienInvaders = ref([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
]);

// Move shooter based on arrow key presses
const moveShooter = e => {
  if (e.code === "ArrowLeft" && currentShooterIndex.value % width !== 0) {
    currentShooterIndex.value -= 1;
  } else if (
    e.code === "ArrowRight" &&
    currentShooterIndex.value % width < width - 1
  ) {
    currentShooterIndex.value += 1;
    gameStart = true;
  }
};

// Move invaders
const moveInvaders = () => {
  if (!gameStart) {
    return;
  }

  const leftEdge = alienInvaders.value[0] % width === 0;
  const rightEdge =
    alienInvaders.value[alienInvaders.value.length - 1] % width === width - 1;

  if ((leftEdge && goingRight) || (rightEdge && !goingRight)) {
    goingRight = !goingRight;
    alienInvaders.value = alienInvaders.value.map(index => index + width);
  } else {
    alienInvaders.value = alienInvaders.value.map(
      index => index + (goingRight ? 1 : -1)
    );
  }

  // Check if Games is Over
  if (
    alienInvaders.value.some(
      invaderIndex => invaderIndex === currentShooterIndex.value
    ) ||
    alienInvaders.value.some(
      invaderIndex => invaderIndex > currentShooterIndex.value
    )
  ) {
    checkResulGame();
  }
};

// Shoot function
const shoot = () => {
  currentLaserIndex.value = currentShooterIndex.value;

  const shootLaser = () => {
    if (currentLaserIndex.value >= width) {
      currentLaserIndex.value -= width;
      //check if invaders is shoot
      if (alienInvaders.value.includes(currentLaserIndex.value)) {
        const invaderIndex = alienInvaders.value.indexOf(
          currentLaserIndex.value
        );
        alienInvaders.value.splice(invaderIndex, 1);
      }
      // check if all invaders are eliminated = Win Game
      if (alienInvaders.value.length === 0) {
        clearInterval(laserId);
        checkResulGame();
      }

      if (currentLaserIndex.value < width) {
        clearInterval(laserId);
        currentLaserIndex.value = null;
      }
    }
  };

  const laserId = setInterval(shootLaser, 200);
};

// Final Result
const checkResulGame = () => {
  if (alienInvaders.value.length === 0) {
    resultGame.value = "You Win";
  } else {
    clearInterval(invadersId);
    resultGame.value = "Game Over ";
  }
};

// Level of game
function startGame(difficulty) {
  switch (difficulty) {
    case "easy":
      shootingInterval = 400;
      break;
    case "medium":
      shootingInterval = 300;
      break;
    case "hard":
      shootingInterval = 250;
      break;
    default:
      // shootingInterval = 600;
      break;
  }

  return shootingInterval;
}

const resetGame = () => {
  // clearInterval(invadersId);
  gameStart = false;
  resultGame.value = null;
  currentLaserIndex = ref(null);
  alienInvaders.value = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 24,
    25, 26, 27, 28, 29, 30, 31, 32, 33,
  ];
};

// button levels
function setDifficulty(difficulty) {
  clearInterval(invadersId);
  selectedDifficulty.value = difficulty;
  gameStart = true;
  invadersId = setInterval(moveInvaders, startGame(difficulty));
  selectLevel();
}

const selectLevel = () => {
  openModal.value = !openModal.value;
};

// Event listeners
onMounted(() => {
  document.addEventListener("keydown", e => {
    moveShooter(e);
    if (e.code === "Space") {
      shoot();
    }
  });
});

onMounted(() => {
  document.addEventListener("keydown", moveShooter);
  invadersId = setInterval(moveInvaders, 400);
});

onMounted(() => {
  window.addEventListener("resize", updateValues);
  updateValues();
});
//
//
// Nowe metody dla przycisków
const moveShooterLeft = () => {
  if (currentShooterIndex.value % width !== 0) {
    currentShooterIndex.value -= 1;
  }
  console.log("left");
};

const moveShooterRight = () => {
  if (currentShooterIndex.value % width < width - 1) {
    currentShooterIndex.value += 1;
    gameStart = true;
  }

  console.log("right");
};

const shootLaser = () => {
  shoot();
  console.log("shoottt");
};
</script>

<template>
  <div>
    <div class="container">
      <div class="box">
        <div class="buttonsArea">
          <button @click="resetGame" class="resetBtn">Reste Game</button>
          <button @click="selectLevel" class="selectBtn">Select Level</button>
          <!--  -->
          <div v-if="!openModal" class="levelsBtn">
            <button
              @click="setDifficulty('easy')"
              :class="{ selectBtnLevel: selectedDifficulty === 'easy' }"
            >
              Easy
            </button>
            <button
              @click="setDifficulty('medium')"
              :class="{ selectBtnLevel: selectedDifficulty === 'medium' }"
            >
              Medium
            </button>
            <button
              @click="setDifficulty('hard')"
              :class="{ selectBtnLevel: selectedDifficulty === 'hard' }"
            >
              Hard
            </button>
          </div>

          <h1
            v-show="checkResulGame"
            :style="{ color: resultGame === 'You Win' ? '#8FE600' : 'red' }"
          >
            {{ resultGame }}
          </h1>
        </div>

        <!--  -->
        <div class="battleArea">
          <div class="grid">
            <div
              v-for="(squares, index) in squaresArray"
              :key="index"
              :class="{
                square: true,
                laser: index === currentLaserIndex,
                shooter: index === currentShooterIndex,
              }"
            >
              <Icon
                v-if="alienInvaders.includes(index)"
                icon="mdi:space-invaders"
                class="invader"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- buttons for mobile devices -->
    <div class="mobileBtns">
      <div class="shootBtn">
        <button @click="shootLaser">Shoot</button>
      </div>
      <div class="leftRightBtns">
        <button @click="moveShooterLeft">←</button>
        <button @click="moveShooterRight">→</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 12em;
}

.box {
  display: flex;
}

/* buttons level */
.buttonsArea {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2em;
}

.buttonsArea button {
  background-color: var(--blue-500);
  border: 2px solid var(--blue-dark);
  border-radius: 10px;
  padding: 0.5em;
  font-size: 1em;
  font-weight: 700;
  margin: 0.5em 0;
}
.resetBtn {
  padding: 0.5em;
}

.resetBtn,
.selectBtn {
  color: var(--orange-primary);
}
.levelsBtn button {
  display: flex;
  flex-direction: column;
  color: white;
  margin: 1em;
}

.selectBtnLevel {
  background-color: var(--orange-primary) !important;
}

/* Battle area styles */
.battleArea {
  width: 70%;
  margin: auto;
}

.grid div {
  width: 50px;
  height: 50px;
}
.grid {
  width: 600px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
}
.invader {
  background-size: cover;
  background-position: center;
  font-size: 35px;
  color: rgb(145, 235, 11);
}

.square.shooter {
  background-image: url("../../../assets/image/SpaceInvaders/Ship.webp");
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;
}

div .laser {
  background: rgb(240, 251, 63);
  background: radial-gradient(
    circle,
    rgba(240, 251, 63, 1) 0%,
    rgba(252, 82, 70, 1) 100%
  );
  width: 20px;
  height: 20px;
  border-radius: 60%;
}

/* control buttons for mobile
 */
.mobileBtns {
  display: none;
}
.mobileBtns button {
  background-color: var(--blue-500);
  color: var(--orange-primary);
  border: 2px solid var(--blue-dark);
  border-radius: 10px;
  padding: 0.5em;
  font-size: 20px;
}

.leftRightBtns button {
  margin: 0 1em;
}

/* screen size */
@media screen and (max-width: 768px) {
  .container {
    margin-top: 5em;
  }
  .box {
    display: flex;
    flex-direction: column;
  }

  .grid {
    width: 300px;
    height: 300px;
  }
  .grid div {
    width: 25px;
    height: 25px;
  }

  .buttonsArea {
    height: 10em;
  }

  .buttonsArea button {
    padding: 0.5em;
    font-size: 0.8em;
    font-weight: 600;
  }

  .battleArea {
    width: 100%;
    margin: auto;
  }

  .levelsBtn {
    display: flex;
    flex-direction: row;
  }

  .invader {
    font-size: 17px;
  }

  .square.shooter {
    width: 25px;
    height: 25px;
  }

  div .laser {
    width: 10px;
    height: 15px;
  }

  /* control buttons for mobile
 */
  .mobileBtns {
    display: flex;
    justify-content: space-between;
    margin: 9em 1em;
  }
}

@media screen and (max-width: 375px) {
  .buttonsArea {
    height: 8em;
  }

  .mobileBtns {
    margin: 2em 0.5em;
  }

  .mobileBtns button {
    font-size: 1em;
  }
}

@media screen and (max-width: 320px) {
  .buttonsArea button {
    font-size: 0.6em;
  }
  .buttonsArea {
    height: 5em;
  }

  .mobileBtns {
    margin: 0 0.5em;
  }
}
</style>
