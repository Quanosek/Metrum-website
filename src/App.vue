<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<script>
import Nav from "./components/nav.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style lang="scss">
/* <--- COLORS ---> */

:root {

  /* default colors */
  --primary: #36393f;
  --secondary: #2f3136;
  --text1: #ffffff;
  --text2: #b9bbbe;
}

.button_primary {
  background-color: #5865f2;
  padding: 8px 10px;
  font-size: .9rem;
  border-radius: 3px;

  @media (min-width: 1025px) {
    &:hover {
      background-color: #717cf4;
    }
  }
}

/* <--- HTML BODY MAIN ---> */

html,
body {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-family: Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--text2);
  background-color: var(--primary);
}

main {
  margin: 6rem 0 3rem 0;
  padding: 0 3%;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  color: var(--text1);
}

a {
  margin: 0;
  padding: 0;
  color: var(--text1);
  text-decoration: none;
}
</style>
