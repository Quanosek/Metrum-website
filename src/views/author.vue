<template>
  <main>

    <div class="title">
      <h1>Nazywam się Jakub&nbsp;Kłało!</h1>
      <p>Jestem 20-letnim studentem Inżynierii Multimediów. Już od ponda 2&nbsp;lat tworzę najróżniejsze boty Discord
        czy strony internetowe.<br>Jest to nie&nbsp;tylko moja wielka pasja, ale też coś, z&nbsp;czym planuję wiązać
        swoją przyszłość.</p>

      <div class="photos">
        <img id="kubaklalo" src="@/assets/author/kubaklalo.png" alt="Jakub Kłało">
        <img id="quanosek" src="@/assets/author/quanosek.png" alt="@Quanosek">
      </div>

      <hr>

      <div class="links">
        <a href="https://www.klalo.pl/" target="_blank">
          <img src="@/assets/icons/website.svg" alt="website" draggable="false"></a>
        <a href="https://discordapp.com/users/405318200998232064/" target="_blank">
          <img src="@/assets/icons/discord.svg" alt="discord" draggable="false"></a>
        <a href="https://github.com/Quanosek/" target="_blank">
          <img src="@/assets/icons/github.svg" alt="github" draggable="false"></a>
        <a href="https://facebook.com/Quanosek/" target="_blank">
          <img src="@/assets/icons/facebook.svg" alt="facebook" draggable="false"></a>
        <a href="https://twitter.com/Quanosek/" target="_blank">
          <img src="@/assets/icons/twitter.svg" alt="twitter" draggable="false"></a>
      </div>

      <p class="note">kliknij w ikonę, aby przenieść się do odpowiedniej strony</p>
    </div>

    <div class="more">
      <h2>Mam jeszcze kilka innych botów, nie&nbsp;zapomnij ich przetestować!</h2>
      <div class="bots">

        <div>
          <a href="http://dimention.klalo.pl/" target="_blank">
            <img src="@/assets/author/dimention.png" alt="dimention">
          </a>
          <p>Dimention</p>
        </div>
        <div>
          <a href="https://discord.com/api/oauth2/authorize?client_id=908847270169022575&permissions=414464732240&scope=bot%20applications.commands"
            target="_blank">
            <img src="@/assets/author/mc_connect.png" alt="mc_connect">
          </a>
          <p>MC_Connect</p>
        </div>

      </div>
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

#quanosek {
  opacity: 0;
  transition: .6s, filter 1.5s ease-in-out;

  &:hover {
    opacity: 1;
  }
}

hr {
  margin-bottom: 1.5rem;
  border: none;
  background-color: var(--text1);
  height: 1px;
  width: 400px;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 300px;
  }
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
  margin-top: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.bots {
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem 1rem;

  div {
    height: 10rem;
    width: 8rem;
    background-color: #2f3136;
    padding: .6rem .6rem;
    border-radius: 8px;
    transition: .15s;

    p {
      margin-top: .5rem;
      font-size: 90%;
      font-weight: 600;
      transition: .15s;
    }

    @media (min-width: 1025px) {
      &:hover {
        background-color: #292b2f;
        box-shadow: 0 .2rem 1rem 0rem rgba($color: #000000, $alpha: 0.2);
        transform: translateY(-5%);

        p {
          color: #ffffff;
        }
      }
    }
  }

  img {
    height: 8rem;
    width: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    gap: 1rem;

    div {
      height: 8rem;
      width: 6rem;

      p {
        font-size: 85%;
      }
    }

    img {
      height: 6rem;
    }
  }
}
</style>