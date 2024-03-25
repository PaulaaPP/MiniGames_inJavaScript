<script setup>
import { Icon } from "@iconify/vue";
import { ref, watch } from "vue";

import Victory from "../Games/Victory.vue";
import Defet from "./Defet.vue";
import Draw from "./Draw.vue";

const victoryPopup = ref(false);
const defetPopup = ref(false);
const drawPopup = ref(false);

const computerChoice = ref("");
const userChoice = ref("");
const result = ref(null);
const round = ref(0);

const userWins = ref(0);
let computerWins = ref(0);
const possibleChoices = ["rock", "paper", "scissors"]; // buttons

const Popup = {
  Victory,
  Defet,
  Draw,
};

// wacher for caling final function
watch([userWins, computerWins], () => {
  checkFinalResult();
});

// watcher for displaying  popup finall result after 3 rounds
watch(round, newValue => {
  if (newValue === 3) {
    const finalResult = checkFinalResult();
    if (finalResult === "win") {
      victoryPopup.value = true;
    } else if (finalResult === "lose") {
      defetPopup.value = true;
    } else if (finalResult === "draw") {
      drawPopup.value = true;
    }
  }
});

// function v-for; calculate result and caling fn.generateComputerChoice and  calculateResult();
const makeChoice = choice => {
  userChoice.value = choice;
  computerChoice.value = generateComputerChoice();
  getResult();

  round.value++;
};

// function for computer choice
const generateComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * possibleChoices.length);
  const randomComputerChoice = possibleChoices[randomIndex];
  return randomComputerChoice;
};

// function to calculate user/computer movements
const getResult = () => {
  switch (userChoice.value + computerChoice.value) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      result.value = "You win!";
      console.log(result.value);
      userWins.value++;
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      result.value = "Computer wins!";
      console.log(result.value);
      computerWins.value++;
      break;
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      result.value = "It's a draw!";
      console.log(result.value);
      break;
  }
};

// Final result game after 3 rounds
const checkFinalResult = () => {
  if (round.value === 3) {
    if (userWins.value > computerWins.value) {
      result.value = "FINALY: You win the game!";
      return "win";
    }
    if (userWins.value < computerWins.value) {
      result.value = "FINALY: Computer wins the game!";
      return "lose";
    } else {
      result.value = "FINALY: It's a draw!";
      return "draw";
    }
  }
};

// Reset Game
const resetGame = () => {
  round.value = 0;
  userWins.value = 0;
  computerWins.value = 0;
  userChoice.value = "";
  computerChoice.value = "";
  result.value = null;
};

// Set icon based on the choice
const getIconClass = choice => {
  switch (choice) {
    case "rock":
      return "game-icons:rock";
    case "paper":
      return "mdi:paper";
    case "scissors":
      return "heroicons:scissors-16-solid";
    default:
      return "";
  }
};
</script>

<template>
  <div class="box">
    <div class="arena">
      <!-- players row -->
      <div class="players">
        <h2 class="computer">Computer</h2>
        <!--  -->
        <div class="round">
          <p>Round</p>
          <span>{{ round }}</span>
        </div>

        <h2>User</h2>
      </div>

      <!-- choises players row -->
      <div class="choicePlayers">
        <div class="centerChoice">
          <Icon :icon="getIconClass(computerChoice)" />
          <span>{{ computerChoice }} </span>
        </div>

        <p>
          <img src="../../assets/image/VS.png" alt="vs" />
        </p>

        <div class="centerChoice">
          <Icon :icon="getIconClass(userChoice)" />
          <span class="user">{{ userChoice }} </span>
        </div>
      </div>

      <!-- buttons  choise  row-->
      <div class="result">
        <h2>Result</h2>
        <span>{{ result }}</span>
      </div>

      <div class="buttonChoises">
        <button
          v-for="choice in possibleChoices"
          @click="makeChoice(choice)"
          :key="choice"
        >
          <Icon v-if="choice === 'rock'" icon="game-icons:rock" width="3rem" />
          <Icon v-else-if="choice === 'paper'" icon="mdi:paper" width="3rem" />
          <Icon
            v-else-if="choice === 'scissors'"
            icon="heroicons:scissors-16-solid"
            width="3rem"
          />
        </button>
      </div>

      <!-- Popup Victory -->
      <transition name="popup" appear>
        <Victory class="victory" v-if="victoryPopup">
          <div>
            <button class="closeButton" @click="victoryPopup = false">
              Close
            </button>
          </div>
        </Victory>
      </transition>

      <!-- Popup Defet-->
      <transition name="popup">
        <Defet class="defet" v-if="defetPopup">
          <div>
            <button class="closeButton" @click="defetPopup = false">
              Close
            </button>
          </div>
        </Defet>
      </transition>
      <!-- Popup Draw-->
      <transition name="popup">
        <Draw class="draw" v-if="drawPopup">
          <div>
            <button class="closeButton" @click="drawPopup = false">
              Close
            </button>
          </div>
        </Draw>
      </transition>
      <button class="resetBtn" @click="resetGame">Reset Game</button>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap");

.box {
  font-family: "Orbitron", sans-serif;
  color: white;
  padding: 5rem;
  background-color: rgba(0, 0, 0, 0.137);
  height: 1000%;
}
.arena {
  margin: 5em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.centerChoice {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 19px;
  font-weight: 700;
  margin: 0 12px;
}

p img {
  height: 80px;
}

.players {
  display: flex;
  gap: 5em;
}

.round,
.result {
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  color: #ffe74c;
  -webkit-text-stroke: 1px var(--red-border);
}

.result {
  height: 115px;
}

.players h2 {
  text-align: center;
  padding: 24px 10px;
  border-radius: 15px;
  background-color: var(--blue-bg);
  font-size: 19px;
  font-weight: 800;
  color: var(--blue-dark);
  width: 100px;
  border: solid 1px var(--pink-primary);
  box-shadow: var(--pink-primary) 0px 0px 10px;
}
.choicePlayers {
  display: flex;
  gap: 5em;
  margin-top: 5em;
}
.choicePlayers span {
  -webkit-text-stroke: 1px var(--blue-bg);
  color: transparent;
}
.result {
  margin: 2em 5em;
  text-align: center;
}
.centerChoice svg {
  color: #ffe74c;
  width: 50px;
  text-align: center;
  height: 80px;
  width: 120px;
  text-align: center;
}
.buttonChoises svg {
  color: var(--blue-bg);
}

.buttonChoises button {
  padding: 5px;
  margin: 0 2em 2em;
  background-color: var(--blue-primary);
  border: solid 1px var(--pink-primary);
  border-radius: 5px;
  box-shadow: var(--pink-primary) 0px 0px 10px;
}

.victory,
.defet,
.draw {
  text-align: center;
}

.victory button,
.defet button,
.draw button {
  padding: 10px;
  background-color: #e0aa1b;
  color: #4c3f1d;
  font-weight: 800;
  border: solid 2px #4c3f1d;
  border-radius: 5px;
  box-shadow: #4c3f1d9a 1px 1px 13px;
}

.resetBtn {
  font-family: "Orbitron", sans-serif;
  font-size: 15px;
  font-weight: 800;
  color: var(--blue-dark);
  background-color: var(--blue-bg);
  border: solid 2px var(--pink-primary);
  box-shadow: var(--pink-primary) 0px 0px 10px;
  border-radius: 15px;
  margin: 2.5em 5em;
  padding: 15px;
}

/* style fot transition */

.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.5s;
}
.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}

/* ***  MEDIA QUERIES *** */
@media screen and (max-width: 1280px) {
  .arena {
    margin: 2em 0;
  }

  .choicePlayers {
    gap: 0.5em;
    margin-top: 4em;
  }

  .resetBtn {
    margin: 3em 2em;
  }

  .popup-content img {
    height: 500px;
  }
}

@media screen and (max-width: 1024px) {
  .arena {
    margin: 5em 0;
  }

  .choicePlayers {
    margin-top: 4em;
  }

  .result {
    margin: 1em 5em;
    font-size: 15px;
  }
}

/* ***  TABLETS *** */
@media screen and (max-width: 768px) {
  .arena {
    margin: 5em 0;
  }

  .choicePlayers {
    margin-top: 4em;
  }

  .centerChoice svg {
    height: 63px;
    width: 126px;
  }

  .result {
    margin: 1em 5em;
    font-size: 15px;
  }
}

/* ***  MOBILE *** */
@media screen and (max-width: 428px) {
  .arena {
    margin: 3em 0;
  }

  p img {
    height: 72px;
  }

  .round,
  .result {
    font-size: 15px;
  }

  .result {
    font-size: 10px;
    margin: 2em 0px -20px 0px;
  }

  .players {
    gap: 2em;
  }

  .players h2 {
    padding: 22px 1px;
    font-size: 14px;
    width: 81px;
  }

  .choicePlayers {
    gap: 0.5em;
    margin-top: 4em;
  }

  .centerChoice {
    gap: 8px;
    font-size: 15px;
    margin: 0 12px;
  }

  .centerChoice svg {
    height: 63px;
    width: 126px;
  }

  .buttonChoises {
    display: flex;
    width: 80vw;
    justify-content: center;
  }

  .buttonChoises button {
    margin: 0px 10px;
  }

  .popup-content img {
    height: 300px;
  }

  .resetBtn {
    font-size: 12px;
    margin: 4em 3em;
    padding: 7px;
  }
}

@media screen and (max-width: 320px) {
  .arena {
    margin: 1em 0;
  }

  .result {
    font-size: 8px;
    margin: -2em 0px -40px 0px;
  }

  .centerChoice {
    margin: 0px;
  }

  .buttonChoises {
    width: 150%;
  }

  .buttonChoises button {
    margin: 1px 9px;
  }

  .buttonChoises svg {
    height: 2.5em;
  }

  .choicePlayers {
    margin-top: 2em;
  }

  .players h2 {
    padding: 14px 1px;
    font-size: 13px;
    width: 76px;
  }

  .centerChoice svg {
    height: 50px;
    width: 126px;
  }

  .popup-content img {
    height: 200px;
  }
  .resetBtn {
    font-size: 11px;
    margin: 3em 2em;
    padding: 7px;
  }
}
</style>
