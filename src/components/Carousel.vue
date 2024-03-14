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
          src="../assets/image/rockpaperBgImage2.png
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
        <img src="../assets/image/img2.jpg" />
        <div class="content">
          <div class="title">DESIGN SLIDER</div>
          <div class="topic">ANIMAL</div>
          <div class="des">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,
            rem magnam nesciunt minima placeat, itaque eum neque officiis unde,
            eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut
            doloribus non numquam. Explicabo, laboriosam nisi reprehenderit
            tempora at laborum natus unde. Ut, exercitationem eum aperiam illo
            illum laudantium?
          </div>
          <div class="buttons">
            <button>SEE MORE</button>
          </div>
        </div>
      </div>
      <!-- item 3 -->
      <div class="item">
        <img src="../assets/image/img3.jpg" />
        <div class="content">
          <div class="title">DESIGN SLIDER</div>
          <div class="topic">ANIMAL</div>
          <div class="des">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,
            rem magnam nesciunt minima placeat, itaque eum neque officiis unde,
            eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut
            doloribus non numquam. Explicabo, laboriosam nisi reprehenderit
            tempora at laborum natus unde. Ut, exercitationem eum aperiam illo
            illum laudantium?
          </div>
          <div class="buttons">
            <button>SEE MORE</button>
          </div>
        </div>
      </div>
      <!-- item 4 -->
      <div class="item">
        <img src="../assets/image/img4.jpg" />
        <div class="content">
          <div class="title">DESIGN SLIDER</div>
          <div class="topic">ANIMAL</div>
          <div class="des">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,
            rem magnam nesciunt minima placeat, itaque eum neque officiis unde,
            eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut
            doloribus non numquam. Explicabo, laboriosam nisi reprehenderit
            tempora at laborum natus unde. Ut, exercitationem eum aperiam illo
            illum laudantium?
          </div>
          <div class="buttons">
            <button>SEE MORE</button>
          </div>
        </div>
      </div>
    </div>
    <!-- list thumnail -->
    <div class="thumbnail">
      <!-- thumnail 1 -->
      <div class="item">
        <img src="../assets/image/arena_rockandScrissors.png" />
        <div class="content">
          <div class="title">Rock and Scissors</div>
        </div>
      </div>
      <!-- thumnail 2 -->
      <div class="item">
        <img src="../assets/image/img2.jpg" />
        <div class="content">
          <div class="title">Name Slider</div>
        </div>
      </div>
      <!-- thumnail 3 -->
      <div class="item">
        <img src="../assets/image/img3.jpg" />
        <div class="content">
          <div class="title">Name Slider</div>
        </div>
      </div>
      <!-- thumnail 4 -->
      <div class="item">
        <img src="../assets/image/img4.jpg" />
        <div class="content">
          <div class="title">Name Slider</div>
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
    <!-- time running
    <div class="time"></div> -->
  </div>
</template>
