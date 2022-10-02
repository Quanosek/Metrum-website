<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const distance = ref(0);
function changeSlide(value) {
  distance.value = value * 100;
}
</script>

<template>
  <div class="slider">
    <div class="slides" :style="{ right: distance + 'vw' }">
      <div class="slide" id="welcome">
        <h1>Bot Metrum</h1>
        <p>
          <b>Najlepsza alternatywa dla&nbsp;popularnych botów muzycznych.</b>
          Obsługuje ponad 800+ różnych stron oferujących odtwarzanie treści,
          w&nbsp;tym: <b>YouTube, Spotify i&nbsp;SoundCloud</b>! Oferuje
          przy&nbsp;tym świetną jakość dźwięku oraz mnóstwo funkcji,
          takich&nbsp;jak możliwość tworzenia <b>kolejek</b>, auto-odtwarzanie,
          odtwarzanie <b>transmisji&nbsp;live</b> czy wyświetlanie
          <b>tekstu</b> granego utworu!
        </p>
        <h2>Możesz wybierać spośród 3&nbsp;wersji:</h2>
      </div>

      <div class="slide">
        <h1>Metrum</h1>
        <h2>prefix: <b>-</b></h2>
        <p>
          Na&nbsp;co&nbsp;czekasz?
          <b>Dodaj&nbsp;go na&nbsp;swój serwer</b> i&nbsp;ciesz&nbsp;się muzyką
          na&nbsp;swoich kanałach głosowych!
        </p>
        <RouterLink to="/invite" target="_blank" class="invite button secondary" tabindex="-1">
          Zaproś na serwer!<img alt="link" src="@/assets/icons/link.svg" draggable="false" />
        </RouterLink>
      </div>

      <div class="slide">
        <h1>Metrum 2</h1>
        <h2>prefix: <b>--</b></h2>
        <p>
          Jeśli pierwszy&nbsp;bot jest zbyt obciążony, lub&nbsp;gdy chcesz
          odtwarzać muzykę na&nbsp;<b>dwóch różnych kanałach głosowych</b>,
          ten&nbsp;bot jest&nbsp;<b>idealnym</b> rozwiązaniem!
        </p>
        <RouterLink to="/invite2" target="_blank" class="invite button secondary" tabindex="-1">
          Zaproś na serwer!<img alt="link" src="@/assets/icons/link.svg" draggable="false" />
        </RouterLink>
      </div>

      <div class="slide">
        <h1>Metrum 3</h1>
        <h2>prefix: <b>---</b></h2>
        <p>
          Trzy boty muzyczne to <b>istne&nbsp;szaleństwo</b>! Jesteś pewien,
          że&nbsp;potrzebujesz ich aż&nbsp;tyle na&nbsp;swoim serwerze? Chociaż sumie,
          to&nbsp;<b>czemu&nbsp;nie...</b>&nbsp;&nbsp;:)
        </p>
        <RouterLink to="/invite2" target="_blank" class="invite button secondary" tabindex="-1">
          Zaproś na serwer!<img alt="link" src="@/assets/icons/link.svg" draggable="false" />
        </RouterLink>
      </div>
    </div>

    <div class="select">
      <abbr title="Metrum" tabindex="0">
        <img src="@/assets/bot/metrum1.png" alt="Metrum" @click="changeSlide(1)" id="metrum1" draggable="false" />
      </abbr>
      <abbr title="Metrum 2" tabindex="0">
        <img src="@/assets/bot/metrum2.png" alt="Metrum 2" @click="changeSlide(2)" id="metrum2" draggable="false" />
      </abbr>
      <abbr title="Metrum 3" tabindex="0">
        <img src="@/assets/bot/metrum3.png" alt="Metrum 3" @click="changeSlide(3)" id="metrum3" draggable="false" />
      </abbr>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  padding: 1rem 0 2rem;
  height: 38rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(25deg, #100076, var(--blurple));

  h1 {
    font-family: "Ginto Nord Medium";
    ;
    font-size: 3.6rem;
  }

  p {
    margin-top: 2rem;
    color: var(--white);
    font-size: 1.2rem;

    b {
      font-family: "Whitney-Semibold";
      ;
    }
  }
}

.slides {
  width: 400vw;
  display: flex;
  text-align: center;
  position: relative;
  transition: var(--transitionSmooth);
}

#welcome {
  gap: 3rem;

  h1 {
    margin: -2rem;
  }

  h2 {
    margin-bottom: 1rem;
  }
}

.slide {
  margin: 0 4%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-shadow: var(--textShadow);
}

.button {
  margin: 2rem 0 4rem;
  padding: 1rem 2rem;
  height: 1.6rem;
  width: 14rem;
  gap: 12px;
  font-size: 1.4rem;
  border-radius: var(--roundedMedium);
  animation: jump 1s ease infinite;
  box-shadow: var(--boxShadow);
  user-select: none;

  img {
    scale: 1.5;
  }
}

.select {
  margin: 0 3%;
  display: flex;
  justify-content: center;
  gap: 5%;
  user-select: none;

  img {
    width: 8rem;
    transition: 0.2s;
    border-radius: var(--roundedBig);
    cursor: pointer;

    @media (min-width: 1025px) {
      &:hover {
        box-shadow: var(--boxShadow);
        transform: translateY(-5%);
      }
    }
  }
}

// button jump animation
@keyframes jump {
  0% {
    transform: translateY(0%);
  }

  50% {
    transform: translateY(20%);
  }

  100% {
    transform: translateY(0%);
  }
}

// mobile version
@media (max-width: 768px) {
  .slider {
    padding: 3rem 0;
    height: auto;

    h1 {
      font-size: 3rem;
    }
  }

  .slide {
    margin: 1%;

    p {
      font-size: 1.1rem;
    }

    a {
      margin-bottom: 2rem;
      padding: 0.9rem 1.3rem;
      font-size: 1.2rem;
    }

    img {
      bottom: 2px;
      scale: 1.2;
    }
  }

  #welcome {
    margin-top: 2rem;
    gap: 2rem;
    
    h2 {
      margin-bottom: 0.5rem;
    }
  }

  .select {
    margin-top: 1rem;

    img {
      width: 6rem;
    }
  }
}

@media (max-width: 320px) {
  .select {
    img {
      width: 4.5rem;
    }
  }
}
</style>
