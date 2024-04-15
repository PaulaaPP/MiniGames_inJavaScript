<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";

const squaresArray = ref([]); //all divs for the battle area
let currentShooterIndex = ref(202);
let currentLaserIndex = ref(null); // Define currentLaserIndex here
let width = 15;
let goingRight = true; // Zmienna określająca kierunek ruchu obcych
let invadersId;
const invadersMoving = ref(true);
const resultGame = ref(false);

// size of battle area
for (let i = 0; i < 225; i++) {
  squaresArray.value.push(i);
}

// number of alien
const alienInvaders = ref([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39,
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
  }
};

// Move invaders
const moveInvaders = () => {
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

  // check if is Game Ocer
  if (
    alienInvaders.value.some(
      invaderIndex => invaderIndex === currentShooterIndex.value
    )
  ) {
    clearInterval(invadersId);
    resultGame.value = true;

    console.log("Game!!!!Over!");
    // gameOver();
  }
};

// Shoot function
const shoot = () => {
  currentLaserIndex.value = currentShooterIndex.value;

  const shootLaser = () => {
    if (currentLaserIndex.value >= width) {
      currentLaserIndex.value -= width;

      if (alienInvaders.value.includes(currentLaserIndex.value)) {
        const invaderIndex = alienInvaders.value.indexOf(
          currentLaserIndex.value
        );
        alienInvaders.value.splice(invaderIndex, 1);
      }

      if (currentLaserIndex.value < width) {
        clearInterval(laserId);
        currentLaserIndex.value = null;
      }
    }
  };

  const laserId = setInterval(shootLaser, 200);
};

// Function to shoot lasers

let shootingInterval; // Zmienna globalna
function startGame(difficulty) {
  switch (difficulty) {
    case "easy":
      shootingInterval = 900;
      break;
    case "medium":
      shootingInterval = 300;
      break;
    case "hard":
      shootingInterval = 150;
      break;
    default:
      shootingInterval = 600;
      break;
  }
  return shootingInterval; // Zwracanie interwału do uruchomienia funkcji moveInvaders()
}

// Stop /Start moving invaders
const startStopInavders = () => {
  invadersMoving.value = !invadersMoving.value;
  if (invadersMoving.value) {
    invadersId = setInterval(moveInvaders, 300);
  } else {
    clearInterval(invadersId);
  }
};

const resetGame = () => {
  clearInterval(invadersId);
  // invadersMoving.value = false;
  alienInvaders.value = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39,
  ];
};

const easy = () => {
  clearInterval(invadersId);
  // resetGame();
  invadersId = setInterval(moveInvaders, startGame("easy"));
  console.log("easy");
};

const medium = () => {
  clearInterval(invadersId);
  // resetGame();
  invadersId = setInterval(moveInvaders, startGame("medium"));
  console.log("medium");
};

const hard = () => {
  clearInterval(invadersId);
  // resetGame();
  invadersId = setInterval(moveInvaders, startGame("hard"));
  console.log("hard");
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
  invadersId = setInterval(moveInvaders, 500);
});
</script>

<template>
  <div>
    <div class="container">
      <h1 v-if="resultGame" class="results">GAME OVER</h1>
      <div class="grid">
        <div
          v-for="(squares, index) in squaresArray"
          :key="index"
          :class="{
            square: true,
            // invader: alienInvaders.includes(index),
            shooter: index === currentShooterIndex,
            laser: index === currentLaserIndex,
          }"
        >
          <!-- Wyświetlenie ikony na pozycji strzelca -->
          <Icon
            v-if="alienInvaders.includes(index)"
            icon="mdi:space-invaders"
            width="2rem"
            height="2rem"
            class="lol"
          />
        </div>
      </div>

      <button @click="startStopInavders">
        {{ invadersMoving ? "Stop" : "Start" }}
      </button>
      <button @click="resetGame">Reste Game</button>
      <br />
      <button @click="easy">Łatwy</button>
      <button @click="medium">Średni</button>
      <button @click="hard">Trudny</button>
    </div>

    <Icon icon="mdi:space-invaders" width="7rem" height="7rem" class="lol" />
  </div>
</template>

<style scoped>
.lol {
  color: greenyellow;
}
.container {
  margin-top: 10em;
  color: white;
}

.grid {
  width: 300px;
  height: 300px;
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
  background-color: rgb(168, 211, 11);
  border-radius: 10px;
}

.shooter {
  background-color: rgb(188, 20, 230);
}

.laser {
  background-image: url(./assets/image/SpaceInvaders/alien.web);
  background-color: red;
  color: red;
  background-size: cover;
  background-position: center;
  width: 5px;
}

.boom {
  color: yellow;
  background-color: blue;
  /* background-image: url(./boom.jpg); */
  background-size: cover;
}

/* i {
  width: 200px;
} */
</style>
