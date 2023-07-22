<template>
  <div class="container">
    <CityInfo :city="cities[selected]" />
    <div class="map">
      <img src="@/assets/maps/poland_bordercut.png" />
      <div
        class="dot"
        v-for="(city, index) in cities"
        :key="index"
        :style="{ left: `${city.x}%`, top: `${city.y}%` }"
        @click="selected = index"
      >
        <ic icon="star" />
        <div class="name" v-html="city.name" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import cities from '@/data/cities'
import CityInfo from './CityInfo.vue'

export default defineComponent({
  data() {
    return {
      cities,
      selected: 0,
    }
  },
  components: {
    CityInfo,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  // background: green;
  height: 500px;
  display: flex;
  justify-content: space-between;
}
.map {
  img {
    width: 500px;
    height: 500px;
  }
  .dot {
    color: theme(main_dark);
    transition: 0.2s all;
    cursor: pointer;
    &:hover {
      color: theme(main);
    }
    position: absolute;
    font-size: 23px;
    // opacity: 0.4;
    .name {
      position: absolute;
      font-size: 14px;
      top: -20px;
      transform: translateX(-30%);
    }
  }
}
</style>
