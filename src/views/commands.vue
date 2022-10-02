<script setup>
import { RouterLink } from "vue-router";
import Command from "@/components/command.vue";
</script>

<template>
  <main>
    <div class="start">
      <h1>Lista dostępnych komend</h1>
      <p>
        Na&nbsp;tej stronie znajdziesz <b>pełną listę</b> obsługiwanych komend.
        Bot&nbsp;obsługuje <b>tradycyjne komendy</b> (przez podanie prefixu
        i&nbsp;wpisanie nazwy komendy lub jej skrótu) oraz tzw.
        <b>slash&nbsp;commands</b>, czyli&nbsp;komendy po&nbsp;ukośniku -
        już&nbsp;wbudowane w&nbsp;panel pisania wiadomości na&nbsp;kanale
        tekstowym.
      </p>
      <p>
        Przed&nbsp;użyciem komend <b>koniecznie upewnij się</b>, że&nbsp;bot
        posiada odpowiednie uprawnienia do&nbsp;wysyłania wiadomości, czytania
        ich i&nbsp;reagowania. Brak&nbsp;tych uprawnień może powodować problemy
        z&nbsp;działaniem komend, niereagowaniu na&nbsp;nie lub ostatecznie
        do&nbsp;wyłączenia bota.
      </p>
      <p>
        Jeśli&nbsp;zapomnisz jaki ustawiłeś prefix, nic&nbsp;nie&nbsp;szkodzi,
        wystarczy, że&nbsp;oznaczysz bota w&nbsp;wiadomości
        (<b>wpisując&nbsp;@Metrum</b>), on&nbsp;wtedy przypomni&nbsp;Ci
        najpotrzebniejsze informacje!
      </p>
    </div>

    <div class="category" id="song">
      <RouterLink to="/commands#song" draggable="false">
        <h2>Utwór:</h2>
      </RouterLink>

      <div class="grid">
        <Command title="forward" name="⏩ | Forward"
          description="Przewinięcie utworu do&nbsp;przodu o&nbsp;podaną wartość (domyślnie: 10&nbsp;sekund)"
          aliases="-fw" />

        <Command title="lyrics" name="📄 | Lyrics"
          description="Wyświetlenie tekstu dla&nbsp;obecnie odtwarzanego, lub&nbsp;podanego utworu" aliases="-ly, -l" />

        <Command title="nowplaying" name="💿 | Nowplaying" description="Informacje o&nbsp;obecnie odtwarzanym utworze"
          aliases="-np" />

        <Command title="pause" name="⏯️ | Pause" description="Wstrzymanie/wznowienie odtwarzania utworu"
          aliases="-ps" />

        <Command title="play" name="🎵 | Play"
          description="Odtwarzanie muzyki (podaj&nbsp;tytuł utworu lub&nbsp;dowolny link)" aliases="-p" />

        <Command title="resume" name="▶️ | Resume" description="Wznowienie odtwarzania utworu" aliases="-rsm, -rs" />

        <Command title="rewind" name="⏪ | Rewind"
          description="Przewinięcie utworu do&nbsp;tyłu o&nbsp;podaną wartość (domyślnie: 10&nbsp;sekund)"
          aliases="-rw" />

        <Command title="seek" name="⏺️ | Seek"
          description="Przewinięcie obecnie&nbsp;granego utworu do&nbsp;podanej wartości" aliases="-sk" />

        <Command title="skip" name="⏭️ | Skip" description="Pominięcie obecnie&nbsp;granego utworu (głosowanie)"
          aliases="-s" />
      </div>
    </div>

    <div class="category" id="queue">
      <RouterLink to="/commands#queue" draggable="false">
        <h2>Kolejka:</h2>
      </RouterLink>

      <div class="grid">
        <Command title="addend" name="🔚 | Addend"
          description="Dodanie obecnie&nbsp;granego utworu jeszcze&nbsp;raz, na&nbsp;koniec kolejki"
          aliases="-ade, -ae" />

        <Command title="addrelated" name="↘️ | Addrelated"
          description="Dodanie podobnego do&nbsp;obecnie granego utworu na&nbsp;koniec kolejki" aliases="-adr, -ar" />

        <Command title="filter" name="🪄 | Filter"
          description="Ustaw filtr na&nbsp;odtwarzaną muzykę (ponowne wybranie danego filtru wyłączy&nbsp;go)"
          aliases="-f"
          embed="<p><b>Dostępne&nbsp;filtry:</b></p>
          <p>disable, 3d, bassboost, earwax, echo, flanger, gate, haas, karaoke, mcompand, nightcore, phaser, reverse, surround, tremolo, vaporwave.</p>" />

        <Command title="previous" name="⏮️ | Previous"
          description="Odtworzenie poprzednio&nbsp;granego utworu w&nbsp;kolejce (głosowanie)" aliases="-prv, -pr" />

        <Command title="queue" name="🎶 | Queue" description="Informacje o&nbsp;obecnej kolejce utworów" aliases="-q" />

        <Command title="radio" name="📻 | Radio"
          description="Auto-odtwarzanie podobnych utworów, gdy&nbsp;skończy&nbsp;się kolejka (radio utworu)"
          aliases="-r" />

        <Command title="repeat" name="🔁 | Repeat" description="Przełączanie zapętlenia: utworu/kolejki/wyłączone"
          aliases="-rpt, -rp" />

        <Command title="shuffle" name="🔀 | Shuffle" description="Jednorazowe wymieszanie kolejki utworów (głosowanie)"
          aliases="-shf, -sh" />
      </div>
    </div>

    <div class="category" id="other">
      <RouterLink to="/commands#other" draggable="false">
        <h2>Inne:</h2>
      </RouterLink>

      <div class="grid">
        <Command title="search" name="🔍 | Search"
          description="Wyszukiwanie utworów podobnych do&nbsp;obecnie granego lub&nbsp;po&nbsp;podanym tytule"
          aliases="-sr" />

        <Command title="activity" name="🪁 | Activity"
          description="Włączanie aktywności Discord na&nbsp;kanale głosowym"
          embed="<p><b>Darmowe aktywności:</b></p>
          <p>Ask&nbsp;Away, Know&nbsp;What&nbsp;I&nbsp;Meme, Sketch&nbsp;Heads, Watch&nbsp;Together, Word&nbsp;Snacks.</p>
          <p><b>Wymagane ulepszenie serwera na&nbsp;poziomie&nbsp;1:</b></p>
          <p>Blazing&nbsp;8s, Bobble&nbsp;League, Checkers&nbsp;In&nbsp;The&nbsp;Park, Chess&nbsp;In&nbsp;The&nbsp;Park, Land-io, Letter&nbsp;League, Poker&nbsp;Night, Putt&nbsp;Party, SpellCast.</p>" />

        <Command title="watch" name="📺 | Watch" description="Aktywność YouTube Watch&nbsp;Together" aliases="-wt, -w"
          embed="<p>Jest to&nbsp;wydzielona komenda /activity Watch Together i&nbsp;działa tak samo.</p>" />
      </div>
    </div>

    <div class="category" id="info">
      <RouterLink to="/commands#info" draggable="false">
        <h2>Informacje:</h2>
      </RouterLink>

      <div class="grid">
        <Command title="donate" name="🪙 | Donate" description="Link do&nbsp;wsparcia twórcy" aliases="-dn, -dt" />

        <Command title="help" name="❓ | Help"
          description="Wiadomość informacyjna o&nbsp;bocie; Opis&nbsp;dla wybranej komendy (podaj&nbsp;nazwę lub&nbsp;alias)"
          aliases="-h" />

        <Command title="invite" name="📧 | Invite" description="Link z&nbsp;zaproszeniem bota" aliases="-inv, -iv" />

        <Command title="opinion" name="📣 | Opinion"
          description="Link z&nbsp;możliwością zostawienia opinii o&nbsp;bocie" aliases="-op" />

        <Command title="ping" name="🏓 | Ping" description="Sprawdzenie pingu bota" aliases="-pg" />
      </div>
    </div>

    <div class="category" id="moderation">
      <RouterLink to="/commands#moderation" draggable="false">
        <h2>Moderacja:</h2>
      </RouterLink>

      <div class="grid">
        <Command title="add" name="➕ | Add"
          description="Dodanie podanego utworu jako następny w&nbsp;kolejce (podaj&nbsp;tytuł utworu lub&nbsp;wklej dowolny link)"
          aliases="-ad" />

        <Command title="clear" name="🧹 | Clear"
          description="Wyczyszczenie całej&nbsp;kolejki (łącznie z&nbsp;obecnie granym utworem)" aliases="-c" />

        <Command title="forceleave" name="🚪 | Forceleave" description="Wymuszenie wyjścia z&nbsp;kanału głosowego"
          aliases="-fl" />

        <Command title="forceplay" name="🎵 | Forceplay"
          description="Wymuszenie puszczenia podanego utworu (podaj&nbsp;tytuł utworu lub&nbsp;wklej dowolny link)"
          aliases="-fp" />

        <Command title="forceskip" name="⏭️ | Forceskip" description="Wymuszenie pominięcia utworu" aliases="-fs" />

        <Command title="jump" name="↪️ | Jump"
          description="Pominięcie określonej&nbsp;liczby utworów w&nbsp;kolejce (domyślnie:&nbsp;1)"
          aliases="-jmp, -jp, -j" />

        <Command title="move" name="↩️ | Move" description="Przesunięcie wybranej pozycji w&nbsp;kolejce utworów"
          aliases="-mv" />

        <Command title="prefix" name="❗ | Prefix" description="Zmiana prefixu bota" aliases="-pref, -pf, -px" />

        <Command title="remove" name="✖️ | Remove"
          description="Usunięcie wybranej pozycji z&nbsp;kolejki utworów (domyślnie obecnie grany)"
          aliases="-rmv, -rm" />

        <Command title="volume" name="🔈 | Volume" description="Zmiana głośności bota" aliases="-v"
          embed="<p>Samo użycie komendy wymaga uprawnień administratora!</p>" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.category {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  h2 {
    font-family: "Ginto Nord Medium";
    ;
    padding: 1rem 0 1rem 6rem;
    font-size: 1.6rem;
    background-color: var(--app-3);

    @media (max-width: 768px) {
      & {
        padding: 1rem 0 1rem 3rem;
        font-size: 1.6rem;
      }
    }
  }
}

.grid {
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
