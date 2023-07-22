<template>
  <div class="blocks">
    <div v-for="science in sciences" :key="science" class="block">
      <img :src="require(`@/assets/sciences/${science.img}.svg`)" />
      <div class="title" v-html="science.name" />
    </div>
  </div>
  <div class="custom">
    <b>Potrzebujesz czegoś spoza oferty?</b> Algebra? Analiza? A może historia?
    Napisz do nas! Zobaczymy, co da się zrobić!
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import sciences from '@/data/sciences'

export default defineComponent({
  data() {
    return {
      sciences,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.blocks {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: center;
}
.block {
  margin: 5px;
  padding: 5px;
  width: 155px;
  height: 145px;
  border-radius: 10px;
  background: theme(main_dark);
  color: theme(light);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: center;
  flex-grow: 1;
  font-size: 17px;
  font-weight: 500;
  transition: 0.2s all;
  cursor: pointer;

  &:hover {
    background: theme(main);
  }

  img {
    width: 80px;
    filter: invert(0.5) brightness(1.8);
    margin-bottom: 5px;
  }

  @media (max-width: 1000px) {
    font-size: 16px;
    width: 200px;
    height: 115px;
    margin: 5px;
    img {
      width: 60px;
    }
  }
}

.custom {
  width: 90vw;
  max-width: 600px;
  // font-weight: 00;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  b {
    background: linear-gradient(45deg, theme(main), theme(main_dark));
    background-clip: text;
    -webkit-text-fill-color: transparent;

    font-weight: 500;
  }
  @media (max-width: 1000px) {
    font-size: 17px;
  }
}
</style>
