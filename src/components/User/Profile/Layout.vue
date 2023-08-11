<template>
  <section>
    <header v-html="title" />
    <div class="items">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
section {
  text-align: center;
}
header {
  margin: 20px auto 10px auto;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  width: 600px;
  max-width: 97%;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
}
.items {
  transition: 0.2s all;
  // background-color: #dadada;
  border-radius: 10px;
  margin: auto;
  width: 600px;
  max-width: 95%;
}
</style>
