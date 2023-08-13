<template>
  <div class="notecontainer" :class="{ removed }">
    <div class="content" v-html="note.content" />
    <div
      class="date"
      v-html="
        `${date.getDay()}.${
          date.getMonth() + 1
        }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
      "
    />
    <div class="remove" @click="remove()" v-if="user.isTutor">
      <ic icon="times" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Note } from '@/types/lesson'
import axios from '@/config/axios'

export default defineComponent({
  props: {
    note: { type: Object as () => Note & { _id: string }, required: true },
    lesson: String,
  },
  data() {
    return {
      date: new Date(this.note.date),
      user: this.$store.getters.getUser,
      removed: false,
    }
  },
  methods: {
    async remove() {
      try {
        await axios.delete(
          `lessons/${this.user.login}/notes/${this.lesson}/${this.note.date}`
        )
        this.removed = true
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
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.notecontainer {
  background: theme(light);
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  .date {
    margin-top: 5px;
    font-size: 13.5px;
  }
  .remove {
    font-size: 20px;
    position: absolute;
    bottom: 5px;
    right: 10px;
    cursor: pointer;
  }
}

.removed {
  display: none;
}
</style>
