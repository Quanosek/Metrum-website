import { createRouter, createWebHistory } from "vue-router";

const routes = [
  /** ERROR PAGE */
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/error.vue"),
  },

  /** WEBSITE PAGES */
  {
    path: "/",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/author",
    component: () => import("../views/author.vue"),
  },
  {
    path: "/commands",
    component: () => import("../views/commands.vue"),
  },

  /** INVITE LINKS */
  {
    path: "/invite",
    component: () => {
      window.location.href =
        "https://discord.com/api/oauth2/authorize?client_id=890577647980146688&permissions=414501432640&scope=bot%20applications.commands";
    },
  },
  {
    path: "/invite2",
    component: () => {
      window.location.href =
        "https://discord.com/api/oauth2/authorize?client_id=901543092547637289&permissions=414501432640&scope=bot%20applications.commands";
    },
  },
  {
    path: "/invite3",
    component: () => {
      window.location.href =
        "https://discord.com/api/oauth2/authorize?client_id=901543130468323399&permissions=414501432640&scope=bot%20applications.commands";
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
