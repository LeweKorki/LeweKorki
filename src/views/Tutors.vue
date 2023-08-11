<template>
  <div class="slogan">
    <div class="underline">Poznaj nas</div>
  </div>
  <div class="tutor_container">
    <div class="hello">
      <div class="blocks">
        <div
          class="block"
          v-for="tutor in TutorsDB.filter(
            (e) => e.sciences.length > 0 && e.icons?.includes('star')
          )"
          @click="Tutor = tutor"
          :class="{
            active: Tutor == tutor,
            main: tutor.icons?.includes('star'),
          }"
          :key="tutor"
          v-html="tutor.name"
        />
      </div>
    </div>
    <div class="content">
      <Tutor :tutor="Tutor" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TutorsDB } from '@/data/tutors'
import Tutor from '@/components/Tutors/Tutor.vue'

export default defineComponent({
  data() {
    return {
      TutorsDB,
      Tutor: TutorsDB[0],
    }
  },
  components: { Tutor },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.tutor_container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  // flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;
}
.hello {
  margin: 10px 0;
}

.slogan {
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 28px;
  margin: 20px 0 10px 0;

  @media (max-width: 1000px) {
    font-size: 23px;
    margin-top: 10px;
  }

  .underline {
    display: inline-block;
    padding: 0 20px;
    border-bottom: 4px solid theme(dark);
  }
}

.blocks {
  display: flex;
  flex-direction: column;
  padding: 10px;
  // max-width: 1000px;
  width: 400px;
  margin: auto;

  .block {
    margin: 4px 7px;
    flex-grow: 1;
    padding: 20px;
    text-align: center;
    border-radius: 7px;
    color: theme(light);
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s all;
    background: theme(dark);
    &.active {
      background: #3b4d53;
    }
    &.main {
      background: theme(main_dark);
      &.active {
        background: theme(main);
      }
    }
  }
}
</style>
