import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/LoginPage.vue";
import User from "@/components/UserPage.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", name: "login", component: Login },
  { path: "/user", name: "user", component: User },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
