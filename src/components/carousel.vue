<template>
  <div>
    <div class="slider">

      <div class="slides" :style="{ right: distance + 'vw' }">

        <div class="slide" id="welcome">
          <h1>Najlepszy bot Metrum!</h1>
          <p>Bot będący najlepszą, darmową alternatywą dla popularnych botów muzycznych Discord, oferujący niezwykle
            dużo
            funkcji, w&nbsp;tym <b>możliwość odtwarzania, nie tylko dowolnych tytułów, ale również linków YouTube,
              Spotify
              czy
              SoundCloud</b> zawierających jeden utwór lub całą playlistę! Nie czekaj, wypróbuj już&nbsp;teraz!
          </p>
          <h2>Możesz wybierać spośród 3&nbsp;wersji!</h2>
        </div>

        <div class="slide">
          <h1>Metrum</h1>
          <p>Flagowy bot muzyczny, zawierający <b>wszystkie sprawdzone funkcje</b>, nigdy nie&nbsp;zawodzi!</p>
          <div class="invite button secondary">
            <a href="https://discord.com/api/oauth2/authorize?client_id=890577647980146688&permissions=414501432640&scope=bot%20applications.commands"
              target="_blank">
              Zaproś na serwer!<img alt="link" src="@/assets/icons/link.svg" draggable="false">
            </a>
          </div>
        </div>

        <div class="slide">
          <h1>Metrum 2</h1>
          <p>Jeśli główny bot jest zbyt obciążony, albo chcesz być w&nbsp;stanie odtwarzać <b>dwie piosenki
              jednocześnie</b> ten bot jest idealnym rozwiązaniem!
          </p>
          <div class="invite button secondary">
            <a href="https://discord.com/api/oauth2/authorize?client_id=901543092547637289&permissions=414501432640&scope=bot%20applications.commands"
              target="_blank">
              Zaproś na serwer!<img alt="link" src="@/assets/icons/link.svg" draggable="false">
            </a>
          </div>
        </div>

        <div class="slide">
          <h1>Metrum 3</h1>
          <p>Najmniej oblegana wersja bota, dodatkowo zawsze <b>jako pierwszy otrzymuje najnowsze funkcje</b>, ale
            przez&nbsp;to potrafi być niestabilny.
          </p>
          <div class="invite button secondary">
            <a href="https://discord.com/api/oauth2/authorize?client_id=901543130468323399&permissions=414501432640&scope=bot%20applications.commands"
              target="_blank">
              Zaproś na serwer!<img alt="link" src="@/assets/icons/link.svg" draggable="false">
            </a>
          </div>
        </div>

      </div>

      <label @click="distance = 100"><img alt="Metrum 1" src="@/assets/bot/logo1.png" draggable="false"></label>
      <label @click="distance = 200"><img alt="Metrum 2" src="@/assets/bot/logo2.png" draggable="false"></label>
      <label @click="distance = 300"><img alt="Metrum 3" src="@/assets/bot/logo3.png" draggable="false"></label>

    </div>
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
  padding: 6rem 0 7rem;
  text-align: center;
  overflow: hidden;

  background: linear-gradient(270deg, #001e61, #691f74);
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
  width: 400vw;

  display: flex;
  text-align: center;
  position: relative;

  transition: .3s, filter 1.5s ease-in-out;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    &#names {
      flex-direction: row;
      font-weight: 600;
      position: relative;
      right: 4px;
      gap: 114px;
    }
  }
}

#welcome {
  justify-content: space-between;

  h1 {
    font-size: 300%;
  }

  h2 {
    margin: 2rem 0 3rem;
  }

  @media (max-width: 768px) {
    h1 {
      margin-top: -3rem;
    }

    h2 {
      margin: 0 0 2rem;
    }
  }
}

.slide {
  width: 100vw;
  margin: 0 1%;
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

  user-select: none;

  margin: 0 2rem;
  cursor: pointer;

  img {
    width: 8rem;
    transition: .2s;
    border-radius: 10px;
  }

  @media (min-width: 1025px) {
    :hover {
      box-shadow: 0 0 1.25rem 0.25rem rgba($color: #000000, $alpha: 0.2);
      transform: translateY(-5%);
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
    padding-bottom: 3rem;
  }

  label {

    margin: 0 .5rem;

    img {
      width: 5.5rem;
    }
  }
}
</style>