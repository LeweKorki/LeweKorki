<template>
  <div class="info">
    <div class="cityname" v-html="city.name" />
    <div class="section">Dostepność:</div>
    <div class="blocks">
      <div
        v-for="science in [
          ...new Set(city.guys.map((e) => e.sciences).flat(1)),
        ]"
        :key="science"
        class="block"
      >
        <img :src="require(`@/assets/sciences/${science.img}.svg`)" />
      </div>
    </div>
    <div class="section">Korepetytorzy:</div>
    <div class="guys">
      <div v-for="guy in city.guys" :key="guy" v-html="guy.name" />
    </div>
    <div class="section">Cena za dojazd: 10zł</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['city'],
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.info {
  // background: purple;
  width: 400px;
  padding: 20px 10px;
  .cityname {
    background: linear-gradient(45deg, theme(main), theme(main_dark));
    color: theme(light);
    border-radius: 8px;
    font-size: 32px;
    text-align: center;
    font-weight: 500;
    padding: 3px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .section {
    // background: linear-gradient(45deg, theme(main), theme(main_dark));
    // background-clip: text;
    // -webkit-text-fill-color: transparent;
    font-weight: 500;
    font-size: 22px;
    margin-top: 20px;
    text-transform: uppercase;
  }

  .blocks {
    display: flex;
    margin: 10px 0;
  }

  .block {
    width: 50px;
    height: 50px;
    padding: 6px;
    margin-right: 8px;
    border-radius: 10px;
    background: theme(main_dark);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s all;
    img {
      width: 100%;
      filter: invert(0.5) brightness(1.8);
    }

    &:hover {
      background: theme(main);
    }
  }
}

.guys {
  font-size: 19px;
  margin-top: 5px;
}
</style>
