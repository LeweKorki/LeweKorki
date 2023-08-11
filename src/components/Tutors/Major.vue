<template>
  <div class="major" :class="{ core: index == 0 }">
    <div class="icon">
      <img :src="require(`@/assets/sciences/${major.img}.svg`)" />
    </div>
    <div class="info">
      <div class="name" v-html="major.name" />
      <div class="university">
        <span v-html="major.university" />
        <span class="since" v-html="`(${major.since})`" />
      </div>
      <!-- <div class="spec" v-if="major.spec">
        <b>SPECJALIZACJA:</b> {{ major.spec }}
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['major', 'index'],
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
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

.major {
  display: flex;
  align-items: center;
  margin: 15px 5px;
  // border-bottom: 3px solid theme(gray, 0.5);
  .icon {
    width: 55px;
    height: 55px;
    padding: 5px;
    margin-right: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      filter: invert(0.5) brightness(1.8);
    }
    background: theme(main_dark);
  }
  .info {
    flex-grow: 1;
  }

  .name {
    font-size: 27px;
    font-weight: 500;
    text-transform: uppercase;
    @media (max-width: 1000px) {
      font-size: 19px;
    }
  }
  .spec {
    margin: 5px 0 0 5px;
    font-size: 16px;
    b {
      font-weight: 500;
    }
  }
  .university {
    font-size: 18px;
    margin: 2px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 1000px) {
      font-size: 14px;
    }
    .since {
      min-width: 120px;
      font-size: 12px;
      @media (min-width: 1000px) {
        margin-left: 10px;
        font-size: 14px;
      }
    }
  }

  &.core {
    .icon {
      background-size: 300% 300% !important;
      background-color: theme(dark) !important;
      background-image: linear-gradient(
        -45deg,
        theme(dark) 0%,
        theme(gray, 0.4) 51%,
        theme(gray, 0.4) 41%,
        theme(dark) 100%
      ) !important;
      -webkit-animation: AnimateCore 2s ease infinite;
      animation: AnimateCore 2s ease infinite;
      box-shadow: 0px 0px 8px #00647d;
    }
  }
}
</style>
