<script setup lang="ts">
import { ref } from "vue";

import ButtonIcon from "@/components/icons/linkIcon.vue";

const distance = ref(0);

const changeSlide = (value: number) => {
  distance.value = value * 100;
};
</script>

<template>
  <div class="slider">
    <div class="slides" :style="{ right: distance + 'vw' }">
      <section>
        <h1>Bot Metrum</h1>

        <p>
          <b>Najlepsza alternatywa dla popularnych botów muzycznych.</b>
          Obsługuje ponad 800+ różnych stron oferujących odtwarzanie treści, w
          tym: <b>YouTube, Spotify i SoundCloud</b>! Oferuje przy tym świetną
          jakość dźwięku oraz mnóstwo funkcji, takich jak możliwość tworzenia
          <b>kolejek</b>, auto-odtwarzanie, odtwarzanie
          <b>transmisji live</b> czy wyświetlanie <b>tekstu</b> granego utworu!
        </p>

        <h2>Możesz wybierać spośród 3 wersji:</h2>
      </section>

      <section>
        <div>
          <h1>Metrum</h1>
          <p>prefix: <b>-</b></p>
        </div>

        <p>
          Na co czekasz? <b>Dodaj go na swój serwer</b> i ciesz się muzyką na
          swoich kanałach głosowych!
        </p>

        <a
          href="https://discord.com/api/oauth2/authorize?client_id=890577647980146688&permissions=414501432640&scope=bot%20applications.commands"
          target="_blank"
          class="invite button secondary"
          tabindex="-1"
        >
          <p>Zaproś na serwer!</p>
          <ButtonIcon />
        </a>
      </section>

      <section>
        <div>
          <h1>Metrum 2</h1>
          <p>prefix: <b>--</b></p>
        </div>

        <p>
          Jeśli pierwszy bot jest zbyt obciążony, lub gdy chcesz odtwarzać
          muzykę na <b>dwóch różnych kanałach głosowych</b>, ten bot jest
          <b>idealnym</b> rozwiązaniem!
        </p>

        <a
          href="https://discord.com/api/oauth2/authorize?client_id=901543092547637289&permissions=414501432640&scope=bot%20applications.commands"
          target="_blank"
          class="invite button secondary"
          tabindex="-1"
        >
          <p>Zaproś na serwer!</p>
          <ButtonIcon />
        </a>
      </section>

      <section>
        <div>
          <h1>Metrum 3</h1>
          <p>prefix: <b>---</b></p>
        </div>

        <p>
          Trzy boty muzyczne to <b>istne szaleństwo</b>! Jesteś pewien, że
          potrzebujesz ich aż tyle na swoim serwerze? Chociaż sumie, to
          <b>czemu nie...</b> {{ ":)" }}
        </p>

        <a
          href="https://discord.com/api/oauth2/authorize?client_id=901543130468323399&permissions=414501432640&scope=bot%20applications.commands"
          target="_blank"
          class="invite button secondary"
          tabindex="-1"
        >
          <p>Zaproś na serwer!</p>
          <ButtonIcon />
        </a>
      </section>
    </div>

    <div class="select">
      <img
        id="metrum1"
        src="@/assets/bot/metrum1.png"
        alt="Metrum"
        width="140"
        height="140"
        draggable="false"
        title="Metrum"
        tabindex="0"
        @click="changeSlide(1)"
      />

      <img
        id="metrum2"
        src="@/assets/bot/metrum2.png"
        alt="Metrum 2"
        width="140"
        height="140"
        draggable="false"
        title="Metrum 2"
        tabindex="0"
        @click="changeSlide(2)"
      />

      <img
        id="metrum3"
        src="@/assets/bot/metrum3.png"
        alt="Metrum 3"
        width="140"
        height="140"
        draggable="false"
        title="Metrum 3"
        tabindex="0"
        @click="changeSlide(3)"
      />
    </div>
  </div>

  <div class="info">
    <section>
      <h2>Używaj jak chcesz!</h2>

      <p>Możesz bez problemu korzystać z własnego prefixu, jak i ukośnika!</p>
    </section>

    <section>
      <h2>Pełna dowolność!</h2>

      <p>
        Bot umożliwia odtwarzanie po wyszukanym tytule, jak i linkach. Możesz
        tworzyć własne kolejki, lub włączyć auto-odtwarzanie!
      </p>
    </section>

    <div class="media">
      <img
        src="@/assets/images/YouTube.svg"
        alt="YouTube"
        width="100"
        height="100"
        draggable="false"
      />

      <img
        src="@/assets/images/Spotify.svg"
        alt="Spotify"
        width="100"
        height="100"
        draggable="false"
      />

      <img
        src="@/assets/images/SoundCloud.svg"
        alt="SoundCloud"
        width="180"
        height="100"
        draggable="false"
      />
    </div>

    <section>
      <h2>Mnogość funkcji!</h2>

      <p>
        Do dyspozycji jest m.in. zapętlanie, system pomijania z głosowaniem,
        odtwarzanie transmisji live, pauzowanie, przewijanie i wiele więcej.
      </p>
    </section>

    <section>
      <h2>Szybki i zawsze dostępny</h2>

      <p>
        Zapewnia zawsze błyskawiczną odpowiedź na komendy, auto-dołączanie do
        kanałów głosowych i z nich wychodzenie!
        <br />
        Kiedy akurat jest niedostępny, znaczy, że wgrywane są aktualizacje.
      </p>
    </section>
  </div>
</template>

<style scoped lang="scss">
.slider {
  padding: 3% 0 5%;
  min-height: min(calc(100svh - var(--header-height)), 60rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(25deg, #030375, var(--blurple-color));
  text-shadow: 0 0.2rem 0.4rem rgba(#000000, 0.3);
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 3rem 0;
    min-height: unset;
  }
}

.slides {
  $slide-width: 100svw;

  position: relative;
  bottom: 3vh;

  width: calc(4 * $slide-width);
  min-height: 100%;
  display: flex;
  align-items: center;
  transition: 0.25s ease-out;

  section {
    padding: 0.8% 4%;
    width: $slide-width;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;

    div {
      h1 {
        font-size: 350%;
      }

      p {
        font-size: 165%;
        font-weight: 500;
      }
    }

    h1 {
      font-size: 350%;
    }

    p {
      color: #ffffff;
      font-size: 120%;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      padding: 1rem 1%;

      div {
        font-size: 80%;
      }

      h1 {
        font-size: 250%;
      }

      p {
        font-size: 105%;
      }

      h2 {
        font-size: 125%;
      }
    }
  }
}

.button {
  padding: 0.8rem 2.6rem;
  gap: 1.1rem;
  font-size: 110%;
  border-radius: 5px;
  box-shadow: 0 0.5rem 0.8rem 0.2rem rgba(#000000, 0.15);
  animation: 1s jump ease infinite;

  svg {
    scale: 1.5;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 2.5rem;
    font-size: 100%;
  }

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
    border-radius: 12px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0.5rem 0.8rem 0.2rem rgba(#000000, 0.15);
      transform: translateY(-5%);
    }

    @media (max-width: 768px) {
      width: min(6.5rem, 22vw);
      height: auto;
    }
  }
}

.info {
  padding: 3rem 5% 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.3rem;

    h2 {
      font-size: 200%;
      font-weight: 500;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
}

.media {
  display: flex;
  flex-direction: row;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2rem;

    img {
      width: auto;
      height: 4rem;
    }
  }
}
</style>
