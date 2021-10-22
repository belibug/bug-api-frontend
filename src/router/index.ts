import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Notes from "../views/Notes.vue";
import LastTime from "../views/LastTime.vue";
import TimeTracker from "../views/TimeTracker.vue";
import HabitTracker from "../views/HabitTracker.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/notes",
    name: "Notes",
    component: Notes,
  },
  {
    path: "/lasttime",
    name: "LastTime",
    component: LastTime,
  },
  {
    path: "/timetracker",
    name: "TimeTracker",
    component: TimeTracker,
  },
  {
    path: "/habittracker",
    name: "HabitTracker",
    component: HabitTracker,
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
