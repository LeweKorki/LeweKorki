<template>
  <div class="h">Jak dołączyć do nas?</div>
  <section>
    Najpierw upewnij się, że masz dostęp do płynnego internetu i potrafisz
    przekazać swoją wiedzę. Przemyśl czego chcesz uczyć - im więcej przedmiotów
    wybierzesz tym lepiej dla ciebie. Warto wybierać przedmioty, z których
    korepetytorów albo mamy niewiele albo nie mamy ich wcale.
  </section>
  <section>
    W naszym projekcie są dostępne dwie drogi rekrutacji - standardowa i
    przyspieszona. Aby wziąć udział w rekrutacji przyspieszonej upewnij się, czy
    spełniasz przynajmniej jeden z warunków . Jeśli nie, przejdź do sekcji
    rekrutacji standardowej.
  </section>
  <ul>
    <li>Zdałeś maturę zyskując 80% z przynajmniej jednego rozszerzenia</li>
    <li>Skończyłeś studia licencjackie lub inżynierskie</li>
    <li>
      Jesteś uczniem szkoły średniej posiadającym znaczące osiągnięcia w
      konkursach
    </li>
  </ul>
  <div class="h">Rekrutacja przyspieszona</div>
  <ol>
    <li>
      Zaloguj się na konto, wtedy wypełnienie podania będzie szybsze
      (opcjonalnie)
    </li>
    <li>
      Wypełnij poniższy formularz i załącz zdjęcia potwierdzające spełnienie
      wymagań (np. kopię świadectwa maturalnego). <b>UWAGA:</b> Zasłoń wszelkie
      wrażliwe dane od peselu po numer dokumentu. Jedyne, czego potrzebujemy to
      imię i nazwisko. Cała reszta to twoja własna odpowiedzialność.
    </li>
    <li>
      Odezwiemy się do ciebie gdy tylko będziemy mieć czas. Gdy zatwierdzimy
      twoje podanie przejdziemy do końcowych ustaleń. Podasz nam literaturę z
      jakiej chcesz korzystać i ustalisz szczegóły dotyczące tego kiedy i jak
      chcesz uczyć. Od teraz ty również możesz świadczyć lewe korki.
    </li>
  </ol>
  <div class="h">Rekrutacja standardowa</div>
  <ol>
    <li>
      Zaloguj się na konto, wtedy wypełnienie podania będzie szybsze
      (opcjonalnie)
    </li>
    <li>
      Wypełnij poniższy formularz, opisz siebie i swoje predyspozycje naukowe
      tak dokładnie jak umiesz. Nie bawimy się w żadne CV i inne formalności.
      Uzasadnij nam po prostu dlaczego jesteś odpowiednią osobą do dawania
      korepetycji.
    </li>
    <li>
      Odezwiemy się do ciebie gdy tylko będziemy mieć czas. Dowiesz się czy
      zatwierdziliśmy twoje podanie.
    </li>
    <li>
      Następnie musimy przetestować twoją wiedzę - poprowadzimy lekcję próbną.
      Ustalimy razem jej termin i powiemy ci z jakiego materiału masz się
      przygotować (najczęściej to pojedyńcza dziedzina jak trygonometria czy
      algorytmy).
    </li>
    <li>
      Na lekcji próbnej przeprowadzisz rozmowę z jednym z nas. To jak bedzie
      wyglądać zależy tylko od ciebie. Możesz prezentować zarówno teorię jak i
      rozwiązania. Zadamy ci też kilka niespodziewanych pytań dotyczących nauki
      jako całokształtu. Potrwa raczej nie więcej niż 15-20 minut.
    </li>
    <li>
      Jeśli ukończysz ją pomyślnie przejdziemy do końcowych ustaleń. Podasz nam
      literaturę z jakiej chcesz korzystać i ustalisz szczegóły dotyczące tego
      kiedy i jak chcesz uczyć. Od teraz ty również możesz świadczyć lewe korki.
    </li>
  </ol>
  <div class="h">Formularz rekrutacyjny</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.h {
  margin: 10px 0;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 22px;
}

ol {
  > li {
    margin: 7px 0;
  }
}

section {
  margin: 10px 0;
}
</style>
