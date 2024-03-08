import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/HomeView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("./views/ContactView.vue"),
  },
  {
    path: "/rockandscissors",
    name: "rockandscissors",
    component: () => import("./views/RockandScissorsView.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  // domain.local/#/hall-of-fame
});

export default router;
