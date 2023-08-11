<template>
  <Layout v-if="lessons?.length > 0" title="Moje korepetycje">
    <div
      v-for="(lessonsgroup, i) in lessons.reduce(function (r, a) {
        r[a.science] = r[a.science] || []
        r[a.science].push(a)
        return r
      }, Object.create(null))"
      :key="lessonsgroup"
    >
      <div class="science">
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
.science {
  display: flex;
  font-size: 19px;
  align-items: flex-end;
  padding-bottom: 10px;
  border-bottom: 3px solid theme(main);
}
.icon {
  height: 42px;
  width: 42px;
  margin-right: 10px;
  background-size: cover;
  background-position: center;
  filter: brightness(0.15);
  @media (max-width: 1000px) {
    width: 27px;
    height: 27px;
  }
}
</style>
