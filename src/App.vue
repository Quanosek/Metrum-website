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
  padding: 8px 10px;

  font-size: .9rem;
  border-radius: 3px;

  background-color: #5865f2;
  transition: .1s, filter 1.5s ease-in-out;
  cursor: pointer;

  @media (min-width: 1025px) {
    &:hover {
      background-color: #4752c4;
    }
  }
}

.button_secondary {
  padding: 8px 10px;

  font-size: .9rem;
  border-radius: 3px;

  background-color: #4f545c;
  transition: .1s, filter 1.5s ease-in-out;
  cursor: pointer;

  @media (min-width: 1025px) {
    &:hover {
      background-color: #686d73;
    }
  }
}

/* <--- HTML BODY MAIN ---> */

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;

  background-color: var(--primary);
  color: var(--text2);
  font-family: Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif;

  display: flex;
  flex-direction: column;
}

main {
  margin: 60px 0 3rem 0;
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
