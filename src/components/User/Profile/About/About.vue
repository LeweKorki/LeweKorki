<template>
  <ResearchInterests :researchInterests="researchInterests" />
  <Education :education="user.majors" />
  <!-- <Work :work="user.work" /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Education from './sections/Education.vue'
import ResearchInterests from './sections/ResearchInterests.vue'
import { User } from '@/types/user'

export default defineComponent({
  props: {
    user: Object as () => User,
  },
  data() {
    return {
      researchInterests: this.user?.researchInterests,
    }
  },
  components: {
    Education,
    ResearchInterests,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
