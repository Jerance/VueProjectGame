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
    name: "marketMyTradesView",
    component: () => import("../views/MarketMyTradesView.vue"),
  },
  {
    path: "/market/newtrades",
    name: "marketNewTradesView",
    component: () => import("../views/MarketNewTradesView.vue"),
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
  {
    path: "/InventoryView",
    name: "InventoryView",
    component: () => import("../views/InventoryView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
