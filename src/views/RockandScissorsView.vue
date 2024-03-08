<script setup>
import RockScissors from "../components/Games/RockScissors.vue";
// import { ref, watch } from "vue";

// const computerChoice = ref("");
// const userChoice = ref("");
// const result = ref(null);
// const round = ref(0);

// const userWins = ref(0);
// let computerWins = ref(0);
// const possibleChoices = ["rock", "paper", "scissors"]; // buttons

// // wacher for fcaling final function
// watch([userWins, computerWins], () => {
//   checkFinalResult();
// });

// // function v-for; calculate result and caling fn.generateComputerChoice and  calculateResult();
// const makeChoice = choice => {
//   userChoice.value = choice;
//   computerChoice.value = generateComputerChoice();
//   getResult();

//   round.value++;
// };

// // function for computer choice
// const generateComputerChoice = () => {
//   const randomIndex = Math.floor(Math.random() * possibleChoices.length);
//   const randomComputerChoice = possibleChoices[randomIndex];
//   return randomComputerChoice;
// };

// // function to calculate user/computer movements
// const getResult = () => {
//   switch (userChoice.value + computerChoice.value) {
//     case "scissorspaper":
//     case "rockscissors":
//     case "paperrock":
//       result.value = "You win!";
//       console.log(result.value);
//       userWins.value++;
//       break;
//     case "paperscissors":
//     case "scissorsrock":
//     case "rockpaper":
//       result.value = "Computer wins!";
//       console.log(result.value);
//       computerWins.value++;
//       break;
//     case "paperpaper":
//     case "scissorsscissors":
//     case "rockrock":
//       result.value = "It's a draw!";
//       console.log(result.value);
//       break;
//   }
// };

// // Final result game after 3 rounds
// const checkFinalResult = () => {
//   if (round.value === 3) {
//     if (userWins.value > computerWins.value) {
//       result.value = "FINALY: You win the game!";
//       return "win";
//     }
//     if (userWins.value < computerWins.value) {
//       result.value = "FINALY: Computer wins the game!";
//       return "lose";
//     } else {
//       result.value = "FINALY: It's a draw!";
//       return "draw";
//     }
//   }
// };

// // Reset Game
// const resetGame = () => {
//   round.value = 0;
//   userWins.value = 0;
//   computerWins.value = 0;
//   userChoice.value = "";
//   computerChoice.value = "";
//   result.value = null;
// };

// // Set icon based on the choice
// const getIconClass = choice => {
//   switch (choice) {
//     case "rock":
//       return "fa-solid fa-star"; // Icon for rock
//     case "paper":
//       return "fa-solid fa-circle"; // Icon for paper
//     case "scissors":
//       return "fa-solid fa-square"; // Icon for scissors
//     default:
//       return "";
//   }
// };
</script>

<template>
  <div class="container">
    <RockScissors />
  </div>
</template>

<style>
.container {
  margin-top: -50px;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-image: url(../assets/image/arenaBG.jpg);
}
/* .win {
  color: green;
}
.lose {
  color: red;
}
.draw {
  color: rgb(4, 0, 255);
}
.user {
  background-image: url(../../assets/image/img1.jpg);
  width: 100px;
  height: 100px;
  background-position: center;
} */
</style>
