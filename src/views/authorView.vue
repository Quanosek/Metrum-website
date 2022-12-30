<script setup lang="ts">
import Bot from "@/components/botComponent.vue";
import dimension from '@/assets/author/dimension.png'
import mc_connect from '@/assets/author/mc_connect.png'
</script>

<template>
  <div class="start">
    <h1>Nazywam się Jakub&nbsp;Kłało</h1>
    <p>
      Jestem <b>20-letnim studentem Inżynierii Multimediów</b>.
      Już&nbsp;od&nbsp;<b>trzech lat</b> hobbistyczne zajmuję&nbsp;się
      programowaniem w&nbsp;języku <b>JavaScript</b> oraz tworzeniem różnych
      projektów z&nbsp;użyciem HTML, CSS i&nbsp;frameworków. Jest&nbsp;to
      nie&nbsp;tylko moja wielka pasja, ale też&nbsp;coś, z&nbsp;czym planuję
      <b>wiązać swoją przyszłość</b>!
    </p>
    <p>
      Jednym z&nbsp;takich projektów jest właśnie <b>Metrum</b>, który stale
      staram&nbsp;się ulepszać i&nbsp;rozwijać, aby&nbsp;był niezastąpiony
      przy wspólnym siedzeniu na&nbsp;kanałach głosowych w&nbsp;gronie
      znajomych.
    </p>
    <p>
      Jeśli&nbsp;chcesz dowiedzieć&nbsp;się o&nbsp;mnie nieco&nbsp;więcej,
      wybierz linki poniżej!
    </p>
  </div>

  <div>
    <div class="photo">
      <img id="kubaklalo" src="@/assets/author/kubaklalo.png" alt="Jakub Kłało" draggable="false" />
      <img id="quanosek" src="@/assets/author/quanosek.png" alt="@Quanosek" draggable="false" />
    </div>

    <hr />

    <div class="links">
      <a href="https://www.klalo.pl" target="_blank">
        <img src="@/assets/icons/website.svg" alt="website" draggable="false" /></a>
      <a href="https://klalo.pl/discord" target="_blank">
        <img src="@/assets/icons/discord.svg" alt="discord" draggable="false" /></a>
      <a href="https://klalo.pl/github" target="_blank">
        <img src="@/assets/icons/github.svg" alt="github" draggable="false" /></a>
      <a href="https://klalo.pl/facebook" target="_blank">
        <img src="@/assets/icons/facebook.svg" alt="facebook" draggable="false" /></a>
      <a href="https://klalo.pl/twitter" target="_blank">
        <img src="@/assets/icons/twitter.svg" alt="twitter" draggable="false" /></a>
    </div>

    <p class="note">
      kliknij w&nbsp;ikonę, aby przenieść&nbsp;się do&nbsp;odpowiedniej strony
    </p>
  </div>

  <div class="more">
    <h2>Mam jeszcze kilka innych botów, przetestuj je na swoim serwerze!</h2>

    <div class="bots">
      <Bot name="Dimension" :img=dimension link="http://dimension.klalo.pl/" />
      <Bot name="MC_Connect" :img=mc_connect link="http://discord.klalo.pl/mc_connect/" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.photo {
  margin-top: -1rem;
  height: 14rem;
  display: flex;
  justify-content: center;
  user-select: none;

  img {
    height: 13rem;
    border-radius: var(--roundedBig);
    position: absolute;
  }

  #quanosek {
    opacity: 0;
    transition: var(--transitionSmooth);

    &:hover {
      opacity: 1;
    }
  }
}

hr {
  margin-bottom: 1.5rem;
  height: 1px;
  width: 24rem;
  border: none;
  border-radius: var(--roundedMedium);
  background-color: var(--font-color-3);
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  user-select: none;

  img {
    filter: invert(1);
    opacity: 0.75;
    height: 1.75rem;
    width: auto;
    transition: var(--transitionFast);

    @media (min-width: 1025px) {
      &:hover {
        opacity: 1;
      }
    }

    @media (max-width: 768px) {
      & {
        height: 1.5rem;
      }
    }
  }
}

.note {
  margin-top: 1rem;
  opacity: 0.65;
  font-size: 0.8rem;
  text-align: center;
}

.more {
  margin: 0 3%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.bots {
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem 1rem;
  user-select: none;
}


@media (max-width: 768px) {
  hr {
    width: 20rem;
  }

  .note {
    font-size: 0.6rem;
  }

  .bots {
    gap: 1rem;
  }
}
</style>
