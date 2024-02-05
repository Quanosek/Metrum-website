import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // error page
    {
      path: "/:pathMatch(.*)*",
      meta: { title: "Nie znaleziono" },
      component: () => import("../views/errorView.vue"),
    },
    // website views
    {
      path: "/",
      name: "home",
      component: () => import("../views/homeView.vue"),
    },
    {
      path: "/commands",
      name: "commands",
      meta: { title: "Lista komend" },
      component: () => import("../views/commandsView.vue"),
    },
    // invite links redirect
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

  // scroll to top on change
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: "smooth" };
    } else {
      return { top: 0 };
    }
  },
});

// meta title
const title = "Metrum - najlepszy darmowy bot muzyczny Discord";

router.beforeEach((to) => {
  if (to.meta.title) document.title = to.meta.title + " / " + title;
  else document.title = title;
});

export default router;
