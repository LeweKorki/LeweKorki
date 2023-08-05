<template>
  <div class="top"></div>
  <!-- <div class="container">
    <RegisterForm />
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import RegisterForm from '@/components/User/Auth/Register/Form.vue'

export default defineComponent({
  components: {
    // RegisterForm,
  },
  created() {
    document.title = 'Rejestracja | Lewe Korki'
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.top {
  height: $height;
  background: theme(dark);
}
.container {
  display: flex;
  align-content: center;
  padding: 3vh 0;
}
</style>
