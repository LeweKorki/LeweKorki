<template>
  <div class="home">
    <Hero />
    <Info />
    <Rules />
    <div class="slogan">Katalog kursów</div>
    <div class="cat" id="catalog">
      <Course v-for="course in courses" :key="course" :course="course" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import courses from '@/data/courses'
import Hero from '@/components/Courses/Hero.vue'
import Info from '@/components/Courses/Info.vue'
import Rules from '@/components/Courses/Rules.vue'
import Course from '@/components/Courses/Course.vue'

export default defineComponent({
  data() {
    return {
      courses,
    }
  },
  components: {
    Hero,
    Info,
    Rules,
    Course,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
}

.slogan {
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 28px;
  margin-top: 20px;

  @media (max-width: 1000px) {
    font-size: 23px;
  }
}

.cat {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1350px;
  margin: 10px 0;
}
</style>
