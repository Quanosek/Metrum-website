<template>
  <main>

    <div class="title">
      <h1>Nazywam się Jakub&nbsp;Kłało!</h1>
      <p>Jestem 20-letnim studentem Inżynierii Multimediów. Już od 2&nbsp;lat tworzę boty Discord oraz różne strony
        internetowe.<br>Jest to nie&nbsp;tylko moja wielka pasja, ale też coś, z&nbsp;czym nią planuję wiązać swoją
        przyszłość.</p>

      <div class="photos">
        <img id="quanosek" src="@/assets/author/quanosek.png" alt="@Quanosek">
        <img id="kubaklalo" src="@/assets/author/kubaklalo.png" alt="Jakub Kłało">
      </div>

      <hr>

      <div class="links">
        <a href="https://klalo.pl" target="_blank">
          <img src="@/assets/icons/website.svg" alt="website" draggable="false"></a>
        <a href="https://discordapp.com/users/405318200998232064" target="_blank">
          <img src="@/assets/icons/discord.svg" alt="discord" draggable="false"></a>
        <a href="https://github.com/Quanosek" target="_blank">
          <img src="@/assets/icons/github.svg" alt="github" draggable="false"></a>
        <a href="https://www.facebook.com/Quanosek" target="_blank">
          <img src="@/assets/icons/facebook.svg" alt="facebook" draggable="false"></a>
        <a href="https://twitter.com/Quanosek" target="_blank">
          <img src="@/assets/icons/twitter.svg" alt="twitter" draggable="false"></a>
      </div>

      <p class="note">kliknij w ikonę, aby przenieść się do odpowiedniej strony</p>
    </div>

    <div class="more">
      <h2>Mam jeszcze kilka innych botów, nie zapomnij ich przetestować!</h2>
    </div>

  </main>
</template>

<script>
export default {
  name: "viewAuthor",
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 2rem;
  text-align: center;
  gap: 2rem;
  font-size: 110%;

  h1 {
    font-size: 2.2rem;
  }
}

.photos {
  margin-top: 2rem;
  height: 220px;

  display: flex;
  justify-content: center;

  img {
    height: 200px;
    width: auto;

    border-radius: 15px;
    position: absolute;
  }
}

#kubaklalo {
  z-index: 1;
  transition: .6s, filter 1.5s ease-in-out;

  &:hover {
    opacity: 0;
  }
}

hr {
  margin-bottom: 1.5rem;
  border: none;
  background-color: var(--text1);
  height: 1px;
  width: 300px;
  border-radius: 5px;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;

  img {
    filter: invert(1);
    opacity: 80%;
    transition: .2s;
    height: 26px;
    width: auto;

    @media (min-width: 1025px) {
      &:hover {
        opacity: 100%;
      }
    }
  }
}

.note {
  margin: 1rem 0 0 0;
  opacity: 65%;
  font-size: 70%;

  @media (max-width: 768px) {
    font-size: 55%;
  }
}

.more {
  margin-top: 3rem;
  text-align: center;
}
</style>