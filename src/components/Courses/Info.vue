<template>
  <div class="cont">
    <div class="slogan">
      <span class="new">Nowość</span>
      <div>Kursy maturalne od listopada</div>
    </div>
    <div class="padding">
      Już od listopada tego roku rozpoczną się kursy maturalne dla tegorocznych
      maturzystów. Program obejmuje 50h godzin lekcyjnych (średnio dwie w
      tygodniu) z każdego przedmiotu, a jego zadaniem jest szybkie i kompleksowe
      przerobienie całego materiału szkoły średniej.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.cont {
  width: 96vw;
  max-width: 1000px;
  // font-weight: 00;
}

.padding {
  padding: 10px 0;
  font-size: 19px;
  text-align: justify;

  @media (max-width: 1000px) {
    font-size: 15px;
  }
}
.slogan {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 28px;
  margin-top: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    font-size: 22px;
  }
}

.new {
  background: theme(rose);
  padding: 8px 12px;
  border-radius: 8px;
  color: theme(light);
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
