import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import Report from "../views/Report.vue";

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
