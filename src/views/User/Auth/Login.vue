<template>
  <div class="container">
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from '@/components/User/Auth/Login/Form.vue'

export default defineComponent({
  components: {
    LoginForm,
  },
  created() {
    document.title = 'Logowanie | Lewe Korki'
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.container {
  display: flex;
  align-content: center;
  padding: 3vh 0;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
}
</style>
