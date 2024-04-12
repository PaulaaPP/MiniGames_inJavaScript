<script setup>
import "../assets/Css/caruselStyles.css";
import { ref, onMounted } from "vue";

const carouselDom = ref(null);
const sliderDom = ref(null);
const thumbnailBorderDom = ref(null);

onMounted(() => {
  carouselDom.value = document.querySelector(".carousel");
  sliderDom.value = carouselDom.value.querySelector(".carousel .list");
  thumbnailBorderDom.value = carouselDom.value.querySelector(
    ".carousel .thumbnail"
  );
});

function showSlider(type) {
  let sliderItemsDom = sliderDom.value.querySelectorAll(
    ".carousel .list .item"
  );
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    sliderDom.value.appendChild(sliderItemsDom[0]);
    thumbnailBorderDom.value.appendChild(thumbnailItemsDom[0]);
    carouselDom.value.classList.add("next");
  } else {
    sliderDom.value.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
    thumbnailBorderDom.value.prepend(
      thumbnailItemsDom[thumbnailItemsDom.length - 1]
    );
    carouselDom.value.classList.add("prev");
  }

  carouselDom.value.addEventListener(
    "transitionend",
    () => {
      carouselDom.value.classList.remove("next");
      carouselDom.value.classList.remove("prev");
    },
    { once: true }
  );
}
</script>

<template>
  <!-- carousel -->
  <div class="carousel" ref="carouselDom">
    <!-- list item -->
    <div class="list">
      <!-- item 1 -->
      <div class="item">
        <img
          src="../assets/image/RockScissors/rockpaperBgImage2.webp
        "
        />
        <div class="content">
          <div class="color-border">
            <div class="title">Game</div>
            <div class="topic">Rock and Scissors</div>
            <div class="description">
              Paper, Scissors" is a simple game in which two players choose from
              three options: paper, scissors or rock. It requires quick
              thinking, strategy and a bit of luck. Can you defeat your opponent
              in this exciting game?
            </div>
          </div>

          <div class="buttons">
            <button class="color-border">
              <router-link to="/rockandScissors">Play Game</router-link>
            </button>
          </div>
        </div>
      </div>
      <!-- item 2 -->
      <div class="item">
        <img src="../assets/image/Memory/memory_thumbnail.webp" />
        <div class="content">
          <div class="color-border">
            <div class="title">Game</div>
            <div class="topic">Memory</div>
            <div class="description">
              Exercise your memory with our captivating Memory Game! Test your
              recall skills by matching pairs of cards in this classic game of
              concentration. Sharpen your mind and have fun with our addictive
              Memory Game today!
            </div>
          </div>
          <div class="buttons">
            <button class="color-border">
              <router-link to="/memory">Play Game</router-link>
            </button>
          </div>
        </div>
      </div>
      <!-- item 3 -->
      <div class="item">
        <img src="../assets/image/SpaceInvaders/BG.webp" />
        <div class="content">
          <div class="color-border">
            <div class="title">Game</div>
            <div class="topic">Space Invaders</div>
            <div class="description">
              "Space Invaders" is a classic arcade game. Players control a
              single spacecraft tasked with shooting down enemy ships while
              avoiding their attacks, aiming to survive as long as possible and
              score as many points as they can.
            </div>
          </div>
          <div class="buttons">
            <button class="color-border">
              <router-link to="/spaceinvaders">Play Game</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- list thumnail -->
    <div class="thumbnail">
      <!-- thumnail 1 -->
      <div class="item">
        <img src="../assets/image/RockScissors/rockpaperBgImage2.webp" />
        <div class="content">
          <div class="title">Rock and Scissors</div>
        </div>
      </div>
      <!-- thumnail 2 -->
      <div class="item">
        <img src="../assets/image/Memory/memory_thumbnail.webp" />
        <div class="content">
          <div class="title">Memory</div>
        </div>
      </div>
      <!-- thumnail 3 -->
      <div class="item">
        <img src="../assets/image/SpaceInvaders/thumbnail _Invaders.webp" />
        <div class="content">
          <div class="title">Space Invaders</div>
        </div>
      </div>
    </div>
    <!-- next prev -->

    <div class="arrows">
      <button id="prev" class="color-border" @click="showSlider('prev')">
        <
      </button>
      <button id="next" class="color-border" @click="showSlider('next')">
        >
      </button>
    </div>
  </div>
</template>

<style>
/* all styles is on caruselStyles.css file */
</style>
