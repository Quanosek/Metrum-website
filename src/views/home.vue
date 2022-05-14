<template>
  <main>

    <Carousel />

    <div class="info">

      <div>
        <h1>Używaj jak chcesz!</h1>
        <p>Możesz bez problemu korzystać z własnego prefixu, jak i ukośnika!</p>
      </div>
      <div>
        <h1>Pełna dowolność!</h1>
        <p>Bot umożliwia odtwarzanie po wyszukanym tytule, jak i linkach. Możesz tworzyć własne kolejki, lub włączyć
          autoodtwarzanie!</p>
      </div>
      <div class="media">
        <img src="@/assets/media/YouTube.svg" alt="YouTube">
        <img src="@/assets/media/Spotify.svg" alt="Spotify">
        <img src="@/assets/media/SoundCloud.svg" alt="SoundCloud">
      </div>
      <div>
        <h1>Mnogość funkcji!</h1>
        <p>Do dyspozycji jest m.in. zapętlanie, system pomijania z głosowaniem, odtwarzanie transmisji live, pauzowanie,
          przewijanie i wiele więcej.</p>
      </div>
      <div>
        <h1>Szybki i zawsze dostępny</h1>
        <p>Zapewnia zawsze błyskawiczną odpowiedź na komendy, autodołączanie do kanałów głosowych i z nich wychodzenie!
          <br>
          Kiedy akurat jest niedostępny, znaczy, że wgrywane są aktualizacje.
        </p>
      </div>

    </div>

  </main>
</template>

<script>
import Carousel from '../components/carousel.vue';

export default {
  name: 'viewHome',
  components: {
    Carousel,
  },
};
</script>

<style lang="scss" scoped>
.info {
  margin-top: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;

  div {
    text-align: center;
  }
}

.media {
  display: flex;
  gap: 3rem;

  img {
  height: 100px;
  width: auto;
  }

  @media (max-width: 768px) {
  gap: 2rem;
  img {
  height: 60px;
  width: auto;
  }
  }
}
</style>