<template>
  <div class="container">
    <CityInfo :city="cities[selected]" />
    <div class="map">
      <img src="@/assets/maps/poland_bordercut.png" v-if="!dev" />
      <img src="@/assets/maps/poland_b.png" v-else />
      <div
        class="dot"
        v-for="(city, index) in cities"
        :key="index"
        :style="{ left: `${city.x}%`, top: `${city.y}%` }"
        @click="selected = index"
        :class="{
          dev,
          hide: TutorsDB.filter((e) => e.city == city.name).length == 0,
        }"
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
import { TutorsDB } from '@/data/tutors'

export default defineComponent({
  data() {
    return {
      TutorsDB,
      cities,
      selected: 0,
      dev: false,
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
  display: flex;
  justify-content: space-around;
  margin: 10px;
  flex-wrap: wrap;
}
.map {
  img {
    width: 524px;
    max-width: 90vw;
  }
  .dot {
    color: theme(dark);
    transition: 0.2s all;
    cursor: pointer;
    &:hover {
      color: theme(main);
    }
    position: absolute;
    font-size: 23px;
    &.dev {
      opacity: 0.4;
    }
    &.hide {
      display: none;
    }
    .name {
      position: absolute;
      font-size: 14px;
      top: -20px;
      transform: translateX(-30%);
    }
  }
}
</style>
