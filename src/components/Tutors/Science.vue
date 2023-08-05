<template>
  <div class="block">
    <img :src="require(`@/assets/sciences/${science.img}.svg`)" />
    <div class="title" v-html="science.name" />
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
.block {
  margin: 5px;
  padding: 10px;
  width: 155px;
  border-radius: 10px;
  background: theme(main);
  color: theme(light);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: center;
  flex-grow: 1;
  font-size: 16px;
  font-weight: 500;
  transition: 0.2s all;
  cursor: pointer;

  &:hover {
    filter: brightness(1.12);
  }

  img {
    width: 50px;
    filter: invert(0.5) brightness(1.8);
    margin-bottom: 3px;
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
</style>
