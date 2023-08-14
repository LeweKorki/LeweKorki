<template>
  <router-link to="/" class="logo">
    <span>LEWE KORKI</span>
    <img src="@/assets/logo/white.png" />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.logo {
  font-size: 21px;
  span {
    margin-right: 10px;
  }
  color: theme(light);

  font-weight: 600;
  padding: 0 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

img {
  height: 55px;
}
</style>
