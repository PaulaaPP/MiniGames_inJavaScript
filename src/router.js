import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("./views/Contact.vue"),
  },
  {
    path: "/rockandscissors",
    name: "rockandscissors",
    component: () => import("./views/Games/RockandScissors.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  // domain.local/#/hall-of-fame
});

export default router;
