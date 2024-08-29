import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dices from "@/views/Dices.vue";
import Grapes from "@/views/Grapes.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/grapes",
      name: "grapes",
      component: Grapes,
    },
    {
      path: "/dices",
      name: "dices",
      component: Dices,
    },
  ],
});

export default router;
