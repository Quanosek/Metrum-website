<template>
  <main>
    <div class="title">
      <h1>Pojawił się błąd!</h1>
      <p>
        Strona, z&nbsp;którą próbujesz się połączyć napotkała pewien problem.
        Sprawdź poprawność linku lub spróbuj ponownie później.
      </p>
      <p>
        Jeśli błąd będzie&nbsp;się powtarzać
        <a href="mailto:kubaklalo@gmail.com">skontaktuj się</a>
        z&nbsp;administratorem strony.
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: "viewError",
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
</style>
