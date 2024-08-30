import { useUserStore } from "@/stores/user";
import { useGrapeStore } from "@/stores/grapes";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dices from "@/views/Dices.vue";
import Grapes from "@/views/Grapes.vue";
import GrapePage from "@/views/GrapePage.vue";
import NotFound from "@/views/NotFound.vue";
import Login from "@/views/Login.vue";
import UserProfile from "@/views/UserProfile.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "Home", requiresAuth: false },
    },
    {
      path: "/grapes",
      name: "grapes",
      component: Grapes,
      meta: { title: "Grapes", requiresAuth: false },
    },
    {
      path: "/grapes/:grapeId",
      name: "GrapePage",
      component: GrapePage,
      meta: { title: "Grapes", requiresAuth: false },
    },
    {
      path: "/dices",
      name: "dices",
      component: Dices,
      meta: { title: "Dices", requiresAuth: false },
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { title: "Login", requiresAuth: false },
    },
    {
      path: "/profile",
      name: "userProfile",
      component: UserProfile,
      meta: { title: "Profile", requiresAuth: true },
    },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: NotFound,
      meta: { title: "404 NotFound", requiresAuth: false },
    },
  ],
});

async function getUser(next) {
  const userStore = useUserStore();
  const localUser = await userStore.getSession();
  if (localUser.data.session === null) {
    next("/login");
  } else {
    next();
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getUser(next);
  } else {
    next();
  }

  if (from.fullPath === `/grapes/${from.params.grapeId}`) {
    const grapesStore = useGrapeStore();
    grapesStore.grape = {};
  }
});

export default router;
