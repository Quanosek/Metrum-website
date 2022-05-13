<template>
  <div class="tabs three">

    <input id="tabC-1" type='radio' name='tabGroupC' checked>
    <input id="tabC-2" type='radio' name='tabGroupC'>
    <input id="tabC-3" type='radio' name='tabGroupC'>

    <div class='row'>

      <div id="logo1">
        <h1>Metrum</h1>
        <span>Nasz flagowy bot muzyczny dla Twojego serwera Discord! Urządź karaoke, zagraj w jaka to melodia lub po
          prostu zagraj ze znajomymi z przyjemną muzyką</span>
        <br>
        <a href="" class="pseudo button" id="button__add">Dodaj do serwera</a>
      </div>

      <div id="logo2">
        <h1>Metrum 2</h1>
        <span>Metrum jest obciążony lub chcesz być w stanie odtwarzać dwie piosenki jednocześnie?</span>
        <br>
        <a href="" class="pseudo button" id="button__add">Dodaj do serwera</a>
      </div>

      <div id="logo3">
        <h1>Metrum 3</h1>
        <span>Dostaje aktualizacje jako pierwszy, przez co może nie zawsze być stabilny!</span>
        <br>
        <a href="" class="pseudo button" id="button__add">Dodaj do serwera</a>
      </div>

    </div>

    <label for="tabC-1"><img src="@/assets/logo.jpg" draggable="false"></label>
    <label for="tabC-2"><img src="@/assets/logo2.jpg" draggable="false"></label>
    <label for="tabC-3"><img src="@/assets/logo3.jpg" draggable="false"></label>

  </div>
</template>

<script>
export default {
  name: 'ComponentCarousel',
};
</script>

<style lang="scss" scoped>

.tabs {
  align-items: center;
  flex-direction: row-reverse;
}

h1 {
  font-size: 4rem;
}

#button__add {
  animation: jump 1s ease infinite;
  background-color: white;
  color: #691573;
  margin-top: 2rem;
  font-size: 22px;
}

.row {
  display: flex;

}

label {
  img {
    max-width: 8rem;
    transition: .2s;
    border-radius: 0.5rem;
  }

  & :hover {
    box-shadow: 0 0 1.25rem 0.25rem rgba($color: black, $alpha: 0.2);
    transform: scale(1.05);
  }
}

@keyframes jump {
  0% {
    transform: translateY(0%)
  }

  50% {
    transform: translateY(20%)
  }

  100% {
    transform: translateY(0%)
  }
}
</style>