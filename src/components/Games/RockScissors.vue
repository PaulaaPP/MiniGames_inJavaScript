<script setup>
import { ref, watch } from "vue";

const computerChoice = ref("");
const userChoice = ref("");
const result = ref(null);
const round = ref(0);

const userWins = ref(0);
let computerWins = ref(0);
const possibleChoices = ["rock", "paper", "scissors"]; // buttons

// wacher for fcaling final function
watch([userWins, computerWins], () => {
  checkFinalResult();
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
      return "fa-solid fa-star"; // Icon for rock
    case "paper":
      return "fa-solid fa-circle"; // Icon for paper
    case "scissors":
      return "fa-solid fa-square"; // Icon for scissors
    default:
      return "";
  }
};
</script>

<template>
  <div class="box">
    <!--  -->
    <div class="arena">
      <!--  -->
      <div class="players">
        <h2 class="computer">Computer</h2>
        <!--  -->
        <div class="round">
          <p>round</p>
          <span>{{ round }}</span>
        </div>

        <h2>User</h2>
      </div>

      <div class="choicePlayers">
        <span
          >{{ computerChoice }}<i :class="getIconClass(computerChoice)"></i
        ></span>
        <p>VS</p>
        <span class="user"
          >{{ userChoice }} <i :class="getIconClass(userChoice)"></i
        ></span>
      </div>

      <!-- <div class="users"></div> -->
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
          <i v-if="choice === 'rock'" class="fa-solid fa-star"></i>
          <!-- Icon for rock -->
          <i v-else-if="choice === 'paper'" class="fa-solid fa-circle"></i>
          <!-- Icon for paper -->
          <i v-else-if="choice === 'scissors'" class="fa-solid fa-square"></i>
          <!-- Icon for scissors -->
        </button>
      </div>
      <button @click="resetGame">Reset Game</button>
    </div>

    <!-- <p>Tablica wynków rozgrywki/ rozgrywek</p> -->
  </div>
</template>

<style>
.box {
  /* font-family: "Nunito", sans-serif; */
  color: white;
  padding: 5rem;
}
.arena {
  margin: 5em 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* background-color: rgba(70, 68, 67, 0.438); */
}

.players {
  display: flex;
  gap: 5em;
}

.round {
  text-align: center;
}

.players h2 {
  padding: 15px;
  border-radius: 10px;
  background-color: #81f6f5;
  font-size: 20px;
  color: #0d61b2;
}
.choicePlayers {
  display: flex;
  gap: 5em;
  margin-top: 5em;
}
.result {
  margin: 2em 5em;
  text-align: center;
}

button {
  margin: 1em;
}
21 .buttonChoises i {
  padding: 1em;
}
.win {
  color: green;
}

.lose {
  color: red;
}

.draw {
  color: rgb(4, 0, 255);
}

/* .user {
  background-image: url(../../assets/image/img1.jpg);
  width: 100px;
  height: 100px;
  background-position: center;
} */
</style>
