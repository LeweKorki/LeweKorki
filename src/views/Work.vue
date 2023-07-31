<template>
  <div class="home">
    <Hero />
    <div class="container">
      <Info />
      <Form />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/Work/Hero.vue'
import Info from '@/components/Work/Info.vue'
import Form from '@/components/Work/Form.vue'

export default defineComponent({
  components: {
    Hero,
    Info,
    Form,
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
  font-size: 18px;
}
.container {
  max-width: 900px;
  padding: 10px;
}
</style>
