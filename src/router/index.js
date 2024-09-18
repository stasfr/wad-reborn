import { useUserStore } from "@/stores/user";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Dices from "@/views/Dices/Dices.vue";
import Grapes from "@/views/Grapes/Grapes.vue";
import Grape from "@/views/Grapes/Grape.vue";
import Constructor from "@/views/Grapes/Constructor.vue";
import NotFound from "@/views/NotFound.vue";
import Login from "@/views/User/Login.vue";
import UserProfile from "@/views/User/UserProfile.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "Wine&Dices", requiresAuth: false },
    },
    {
      path: "/grapes",
      name: "grapes",
      component: Grapes,
      meta: { title: "Grapes", requiresAuth: false },
    },
    {
      path: "/grapes/:grapeId",
      name: "Grape Page",
      component: Grape,
      meta: { title: "Grape", requiresAuth: false },
    },
    {
      path: "/grapes/constructor",
      name: "Grape Constructor",
      component: Constructor,
      meta: { title: "Grape Constructor", requiresAuth: true },
    },
    {
      path: "/dices",
      name: "Dices",
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
