<script setup lang="ts">
import { RouterLink } from "vue-router";

import LinkIcon from "@/components/icons/hiperlinkIcon.vue";
import Command from "@/components/commandComponent.vue";
</script>

<template>
  <div class="pageTitle">
    <h1>Lista wszystkich komend</h1>

    <div>
      <p>
        Na tej stronie znajdziesz <b>pełną listę</b> obsługiwanych komend. Bot
        obsługuje <b>tradycyjne komendy</b> (przez podanie prefixu i wpisanie
        nazwy komendy lub jej skrótu) oraz tzw. <b>slash commands</b>, czyli
        komendy po ukośniku - wbudowane w panel pisania wiadomości na kanale
        tekstowym.
      </p>
      <p>
        Przed użyciem komend <b>koniecznie upewnij się</b>, że bot posiada
        odpowiednie uprawnienia do wysyłania wiadomości, odczytywania ich
        zawartości oraz reagowania. Brak tych uprawnień może powodować problemy
        z działaniem komend, niereagowaniem na nie, a w ostateczności do
        ponownego uruchomienia bota.
      </p>
      <p>
        Jeśli zapomnisz jaki ustawiłeś prefix, nic nie szkodzi, wystarczy, że
        oznaczysz bota w wiadomości (<b>wpisując @Metrum</b>), wtedy przypomni
        Ci swoje najpotrzebniejsze informacje!
      </p>
    </div>
  </div>

  <div class="commands">
    <section id="song">
      <div class="title">
        <h2>Utwór:</h2>

        <RouterLink to="/commands#song">
          <LinkIcon />
        </RouterLink>
      </div>

      <div class="list">
        <Command
          title="forward"
          name="⏩ | Forward"
          description="Przewinięcie utworu do przodu o podaną wartość (domyślnie: 10 sekund)"
          aliases="-fw"
        />

        <Command
          title="lyrics"
          name="📄 | Lyrics"
          description="Wyświetlenie tekstu dla obecnie odtwarzanego lub podanego utworu"
          aliases="-ly, -l"
        />

        <Command
          title="nowplaying"
          name="💿 | Nowplaying"
          description="Informacje o obecnie odtwarzanym utworze"
          aliases="-np"
        />

        <Command
          title="pause"
          name="⏯️ | Pause"
          description="Wstrzymanie/wznowienie odtwarzania utworu"
          aliases="-ps"
        />

        <Command
          title="play"
          name="🎵 | Play"
          description="Odtwarzanie muzyki (podaj tytuł utworu lub dowolny link)"
          aliases="-p"
        />

        <Command
          title="resume"
          name="▶️ | Resume"
          description="Wznowienie odtwarzania utworu"
          aliases="-rsm, -rs"
          embed="<p>Komenda /pause pokrywa się z działaniem tej komendy.</p>"
        />

        <Command
          title="rewind"
          name="⏪ | Rewind"
          description="Przewinięcie utworu do tyłu o podaną wartość (domyślnie: 10 sekund)"
          aliases="-rw"
        />

        <Command
          title="seek"
          name="⏺️ | Seek"
          description="Przewinięcie obecnie granego utworu do podanej wartości"
          aliases="-sk"
        />

        <Command
          title="skip"
          name="⏭️ | Skip"
          description="Pominięcie obecnie granego utworu (głosowanie)"
          aliases="-s"
        />
      </div>
    </section>

    <section id="queue">
      <div class="title">
        <h2>Kolejka:</h2>

        <RouterLink to="/commands#queue">
          <LinkIcon />
        </RouterLink>
      </div>

      <div class="list">
        <Command
          title="addend"
          name="➕ | Addend"
          description="Dodanie obecnie granego utworu na koniec kolejki"
          aliases="-ade, -ae"
        />

        <Command
          title="addrelated"
          name="⤵️ | Addrelated"
          description="Dodanie podobnego do obecnie granego utworu na koniec kolejki"
          aliases="-adr, -ar"
        />

        <Command
          title="filter"
          name="🪄 | Filter"
          description="Ustaw filtr na odtwarzaną muzykę (ponowne wybranie danego filtru wyłączy go)"
          aliases="-f"
          embed="<p><b>Dostępne opcje:</b></p>
          <p>disable, 3d, bassboost, earwax, echo, flanger, gate, haas, karaoke, mcompand, nightcore, phaser, reverse, surround, tremolo, vaporwave.</p>"
        />

        <Command
          title="previous"
          name="⏮️ | Previous"
          description="Powrót do poprzednio granego utworu (głosowanie)"
          aliases="-prev, -pr"
        />

        <Command
          title="queue"
          name="🎶 | Queue"
          description="Informacje o obecnej kolejce utworów"
          aliases="-q"
        />

        <Command
          title="radio"
          name="📻 | Radio"
          description="Auto-odtwarzanie podobnych utworów, gdy skończy się kolejka (radio utworu)"
          aliases="-r"
        />

        <Command
          title="repeat"
          name="🔁 | Repeat"
          description="Przełączanie trybów zapętlenia: utworu/kolejki/wyłączone"
          aliases="-rep, -rp"
        />

        <Command
          title="shuffle"
          name="🔀 | Shuffle"
          description="Jednorazowe wymieszanie kolejki utworów (głosowanie)"
          aliases="-shf, -sh"
        />
      </div>
    </section>

    <section id="other">
      <div class="title">
        <h2>Inne:</h2>

        <RouterLink to="/commands#other">
          <LinkIcon />
        </RouterLink>
      </div>

      <div class="list">
        <Command
          title="search"
          name="🔍 | Search"
          description="Wyszukiwanie utworów podobnych do obecnie granego lub po podanym tytule"
          aliases="-sr"
        />

        <Command
          title="activity"
          name="🪁 | Activity"
          description="Włączanie aktywności Discord na kanale głosowym"
          embed="<p><b>Darmowe aktywności:</b></p>
          <p>Ask Away, Know What I Meme, Sketch Heads, Watch Together, Word Snacks.</p>
          <p><b>Wymagane ulepszenie serwera na poziomie 1:</b></p>
          <p>Blazing 8s, Bobble League, Checkers In The Park, Chess In The Park, Land-io, Letter League, Poker Night, Putt Party, SpellCast.</p>"
        />

        <Command
          title="watch"
          name="📺 | Watch"
          description="Aktywność YouTube Watch Together"
          aliases="-wt, -w"
          embed="<p>Komenda /activity Watch Together pokrywa się z działaniem tej komendy.</p>"
        />
      </div>
    </section>

    <section id="info">
      <div class="title">
        <h2>Informacje:</h2>

        <RouterLink to="/commands#info">
          <LinkIcon />
        </RouterLink>
      </div>

      <div class="list">
        <Command
          title="donate"
          name="🪙 | Donate"
          description="Link do przekazania wsparcia dla twórcy"
          aliases="-dn, -dt"
        />

        <Command
          title="help"
          name="❓ | Help"
          description="Wiadomość informacyjna o bocie; Opis działania wybranej komendy (podaj nazwę lub alias)"
          aliases="-h"
        />

        <Command
          title="invite"
          name="📧 | Invite"
          description="Link z zaproszeniem bota"
          aliases="-inv, -iv"
        />

        <Command
          title="ping"
          name="🏓 | Ping"
          description="Sprawdzenie pingu bota"
          aliases="-pg"
        />
      </div>
    </section>

    <section id="moderation">
      <div class="title">
        <h2>Moderacja:</h2>

        <RouterLink to="/commands#moderation">
          <LinkIcon />
        </RouterLink>
      </div>

      <div class="list">
        <Command
          title="add"
          name="➕ | Add"
          description="Dodanie podanego utworu jako następny w kolejce (podaj tytuł utworu lub wklej dowolny link)"
          aliases="-ad"
        />

        <Command
          title="clear"
          name="🧹 | Clear"
          description="Wyczyszczenie całej kolejki (łącznie z obecnie granym utworem)"
          aliases="-c"
        />

        <Command
          title="forceleave"
          name="🚪 | Forceleave"
          description="Wymuszenie wyjścia z kanału głosowego"
          aliases="-fl"
        />

        <Command
          title="forceplay"
          name="🎵 | Forceplay"
          description="Wymuszenie odtworzenia podanego utworu (podaj tytuł utworu lub wklej dowolny link)"
          aliases="-fp"
        />

        <Command
          title="forceskip"
          name="⏭️ | Forceskip"
          description="Wymuszenie pominięcia utworu (bez głosowania)"
          aliases="-fs"
        />

        <Command
          title="jump"
          name="↪️ | Jump"
          description="Pominięcie określonej liczby utworów w kolejce (domyślnie: 1)"
          aliases="-jmp, -jp, -j"
        />

        <Command
          title="move"
          name="↩️ | Move"
          description="Przesunięcie wybranej pozycji w kolejce utworów"
          aliases="-mv"
        />

        <Command
          title="prefix"
          name="❗ | Prefix"
          description="Zmiana prefixu bota"
          aliases="-pref, -pf, -px"
        />

        <Command
          title="remove"
          name="✖️ | Remove"
          description="Usunięcie wybranej pozycji z kolejki utworów (domyślnie: obecnie grany)"
          aliases="-rmv, -rm"
        />

        <Command
          title="volume"
          name="🔈 | Volume"
          description="Zmiana głośności bota na kanale głosowym (domyślnie: 100%)"
          aliases="-v"
          embed="<p>Komenda wymaga uprawnień administratora!</p>"
        />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.commands {
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    gap: 2rem;
  }
}

.title {
  padding: 1rem 0 1rem 10%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: #2b2d31;

  h2 {
    font-size: 175%;
  }

  a {
    padding: 0.25rem;
    display: none;
    align-items: center;
    border-radius: 5px;
  }

  &:hover a {
    display: flex;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 0 0.8rem 8%;
  }
}

.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
}
</style>
