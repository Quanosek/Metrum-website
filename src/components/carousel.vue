<template>
  <div class="slider">

    <div class='slides' :style="{ right: distance + 'vw' }">

      <div class="slide">
        <h1>Metrum</h1>
        <p>Bot będący najlepszą, darmową alternatywą dla popularnych botów muzycznych Discord, oferujący niezwykle dużo
          fukcji, w tym <b>możliwość odtwarzania, nie tylko dowolnych tytułów, ale również linków YouTube, Spotify czy
            SoundColud</b> zawierających jeden utwór lub całą playlistę! Nie czekaj, wypróbuj już teraz!
        </p>
        <div class="button secondary">
          <a href="#">
            Zaproś na serwer!<img alt="link" src="@/assets/icons/link.svg" draggable="false">
          </a>
        </div>
      </div>

      <div class="slide">
        <h1>Metrum 2</h1>
        <p>Jeśli główny bot jest zbyt obciążony, albo chcesz być w stanie odtwarzać <b>dwie piosenki jednocześnie</b>
          ten bot jest idelanym rozwiązaniem!</p>
        <div class="button secondary">
          <a href="#">
            Zaproś na serwer!<img alt="link" src="@/assets/icons/link.svg" draggable="false">
          </a>
        </div>
      </div>

      <div class="slide">
        <h1>Metrum 3</h1>
        <p>Najmniej oblegana werjsa bota, dodatkowo zawsze <b>jako pierwszy otrzymuje najnowsze fukcje</b>, tym samym
          potrafi być niestabilny.</p>
        <div class="button secondary">
          <a href="#">
            Zaproś na serwer!<img alt="link" src="@/assets/icons/link.svg" draggable="false">
          </a>
        </div>
      </div>

    </div>

    <label @click="distance = 0"><img alt="logo1" src="@/assets/bot/logo1.jpg" draggable="false"></label>
    <label @click="distance = 100"><img alt="logo2" src="@/assets/bot/logo2.jpg" draggable="false"></label>
    <label @click="distance = 200"><img alt="logo3" src="@/assets/bot/logo3.jpg" draggable="false"></label>

  </div>
</template>

<script>
export default {
  name: 'ComponentCarousel',
  data() {
    return {
      distance: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.slider {
  margin: 0 -3%;
  padding: 6rem 0 0;
  text-align: center;
  overflow: hidden;
  height: 35rem;

  background: linear-gradient(270deg, #122060, #691573);
  background-size: 400% 400%;

  animation: change 20s ease-in-out infinite;
}

h1 {
  font-size: 4rem;
}

p {
  margin-top: 2rem;

  color: #ffffff;
  font-size: 1.2rem;
}

.slides {
  width: 300vw;

  display: flex;
  text-align: center;
  position: relative;

  transition: .3s, filter 1.5s ease-in-out;

  div {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
}

.slide {
  padding: 0 1%;
}

.button {
  margin: 2rem 0 5rem;
  padding: .8rem 1rem;
  width: 220px !important;

  font-size: 1.4rem;
  border-radius: 5px;

  cursor: pointer;
  animation: jump 1s ease infinite;

  a {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  img {
    filter: invert(1);
    position: relative;
    bottom: 1px;
  }
}

label {

  margin: 0 2rem;
  cursor: pointer;

  img {
    width: 8rem;
    transition: .2s;
    border-radius: 10px;
  }

  @media (min-width: 1025px) {
    & :hover {
      box-shadow: 0 0 1.25rem 0.25rem rgba($color: #000000, $alpha: 0.2);
      transform: scale(1.05);
    }
  }
}

@keyframes change {
  0% {
    background-position: 0 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
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

@media (max-width: 768px) {
  .slider {
    height: 42rem;
  }

  label {

    margin: 0 .5rem;

    img {
      width: 5.5rem;
    }
  }
}
</style>