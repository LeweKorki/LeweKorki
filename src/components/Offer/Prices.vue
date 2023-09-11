<template>
  <div class="container">
    <div class="tax">
      <div>Cennik za lewe korki</div>
      Za legitne pewnie zapłacisz więcej
    </div>
    <div>
      U nas nie ma miejsca na długie formalności i skomplikowane procedury.
      Obowiązuje jedna uniwersalna opłata za każdą godzinę korepetycji (50-60
      minut). Musimy jednak mimo wszystko pobierać dodatkową opłatę za dojazd.
    </div>
    <div class="table">
      <div class="row">
        <div class="c b"><b>PROMOCJA</b> (pierwszy miesiąc)</div>
        <div class="c">Online</div>
        <div class="c b">Stacjonarnie</div>
        <div class="c">Stacjonarnie (dojazd do ucznia)</div>
      </div>
      <div class="row b">
        <div class="c b"><b>50zł / h</b></div>
        <div class="c">60zł / h</div>
        <div class="c b">60zł / h</div>
        <div class="c">75zł / h</div>
      </div>
    </div>
    <section>
      Korepetycje online odbywają się na ustalonej przez ucznia i korepetytora
      platformie w formie rozmowy online, jednak preferowaną platformą jest
      discord. Już teraz możesz dołączyć, żeby budować naszą społeczność.
    </section>
    <a class="discord" href="https://discord.gg/4Zvw6hQVdA" target="_blank">
      <ic :icon="['fab', 'discord']" /> Discord
    </a>
    <section>
      Korepetycje stacjonarne odbywają się albo w miejscu wyznaczonym przez
      korepetytora (np. biblioteka lub jego mieszkanie) albo w miejscu
      wyznaczonym przez ucznia (w tym przypadku występuje opłata 15 zł).
    </section>
    <section>
      Korepetycje mogą odbywać się w formie hybrydowej, czasami online czasami
      stacjonarnie w zależności od ustaleń.
    </section>
    <!--  -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  font-size: 18px;
  max-width: 1000px;
  padding: 10px;
  @media (max-width: 1000px) {
    font-size: 15.5px;
  }
}

section {
  margin: 10px 0;
  @media (max-width: 1000px) {
    margin: 7px 0;
  }
}

.tax {
  margin: 10px 0;
  font-size: 20px;
  @media (max-width: 1000px) {
    font-size: 17px;
  }
  div {
    display: block;
    font-size: 26px;
    text-transform: uppercase;
    font-weight: 500;
  }
}

.table {
  display: flex;
  justify-content: space-between;
  background: theme(dark_gray, 0.2);
  border-radius: 10px;
  margin: 20px 0;
  padding: 3px 0;
  @media (max-width: 1000px) {
    margin: 10px 0;
  }
  .row {
    flex-grow: 1;
    .c {
      padding: 12px 20px;
      @media (max-width: 1000px) {
        padding: 10px 12px;
      }
    }
    .b {
      background: theme(dark_gray, 0.15);
    }
  }
}

.discord {
  display: inline-block;
  background: #7289da;
  padding: 7px 12px;
  color: #e3e3e3;
  border-radius: 5px;
  cursor: pointer;
  font-size: 19px;
}
</style>
