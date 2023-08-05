<template>
  <div class="container">
    <Hello :tutor="tutor" />
    <div>
      <div class="study">
        <Major
          v-for="(major, index) in tutor.majors"
          :key="major"
          :major="major"
          :index="index"
        />
      </div>
      <div class="h">O mnie</div>
      <section v-for="i in tutor.aboutme" :key="i" v-html="i" />
      <div class="h">Korepetycje</div>
      <div class="s">
        <Science
          v-for="science in tutor.sciences"
          :key="science"
          :science="science"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hello from './Hello.vue'
import Major from './Major.vue'
import Science from './Science.vue'

export default defineComponent({
  props: ['tutor'],
  components: { Hello, Major, Science },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  // background: green;
  width: 700px;
  max-width: 98vw;
  padding: 10px;
  margin: 10px;
}

.h {
  font-size: 25px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 20px 0 10px 0;
}
.s {
  display: flex;
}
section {
  margin: 10px 0;
}
</style>
