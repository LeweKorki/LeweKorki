<template>
  <div class="container">
    <div class="h">Jak działają kursy?</div>
    <div>
      Kursy są tańszą alternatywą dla korepetycji. Są to kompletne omówienia
      danego przedmiotu, które podzielone są na godzinne wykłady. Dostęp do nich
      można uzyskać na zasadzie subskrybcji na miesiąc, semestr lub cały rok.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  text-align: left;
  width: 1000px;
  max-width: 95vw;
  margin: 5px;
  font-size: 19px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
}
.h {
  display: block;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 500;
  @media (max-width: 1000px) {
    font-size: 20px;
    margin-top: 10px;
  }
}
</style>
