<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="container">
    <div class="box">
      <h1>Contact me</h1>

      <ul>
        <li>
          <h2>Paula Piskorz</h2>
        </li>
        <li>Web Developer / UI Designer</li>

        <a
          href="https://paulapiskorz-portfolio.netlify.app/#home"
          target="_blank"
        >
          <li>www.paulaPiskorz.portfolio.com</li></a
        >
      </ul>

      <ul>
        <li>
          <Icon icon="material-symbols:stacked-email-rounded" />
          piskorzpaula@gmail.com
        </li>

        <a href="https://github.com/PaulaaPP?tab=repositories" target="_blank">
          <li><Icon icon="akar-icons:github-fill" />GitHub</li></a
        >

        <a
          href="https://www.linkedin.com/in/paula-piskorz-a02139283/"
          target="_blank"
        >
          <li><Icon icon="uim:linkedin-alt" s />Linkedin</li></a
        >
      </ul>
    </div>
  </div>
  <span>All rights reserved &copy; |Paula Piskorz 2024</span>
</template>

<style scoped>
.container {
  margin: 10em;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
  color: white;
  margin: 0 10em;
}

h1 {
  font-size: 2.5em;
  color: var(--orange-primary);
}
ul {
  list-style: none;
}

li {
  margin: 1em 0;
}
a {
  color: inherit;
  text-decoration: none;
}

.iconify {
  color: var(--orange-primary);
  margin: 0 0.5em;
}
span {
  margin: 5em;
  color: rgb(88, 88, 88);
  font-size: 1em;
}
@media screen and (max-width: 1000px) {
  .container {
    margin: 10em 2em;
  }
}
@media screen and (max-width: 768px) {
  .container {
    margin: 10em 2em;
  }
  .box {
    font-size: 15px;
    margin: 0 0;
  }
}

@media screen and (max-width: 375px) {
  .container {
    font-size: 0.5em;
  }
}
</style>
