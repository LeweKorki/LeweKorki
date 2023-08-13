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
      <div class="button" @click="setM(2)"><ic icon="note-sticky" /></div>
      <span>({{ lesson.notes?.concat(dummynotes).length }})</span>
    </div>
    <div class="modules">
      <section v-if="m == 1">
        <div v-html="`Imię: ${partner.name}`" />
        <div v-html="`Miasto: ${partner.city}`" />
        <div v-html="`Login: ${partner.login}`" />
        <div v-html="`Kontakt: ${partner.contact}`" />
      </section>
      <section v-if="m == 2">
        <form class="send" @submit.prevent="sendNote" v-if="user.isTutor">
          <input placeholder="Treść notatki" v-model="noteinput" />
          <button><ic icon="paper-plane" /></button>
        </form>
        <Note
          v-for="note in lesson.notes.concat(dummynotes).reverse()"
          :key="note"
          :note="note"
          :lesson="lesson._id"
        />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AxiosResponse } from 'axios'

import axios from '@/config/axios'
import Note from './Note.vue'

import { User } from '@/types/user'
import { Lesson as LessonType, Note as NoteType } from '@/types/lesson'

export default defineComponent({
  props: {
    lesson: {
      type: Object as () => LessonType & { _id: string },
      required: true,
    },
  },
  data() {
    return {
      user: this.$store.getters.getUser as User,
      partner: {} as User,
      m: 0,
      noteinput: '',
      dummynotes: [] as NoteType[],
    }
  },
  components: {
    Note,
  },
  methods: {
    setM(m: number) {
      this.m != m ? (this.m = m) : (this.m = 0)
    },
    async sendNote() {
      const data = {
        content: this.noteinput,
        date: new Date(),
      }
      try {
        await axios.post(
          `lessons/${this.user.login}/notes/${this.lesson._id}`,
          data
        )
        this.noteinput = ''
        this.dummynotes.push(data)
        this.$notify({
          type: 'success',
          title: 'Wysłano zgłoszenie',
          text: 'Odezwiemy się tak szybko jak to możliwe',
        })
      } catch (e) {
        this.$notify({
          type: 'error',
          title: 'Nie udało się wysłać zgłoszenia',
          text: 'Spróbuj jeszcze raz lub wyślij zgłoszenie drogą mailową.',
        })
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
    font-size: 14.5px;
    margin: 10px 0;
  }
  .buttons {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
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

.send {
  display: flex;
  input {
    padding: 5px 10px;
    border-radius: 5px;
    flex-grow: 1;
    font-size: 15px;
  }
  button {
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
    margin-left: 10px;
  }
}
</style>
