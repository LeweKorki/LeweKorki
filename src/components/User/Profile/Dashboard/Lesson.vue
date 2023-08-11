<template>
  <div class="lesson">
    <div class="flex">
      <div class="tutor" v-html="`${partner.degree} ${partner.fullname}`" />
      <div class="where" v-html="lesson.where" />
    </div>
    <div class="science">{{ lesson.science }} ({{ lesson.level }})</div>
    <div v-html="lesson.note" class="note" />
    <div class="buttons">
      <div class="button" @click="setM(1)"><ic icon="user" /></div>
      <router-link
        class="button"
        :to="`/users/${partner.login}`"
        target="_blank"
      >
        <ic icon="link" />
      </router-link>
      <div class="button" @click="setM(2)"><ic icon="comment" /></div>
    </div>
    <div class="modules">
      <section v-if="m == 1">
        <div v-html="`Imię: ${partner.name}`" />
        <div v-html="`Miasto: ${partner.city}`" />
        <div v-html="`Login: ${partner.login}`" />
        <div v-html="`Kontakt: ${partner.contact}`" />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AxiosResponse } from 'axios'

import axios from '@/config/axios'

import { User } from '@/types/user'
import { Lesson as LessonType } from '@/types/lesson'

export default defineComponent({
  props: {
    lesson: { type: Object as () => LessonType, required: true },
  },
  data() {
    return {
      user: this.$store.getters.getUser as User,
      partner: {} as User,
      m: 0,
    }
  },
  methods: {
    setM(m: number) {
      if (this.m == 0) {
        this.m = m
      } else {
        this.m = 0
      }
    },
  },
  async mounted() {
    const partnerid = this.user.isTutor
      ? this.lesson.student
      : this.lesson.tutor
    const res: AxiosResponse<User> = await axios.get('/users/' + partnerid)
    this.partner = res.data
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.lesson {
  background: theme(gray, 0.5);
  margin: 10px 0;
  padding: 10px;
  text-align: left;
  border-radius: 10px;
  .tutor {
    font-weight: 500;
    font-size: 21px;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
  }
  .science {
    font-size: 18px;
  }
  .note {
    font-size: 15px;
    margin: 10px 0;
  }
  .buttons {
    margin-bottom: 10px;
    div,
    a {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: theme(main_dark);
      color: theme(light);
      font-size: 20px;
      width: 35px;
      height: 35px;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 5px;
    }
  }
}
</style>
