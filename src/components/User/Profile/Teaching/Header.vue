<template>
  <div class="header">
    <div
      class="icon"
      :style="{
        backgroundImage: `url(${require(`@/assets/sciences/${science.img}.svg`)})`,
      }"
    />
    <div class="name" v-html="science.name" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['science'],
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.header {
  display: flex;
  font-size: 18px;
  align-items: center;
  padding: 5px 10px;
  background: theme(dark);
  color: theme(light);
  border-radius: 5px;
  // border-bottom: 3px solid theme(main);
  margin: 5px 0;
  .icon {
    height: 32px;
    width: 32px;
    margin-right: 10px;
    background-size: cover;
    background-position: center;
    filter: invert(0.5) brightness(1.75);
    @media (max-width: 1000px) {
      width: 27px;
      height: 27px;
    }
  }
}
</style>
