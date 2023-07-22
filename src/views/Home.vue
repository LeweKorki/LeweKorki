<template>
  <div class="home">
    <div class="itsme">DZIAŁA <ic icon="star" /></div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
})
</script>

<style lang="scss">
@import '@/styles/index.scss';
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
.itsme {
  font-size: 35px;
  color: theme(light);
  background: theme(dark);
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 10px;
}
</style>
