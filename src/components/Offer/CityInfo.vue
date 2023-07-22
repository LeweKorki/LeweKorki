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
        <!-- :class="{ core: city.guys.map((e) => e.core).includes(science.img) }" -->
        <img :src="require(`@/assets/sciences/${science.img}.svg`)" />
      </div>
    </div>
    <div class="section">Korepetytorzy:</div>
    <div class="guys">
      <div v-for="guy in city.guys" :key="guy">
        <div v-html="guy.name" />
        <!-- <ic icon="seedling" v-if="guy.founder" /> -->
      </div>
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
  max-width: 80vw;
  @media (max-width: 1000px) {
    padding: 5px 5px;
  }
  .cityname {
    // background: linear-gradient(45deg, theme(dark), theme(main_dark));
    background: theme(dark);
    color: theme(light);
    border-radius: 8px;
    font-size: 32px;
    text-align: center;
    font-weight: 500;
    padding: 3px;
    text-transform: uppercase;
    margin-bottom: 20px;
    @media (max-width: 1000px) {
      font-size: 25px;
      margin-bottom: 10px;
    }
  }
  .section {
    // background: linear-gradient(45deg, theme(main), theme(main_dark));
    // background-clip: text;
    // -webkit-text-fill-color: transparent;
    font-weight: 500;
    font-size: 22px;
    margin-top: 20px;
    text-transform: uppercase;
    @media (max-width: 1000px) {
      margin-top: 10px;
      font-size: 19px;
    }
  }

  .blocks {
    display: flex;
    margin: 10px 0;
    @media (max-width: 1000px) {
      margin: 5px 0;
    }
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
    @media (max-width: 1000px) {
      width: 40px;
      height: 40px;
    }
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
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  > div {
    display: flex;
    align-items: center;
    > svg {
      font-size: 17px;
      margin-left: 5px;
    }
  }
}

@keyframes AnimateCore {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.core {
  background-size: 300% 300% !important;
  background-color: theme(dark) !important;
  background-image: linear-gradient(
    -45deg,
    theme(dark) 0%,
    theme(gray, 0.4) 51%,
    theme(gray, 0.4) 41%,
    theme(dark) 100%
  ) !important;
  -webkit-animation: AnimateCore 4s ease infinite;
  animation: AnimateCore 4s ease infinite;
  &:hover {
    box-shadow: 0px 0px 4px #00647d;
  }
}
</style>
