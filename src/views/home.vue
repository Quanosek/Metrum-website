<template>
  <main>

    <carousel />

    <div class="body-wrapper">

      <div class="body-main">

        <h1>Szybki. Nawet bardzo!</h1>
        <span>Reaguje na polecenia w mgnieniu oka</span>
        <h1>Niezawodny</h1>
        <span>Do twojej dyspozycji przez 99.97% czasu</span>
        <h1>Dostosuj do swoich potrzeb</h1>
        <span>Zmień prefix i nie tylko</span>

      </div>

      <div class="body-main">

        <h1 class="text-add">Na co czekasz?</h1>
        <a href="/" class="pseudo button" id="button__add">Dodaj do serwera</a>
        <!--<img src="../../public/favicon.svg" alt="logo metrum">-->
        
      </div>

    </div>

  </main>
</template>

<script>
// @ is an alias to /src
import carousel from '../components/carousel.vue'

export default {
  name: 'viewHome',
  components: {
    carousel
  }
}
</script>

<style lang="scss" scoped>
.body-wrapper {
  flex-flow: row wrap;
  display: flex;
  justify-content: space-around;
  padding: 8rem 0;
  overflow: hidden;
}

.body-main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0 0 0rem 0.25rem #3b3d3f;
  border: solid;
  border-color: #23272A;
  background-color: #3b3d3f;
  max-width: 36rem;
  min-width: 100%;

  /* img {} */

  @media screen and (min-width: 800px) {
    min-width: 32rem;
  }

  h1 {
    font-size: 1.75rem;
  }
}

#button__add {
  background-color: white;
  color: #691573;
  margin-top: 2rem;
  font-size: 22px;
}

.text-add {
  animation: neon 1s ease infinite;
  font-size: 3rem !important;
}

@keyframes neon {
  0% {
    text-shadow: 0 0 1rem white
  }

  50% {
    text-shadow: 0 0 3rem white
  }

  100% {
    text-shadow: 0 0 1rem white
  }
}
</style>