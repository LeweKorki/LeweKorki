<template>
  <Layout v-if="lessons?.length > 0" title="Moje korepetycje">
    <div
      v-for="(lessonsgroup, i) in lessons.reduce((r, a) => {
        r[a.science] = r[a.science] || []
        r[a.science].push(a)
        return r
      }, Object.create(null))"
      :key="lessonsgroup"
    >
      <div class="header">
        <div
          class="icon"
          :style="{
            backgroundImage: `url(${require(`@/assets/sciences/${sciences[
              sciences.map((e) => e.name).indexOf(i)
            ].img.toLowerCase()}.svg`)})`,
          }"
        />
        <div class="name" v-html="i" />
      </div>
      <Lesson v-for="lesson in lessonsgroup" :key="lesson" :lesson="lesson" />
    </div>
  </Layout>
  <!-- {{ user.students }} -->
  <!-- <div>{{ students }}</div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AxiosResponse } from 'axios'

import sciences from '@/data/sciences'
import axios from '@/config/axios'

import Layout from '../Layout.vue'
import Lesson from './Lesson.vue'

import { User } from '@/types/user'
import { Lesson as LessonType } from '@/types/lesson'

export default defineComponent({
  data() {
    return {
      user: this.$store.getters.getUser as User,
      // students: [] as User[],
      sciences,
      lessons: [] as LessonType[],
    }
  },
  components: {
    Layout,
    Lesson,
  },
  async mounted() {
    try {
      const res: AxiosResponse<LessonType[]> = await axios.get(
        '/lessons/' + this.$route.params.login
      )
      this.lessons = res.data
    } catch (e) {
      this.$notify({
        type: 'error',
        title: 'Błąd',
        text: 'Któryś z twoich uczniów nie istnieje',
      })
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.header {
  display: flex;
  font-size: 19px;
  align-items: center;
  padding: 8px 10px;
  background: theme(dark);
  color: theme(light);
  border-radius: 5px;
  // border-bottom: 3px solid theme(main);
  margin-top: 15px;
  .icon {
    height: 35px;
    width: 35px;
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
