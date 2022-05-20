<template>
  <main>

    <div class="description">
      <h1>Lista dostępnych komend!</h1>
      <p>Jest to pełna lista wszystkich dostępnych komend obsługiwanych przez bota, wraz z&nbsp;ich wytłumaczeniem.<br>
        Wszystkie komendy są obsługiwane w&nbsp;wersji z&nbsp;prefixem (domyślnie: <b>-</b> ) oraz po ukośniku (tzw.
        slash
        commands).</p>
      <p>Jeśli zapomniał*ś jaki jest obecnie ustawiony prefix bota, wystarczy, że&nbsp;go oznaczysz wpisując na czacie
        <b>@Metrum</b>!
      </p>
      <p>Kliknij w ikonę obok nazwy komendy, aby ją skopiować!</p>
    </div>

    <div class="category">
      <h2>Komendy dla utworu:</h2>
      <div class="grid">

        <div class="command-name">
          <h3>Przewinięcie utworu do przodu o&nbsp;podaną liczbę sekund (domyślnie:&nbsp;10)</h3>
          <span class="snippet">forward (czas)
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('forward')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Wyświetlenie tekstu do&nbsp;odtwarzanego utworu</h3>
          <span class="snippet">lyrics (tytuł)
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('lyrics')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Wstrzymanie/wznowienie odtwarzania utworu</h3>
          <span class="snippet">pause
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('pause')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Odtwarzanie muzyki (podaj tytuł utworu lub&nbsp;link Youtube, Spotify albo&nbsp;SoundCloud!)</h3>
          <span class="snippet">play (tytuł lub link)
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('play')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Wznowienie odtwarzania utworu</h3>
          <span class="snippet">resume
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('resume')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Przewinięcie utworu do&nbsp;tyłu o&nbsp;podaną liczbę sekund (domyślnie:&nbsp;10)</h3>
          <span class="snippet">rewind (czas)
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('rewind')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Przewinięcie utworu do&nbsp;podanego czasu (w&nbsp;sekundach)</h3>
          <span class="snippet">seek (czas)
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('seek')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Pominięcie obecnie granego utworu (głosowanie)</h3>
          <span class="snippet">skip
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('skip')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

      </div>
    </div>

    <div class="category">
      <h2>Komendy do obsługi kolejki utworów:</h2>
      <div class="grid">

        <div class="command-name">
          <h3>Dodanie obecnie granego utworu na&nbsp;koniec kolejki</h3>
          <span class="snippet">addend (tytuł lub link)
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('addend')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Dodanie podobnego do&nbsp;obecnie granego utworu na&nbsp;koniec kolejki</h3>
          <span class="snippet">addrelated
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('addrelated')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Odtworzenie poprzednio granego utworu w&nbsp;kolejce</h3>
          <span class="snippet">previous
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('previous')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Auto-odtwarzanie podobnych utworów (radio&nbsp;utworu)</h3>
          <span class="snippet">radio
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('radio')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Przełączanie zapętlenia: utworu/kolejki/wyłączone</h3>
          <span class="snippet">repeat
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('repeat')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Jednorazowe wymieszanie kolejki utworów (głosowanie)</h3>
          <span class="snippet">shuffle
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('shuffle')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

      </div>
    </div>

    <div class="category">
      <h2>Komendy informacyjne:</h2>
      <div class="grid">

        <div class="command-name">
          <h3>Wiadomość informacyjna</h3>
          <span class="snippet">help
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('help')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Zaproś mnie na&nbsp;swój serwer</h3>
          <span class="snippet">invite
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('invite')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Informacje o&nbsp;odtwarzanym utworze</h3>
          <span class="snippet">nowplaying
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('nowplaying')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Ping-pong</h3>
          <span class="snippet">ping
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('ping')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Informacje o&nbsp;kolejce utworów</h3>
          <span class="snippet">queue
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('queue')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Wyszukiwanie utworów po&nbsp;podanym tytule</h3>
          <span class="snippet">search (tytuł lub link)
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('search')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

      </div>
    </div>

    <div class="category">
      <h2>Komendy tylko dla moderacji:</h2>
      <div class="grid">

        <div class="command-name">
          <h3>Dodanie podanego utworu jako&nbsp;następny w&nbsp;kolejce</h3>
          <span class="snippet">add (tytuł lub link)
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('add')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Wyczyszczenie całej kolejki (łącznie z&nbsp;obecnie granym utworem)</h3>
          <span class="snippet">clear
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('clear')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Wymuszenie wyjścia z&nbsp;kanału głosowego</h3>
          <span class="snippet">forceleave
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('forceleave')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Wymuszenie puszczenia podanego utworu</h3>
          <span class="snippet">forceplay (tytuł lub link)
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('forceplay')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Wymuszenie pominięcia utworu</h3>
          <span class="snippet">forceskip
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('forceskip')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Pominięcie określonej liczby utworów w&nbsp;kolejce (domyślnie:&nbsp;1)</h3>
          <span class="snippet">jump (liczba)
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('jump')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Przesunięcie wybranej pozycji w&nbsp;kolejce utworów</h3>
          <span class="snippet">move (skąd) (gdzie)
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('move')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Zmiana prefixu bota</h3>
          <span class="snippet">prefix
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('prefix')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Usunięcie wybranej pozycji z&nbsp;kolejki utworów (domyślnie obecnie grany)</h3>
          <span class="snippet">remove (numer)
            <button type="button" title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('remove')">
              <img src="@/assets/icons/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: "viewCommands",
};
</script>

<style lang="scss" scoped>
main {
  gap: 4rem;
}

.description {
  text-align: center;
  margin: 2rem 0 -1rem;
  font-size: 110%;

  h1 {
    font-size: 2.2rem;
  }
}

.category {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
  }

  h2 {
    font-size: 1.8rem;
  }
}

.grid {
  margin-top: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.command-name {
  padding: 1.5rem 1.8rem;
  width: 17.8rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #282a2f;
  background-color: #303339;

  @media (min-width: 1025px) {
    &:hover {
      border-color: #131517;
    }
  }
}

.snippet {
  font-family: Consolas;
  margin: 1.5rem -1rem 0;
  padding: .5rem;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: #18191c;
  gap: .5rem;
  user-select: none;

  button {
    display: flex;
    align-items: center;
    justify-items: center;
    cursor: pointer;
    background-color: #ffffff;
    border-radius: 5px;

    &:active {
      background-color: #cfcfcf;
      transition: 0.1s;
    }

    img {
      width: 1.3rem;
      height: 1.6rem;
      padding: .2rem;
    }
  }
}
</style>