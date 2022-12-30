// import
import { createRouter, createWebHistory } from "vue-router";

// define router
const router = createRouter({
  // enable browser history
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // error
    {
      path: "/:pathMatch(.*)*",
      meta: { title: "Błąd Strony" },
      component: () => import("../views/error.vue"),
    },
    // website
    {
      path: "/",
      name: "home",
      component: () => import("../views/home.vue"),
    },
    {
      path: "/commands",
      name: "commands",
      meta: { title: "Lista Komend" },
      component: () => import("../views/commands.vue"),
    },
    {
      path: "/author",
      name: "author",
      meta: { title: "O Autorze" },
      component: () => import("../views/author.vue"),
    },
    {
      path: "/opinion",
      component: () => {
        window.location.href = "https://top.gg/bot/890577647980146688";
      },
    },
    // invite links
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
  ],
  // smooth scrolling
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: "smooth" };
    } else {
      return { top: 0 };
    }
  },
});

// meta title
const DEFAULT_TITLE = "Metrum - Najlepszy Polski Bot Muzyczny Discord";
router.beforeEach((to) => {
  if (to.meta.title) document.title = to.meta.title + " | " + DEFAULT_TITLE;
  else document.title = DEFAULT_TITLE;
});

// export
export default router;
