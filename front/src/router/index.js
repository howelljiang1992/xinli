import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Report from "../views/Report.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/report",
    name: "report",
    component: Report
  }
];

const router = new VueRouter({
  routes
});

export default router;
