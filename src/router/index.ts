import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/LEDGER",
  },
  {
    path: "/LEDGER",
    name: "LEDGER",
    component: () => import("../view/LEDGER.vue"),
  },
  {
    path: "/SHIPPING",
    name: "SHIPPING",
    component: () => import("../view/SHIPPING.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
