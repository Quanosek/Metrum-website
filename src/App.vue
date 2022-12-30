<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const active = ref(false);
function isActive() {
  active.value = !active.value;

  // if (active.value === true && window.innerWidth <= 768) {
  //   const xPos = window.scrollX;
  //   const yPos = window.scrollY;
  //   window.onscroll = () => {
  //     window.scroll(xPos, yPos);
  //   };
  // } else window.onscroll = "";
}

</script>

<template>
  <header>
    <div class="left">
      <RouterLink to="/">
        <abbr title="Metrum - Strona główna">
          <img src="/favicon.svg" alt="Metrum" class="logo" draggable="false" />
        </abbr>
      </RouterLink>
    </div>

    <div class="right">
      <div class="menu" @click="isActive" :class="active ? 'active' : ''">
        <RouterLink to="/" class="button primary">
          Strona&nbsp;główna
        </RouterLink>
        <RouterLink to="/commands" class="button primary">
          Lista komend
        </RouterLink>
        <RouterLink to="/author" class="button success">
          O&nbsp;autorze
        </RouterLink>
        <a href="https://top.gg/bot/890577647980146688" target="_blank" class="button link">
          Zostaw&nbsp;opinię
          <img src="@/assets/icons/link.svg" alt="link" draggable="false" />
        </a>
      </div>

      <div class="hamburger" @click="isActive">
        <div class="bar" :class="active ? 'active' : ''"></div>
      </div>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <div class="credits">
      Stworzone przez
      <a href="https://github.com/Quanosek" draggable="false">Quanoska</a>.
    </div>
    <div class="copyrights">
      Wszelkie prawa zastrzeżone ©&nbsp;2022 | domena&nbsp;<a href="https://www.klalo.pl" target="_blank">klalo.pl</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
header {
  z-index: 10;
  position: fixed;
  padding: 0 3%;
  height: 4rem;
  width: 94vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--app-4);
  user-select: none;

  .left {
    font-size: 1.3rem;
    font-weight: 800;

    abbr {
      display: flex;
      align-items: center;
    }

    .logo {
      height: 2rem;
    }
  }

  .menu {
    display: flex;
    gap: 1rem;
  }

  .hamburger {
    display: none;
    padding: 15px 5px;
    cursor: pointer;

    .bar {
      width: 25px;
      height: 3px;
      border-radius: var(--roundedMedium);
      background-color: var(--white);
      transition: var(--transitionSmooth);

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 25px;
        height: 3px;
        border-radius: var(--roundedMedium);
        background-color: var(--white);
        transition: var(--transitionSmooth);
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

  @media (max-width: 768px) {
    .hamburger {
      display: block;
    }

    .menu {
      z-index: 10;
      padding: 2rem 0 100vh 0;
      width: 100%;
      position: fixed;
      right: -100%;
      top: 4rem;
      flex-direction: column;
      align-items: center;
      transition: 0.3s;
      gap: 1.2rem;

      &.active {
        right: 0;
        background-color: var(--app-4);
      }
    }
  }
}

footer {
  z-index: 10;
  padding: 0 3%;
  margin: 0;
  height: 4rem;
  width: 94%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--app-4);
  font-size: 0.9rem;

  a:hover {
    text-decoration: underline;
  }

  .copyrights {
    font-size: 0.8rem;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    & {
      padding: 2% 3%;
      justify-content: center;
      flex-direction: column;
      font-size: 0.7rem;
      gap: 0.8rem;
    }

    .copyrights {
      font-size: 0.65rem;
    }
  }
}
</style>
