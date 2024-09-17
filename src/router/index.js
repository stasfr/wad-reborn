import { useUserStore } from "@/stores/user";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dices from "@/views/Dices.vue";
import Grapes from "@/views/Grapes/Grapes.vue";
import GrapePage from "@/views/Grapes/GrapePage.vue";
import Constructor from "@/views/Grapes/Constructor.vue";
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
      path: "/grapes/constructor",
      name: "GrapeConstructor",
      component: Constructor,
      meta: { title: "Grape Constructor", requiresAuth: true },
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

async function redirectToLogin(next) {
  const userStore = useUserStore();
  const localUser = await userStore.getSession();
  if (localUser.data.session === null) {
    next("/login");
  } else {
    next();
  }
}

async function redirectToProfile(next) {
  const userStore = useUserStore();
  const localUser = await userStore.getSession();
  if (localUser.data.session !== null) {
    next("/profile");
  } else {
    next();
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    redirectToLogin(next);
  } else if (to.path === "/login") {
    redirectToProfile(next);
  } else {
    next();
  }
});

export default router;
