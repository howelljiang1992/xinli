import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/index.vue")
  },
  {
    path: "/report",
    name: "report",
    component: () => import("../views/report/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
