import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewFactoryView from "../views/NewFactoryView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignUpView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/market",
    name: "market",
    component: () => import("../views/MarketView.vue"),
  },
  {
    path: "/market/mytrades",
    name: "marketMyTrades",
    component: () => import("../views/MarketMyTrades.vue"),
  },
  {
    path: "/market/newtrades",
    name: "marketNewTrades",
    component: () => import("../views/MarketNewTrades.vue"),
  },
  {
    path: "/new-factory",
    name: "newFactory",
    component: NewFactoryView,
  },
  {
    path: "/ProfileMeView",
    name: "ProfileMeView",
    component: () => import("../views/ProfileMeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
