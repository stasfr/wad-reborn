import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dices from "@/views/Dices.vue";
import Grapes from "@/views/Grapes.vue";
import GrapePage from "@/views/GrapePage.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "Home" },
    },
    {
      path: "/grapes",
      name: "grapes",
      component: Grapes,
      meta: { title: "Grapes" },
    },
    {
      path: "/grapes/:grapeId",
      name: "GrapePage",
      component: GrapePage,
      meta: { title: "Grapes" },
    },
    {
      path: "/dices",
      name: "dices",
      component: Dices,
      meta: { title: "Dices" },
    },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: NotFound,
      meta: { title: "404 NotFound" },
    },
  ],
});

export default router;
