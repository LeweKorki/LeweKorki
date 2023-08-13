<template>
  <ResearchInterests :researchInterests="user?.researchInterests" />
  <Education :education="user.majors" />
  <!-- <Work :work="user.work" /> -->
  <Lessons :lessons="user.sciences" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ResearchInterests from './sections/ResearchInterests.vue'
import Education from './sections/Education.vue'
import Lessons from './sections/Lessons.vue'
import { User } from '@/types/user'

export default defineComponent({
  props: {
    user: Object as () => User,
  },

  components: {
    Education,
    ResearchInterests,
    Lessons,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
