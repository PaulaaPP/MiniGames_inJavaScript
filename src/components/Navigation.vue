<template>
  <nav>
    <div class="lol2">
      <div class="links">
        <router-link to="/"
          ><img src="../assets/image/MojeLogo_noBg_2.0.png" alt="logo"
        /></router-link>

        <router-link class="link color-border" to="/">Home</router-link>
        <router-link class="link color-border" to="/contact"
          >Contacts</router-link
        >
      </div>
    </div>
  </nav>
</template>

<style>
nav a.link {
  color: var(--white-primary);
  font-size: 16px;
  text-decoration: none;
  margin: 0 9px 0 40px;
  background-color: var(--bg-black);
}

.links {
  margin-top: 16px;
}

nav a.link:hover,
nav a.router-link-active {
  color: var(--orange-primary);
  transition: color 0.7s;
}
nav img {
  vertical-align: middle;
  width: 59px;
}

nav {
  /* position: sticky; */
  width: 1140px;
  max-width: 80%;
  margin: auto;
  height: 50px;
  display: flex;
  align-items: center;
  align-items: flex-start;
  position: relative;
  /* this is needed to make nav visible top-of on carousel image */
  z-index: 100;
}

@media screen and (max-width: 600px) {
  nav img {
    width: 50px;
    margin: 0 10px;
  }
  nav a.link {
    font-size: 12px;
    margin: 0 11px 0 13px;
  }
}

@media screen and (max-width: 425px) {
  header a {
    margin-right: 1px;
  }
  nav img {
    margin: 0 0;
  }

  nav {
    width: 1140px;
    max-width: 100%;
  }
}
</style>
