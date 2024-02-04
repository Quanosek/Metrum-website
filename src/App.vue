<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

import ButtonIcon from "@/components/icons/linkIcon.vue";

const active = ref(false);

const isActive = () => {
  active.value = !active.value;

  if (active.value && window.innerWidth <= 768) {
    let xPos = window.scrollX;
    let yPos = window.scrollY;

    window.onscroll = () => window.scrollTo(xPos, yPos);
  } else window.onscroll = () => {};
};
</script>

<template>
  <header>
    <RouterLink to="/" title="Metrum - Strona główna" class="logo">
      <img
        src="/favicon.svg"
        alt="Metrum"
        width="48"
        height="35"
        draggable="false"
      />
    </RouterLink>

    <div>
      <div class="menu" :class="active ? 'active' : ''" @click="isActive">
        <RouterLink to="/" class="button primary">
          <p>Strona główna</p>
        </RouterLink>

        <RouterLink to="/commands" class="button success">
          <p>Lista komend</p>
        </RouterLink>

        <a
          href="https://buycoffee.to/kubaklalo"
          target="_blank"
          class="button link"
        >
          <p>Wesprzyj!</p>
          <ButtonIcon />
        </a>

        <a
          href="https://top.gg/bot/890577647980146688"
          target="_blank"
          class="button link"
        >
          <p>Zostaw opinię!</p>
          <ButtonIcon />
        </a>
      </div>

      <button class="hamburger" @click="isActive">
        <div class="bar" :class="active ? 'active' : ''" />
      </button>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <p>
      Stworzone z 💙 przez
      <a href="https://github.com/Quanosek/" target="_blank" draggable="false">
        Jakuba Kłało</a
      >.
    </p>

    <p>
      Wszelkie prawa zastrzeżone © 2022-2024 | domena
      <a href="https://www.klalo.pl" target="_blank" draggable="false">
        klalo.pl
      </a>
    </p>
  </footer>
</template>

<style scoped lang="scss">
main {
  margin-top: var(--header-height);
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

$header-bg-color: #232428;

header,
footer {
  z-index: 10;
  padding: 0 3%;
  height: var(--header-height);
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $header-bg-color;
}

header {
  position: fixed;

  .logo {
    padding: 5px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    user-select: none;
  }

  .menu {
    display: flex;
    gap: 0.8rem;
    overflow-y: auto;

    @media (max-width: 768px) {
      position: fixed;
      top: var(--header-height);
      right: -100%;

      padding: 2rem 0;
      width: 100%;
      height: calc(100svh - var(--header-height));
      flex-direction: column;
      align-items: center;
      transition: 0.25s ease-in-out;
      gap: 1.2rem;

      &.active {
        right: 0;
        background-color: $header-bg-color;
      }
    }
  }

  @media (max-width: 768px) {
    .button {
      padding: 0.8rem 0;
      width: 14rem;

      svg {
        scale: 1.2;
      }
    }
  }

  .hamburger {
    display: none;
    padding: 15px 5px;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }

    .bar {
      &,
      &::before,
      &::after {
        width: 25px;
        height: 3px;
        border-radius: 5px;
        background-color: #ffffff;
        transition: 0.2s ease-in-out;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
      }

      &::before {
        transform: translateY(-10px);
      }
      &::after {
        transform: translateY(10px);
      }

      &.active {
        background: transparent;

        &::before {
          transform: rotate(45deg);
        }
        &::after {
          transform: rotate(-45deg);
        }
      }
    }
  }
}

footer {
  font-size: 85%;
  font-weight: 300;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
    font-size: 65%;
  }

  a:hover {
    text-decoration: underline;
  }
}
</style>
