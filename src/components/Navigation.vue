<template>
  <nav>
    <div class="links">
      <router-link to="/"
        ><img src="../assets/image/Logo_transparent.png" alt="logo"
      /></router-link>

      <router-link class="link color-border" to="/">Home</router-link>
      <router-link class="link color-border" to="/contact"
        >Contacts</router-link
      >
    </div>
  </nav>
</template>

<style>
nav a.link {
  color: var(--white-primary);
  font-size: 18px;
  text-decoration: none;
  margin: 0 20px 0 40px;
  background-color: var(--bg-black);
}

.links {
  margin-top: 5px;
}

nav a.link:hover,
nav a.router-link-active {
  color: var(--orange-primary);
  transition: color 0.7s;
}
nav img {
  vertical-align: middle;
  width: 70px;
}

nav {
  width: 1140px;
  max-width: 80%;
  margin: auto;
  height: 50px;
  display: flex;
  align-items: center;
  align-items: flex-start;
  position: relative; /* this is needed to make nav visible top-of on carousel image */
  z-index: 100;
}

@media screen and (max-width: 428px) {
  nav {
    max-width: 102%;
  }

  nav a.link {
    font-size: 12px;
    margin: 0 11px 0 13px;
  }

  nav img {
    width: 56px;
  }

  header a {
    margin-right: 1px;
  }
}

@media screen and (max-width: 360px) {
  header a {
    margin-right: 1px;
  }

  nav a.link {
    font-size: 12px;
    margin: 0 11px 0 10px;
  }
}
</style>
