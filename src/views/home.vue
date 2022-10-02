<script setup>
import MySlider from "@/components/slider.vue";
</script>

<template>
  <main>
    <MySlider />

    <div class="info">
      <div>
        <h2>Używaj jak chcesz!</h2>
        <p>
          Możesz bez problemu korzystać z&nbsp;własnego prefixu, jak
          i&nbsp;ukośnika!
        </p>
      </div>

      <div>
        <h2>Pełna dowolność!</h2>
        <p>
          Bot umożliwia odtwarzanie po wyszukanym tytule, jak i&nbsp;linkach.
          Możesz tworzyć własne kolejki, lub włączyć auto-odtwarzanie!
        </p>
      </div>

      <div class="media">
        <img src="@/assets/media/YouTube.svg" alt="YouTube" />
        <img src="@/assets/media/Spotify.svg" alt="Spotify" />
        <img src="@/assets/media/SoundCloud.svg" alt="SoundCloud" />
      </div>

      <div>
        <h2>Mnogość funkcji!</h2>
        <p>
          Do dyspozycji jest m.in. zapętlanie, system pomijania
          z&nbsp;głosowaniem, odtwarzanie transmisji live, pauzowanie,
          przewijanie i&nbsp;wiele więcej.
        </p>
      </div>

      <div>
        <h2>Szybki i&nbsp;zawsze dostępny</h2>
        <p>
          Zapewnia zawsze błyskawiczną odpowiedź na komendy, auto-dołączanie do
          kanałów głosowych i&nbsp;z&nbsp;nich wychodzenie!
          <br />
          Kiedy akurat jest niedostępny, znaczy, że&nbsp;wgrywane są
          aktualizacje.
        </p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.info {
  margin-top: 3rem;
  padding: 0 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;

  div {
    text-align: center;

    h2 {
      font-size: 2rem;
    }
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
