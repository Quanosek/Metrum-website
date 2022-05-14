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
    </div>

    <div class="category">
      <h2>Komendy dla utworu:</h2>
      <div class="grid">

        <div class="command-name">
          <h3>Przewinięcie utworu do przodu o&nbsp;podaną liczbę sekund (domyślnie:&nbsp;10)</h3>
          <span class="snippet">forward (czas)
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('forward')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Wyświetlenie tekstu do&nbsp;odtwarzanego utworu</h3>
          <span class="snippet">lyrics (tytuł)
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('lyrics')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Wstrzymanie/wznowienie odtwarzania utworu</h3>
          <span class="snippet">pause
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('pause')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Odtwarzanie muzyki (podaj tytuł utworu lub&nbsp;link Youtube, Spotify albo&nbsp;SoundCloud!)</h3>
          <span class="snippet">play (tytuł lub link)
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('play')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Wznownienie odtwarzania utworu</h3>
          <span class="snippet">resume
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('resume')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Przewinięcie utworu do&nbsp;tyłu o&nbsp;podaną liczbę sekund (domyślnie:&nbsp;10)</h3>
          <span class="snippet">rewind (czas)
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('rewind')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Przewinięcie utworu do&nbsp;podanego czasu (w&nbsp;sekundach)</h3>
          <span class="snippet">seek (czas)
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('seek')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Pominięcie obecnie granego utworu (głosowanie)</h3>
          <span class="snippet">skip
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('skip')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

      </div>
    </div>

    <div class="category">
      <h1>Komendy do obsługi kolejki utworów:</h1>
      <div class="grid">

        <div class="command-name">
          <h3>Dodanie obecnie granego utworu na&nbsp;koniec kolejki</h3>
          <span class="snippet">addend (tytuł lub link)
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('addend')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Dodanie podobnego do&nbsp;obecnie granego utworu na&nbsp;koniec kolejki</h3>
          <span class="snippet">addrelated
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('addrelated')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Odtworzenie poprzednio granego utworu w&nbsp;kolejce</h3>
          <span class="snippet">previous
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('previous')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Autoodtwarzanie podobnych utworów (radio&nbsp;utworu)</h3>
          <span class="snippet">radio
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('radio')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Przełączanie zapętlenia: utworu/kolejki/wyłączone</h3>
          <span class="snippet">repeat
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('repeat')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Jednorazowe wymieszanie kolejki utworów (głosowanie)</h3>
          <span class="snippet">shuffle
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('shuffle')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

      </div>
    </div>

    <div class="category">
      <h1>Komendy informacyjne:</h1>
      <div class="grid">

        <div class="command-name">
          <h3>Wiadomość informacyjna</h3>
          <span class="snippet">help
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('help')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Zaproś mnie na&nbsp;swój serwer</h3>
          <span class="snippet">invite
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('invite')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Informacje o&nbsp;odtwarzanym utworze</h3>
          <span class="snippet">nowplaying
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('nowplaying')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Ping-pong</h3>
          <span class="snippet">ping
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('ping')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Informacje o&nbsp;kolejce utworów</h3>
          <span class="snippet">queue
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('queue')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Wyszukiwanie utworów po&nbsp;podanym tytule</h3>
          <span class="snippet">search (tytuł lub link)
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('search')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

      </div>
    </div>

    <div class="category">
      <h1>Komendy tylko dla moderacji:</h1>
      <div class="grid">

        <div class="command-name">
          <h3>Dodanie podanego utworu jako&nbsp;następny w&nbsp;kolejce</h3>
          <span class="snippet">add (tytuł lub link)
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('add')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Wyczyszczenie całej kolejki (łącznie z&nbsp;obecnie granym utworem)</h3>
          <span class="snippet">clear
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('clear')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Wymuszenie wyjścia z&nbsp;kanału głosowego</h3>
          <span class="snippet">forceleave
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('forceleave')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Wymuszenie puszczenia podanego utworu</h3>
          <span class="snippet">forceplay (tytuł lub link)
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('forceplay')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Wymuszenie pominięcia utworu</h3>
          <span class="snippet">forceskip
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('forceskip')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Pominięcie określonej liczby utworów w&nbsp;kolejce (domyślnie:&nbsp;1)</h3>
          <span class="snippet">jump (liczba)
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('jump')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Przesunięcie wybranej pozycji w&nbsp;kolejce utworów</h3>
          <span class="snippet">move (skąd) (gdzie)
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('move')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Zmiana prefixu bota</h3>
          <span class="snippet">prefix
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('prefix')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
            </button>
          </span>
        </div>

        <div class="command-name">
          <h3>Usunięcie wybranej pozycji z&nbsp;kolejki utworów (domyślnie obecnie grany)</h3>
          <span class="snippet">remove (numer)
            <button title="kliknij, aby skopiować!" onclick="navigator.clipboard.writeText('remove')">
              <img src="@/assets/copy.svg" alt="skopiuj" draggable="false">
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

  button {
    display: flex;
    align-items: center;
    justify-items: center;
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