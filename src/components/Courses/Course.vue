<template>
  <router-link :to="`/kursy/${course.id}`">
    <span
      :style="{
        backgroundImage: `url(${require('@/assets/courses/' +
          course.id +
          '.jpg')})`,
      }"
    />
    <div>
      {{ course.title }}
      <footer>{{ course.level }}</footer>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['course'],
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

a {
  display: flex;
  flex-direction: column;
  height: 230px;
  width: 350px;
  @media (max-width: 1000px) {
    flex-grow: 1;
  }
  background: theme(light);
  margin: 7px;
  border-radius: 10px;
  overflow: hidden;

  span {
    width: 100%;
    height: 0px;
    flex-grow: 1;
    background-size: cover;
    background-position: center;
  }

  div {
    padding: 10px;
  }

  footer {
    font-size: 13px;
  }
}
</style>
