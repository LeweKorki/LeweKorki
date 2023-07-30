<template>
  <router-link to="/" class="logo">
    <span>LEWE KORKI</span>
    <ic icon="feather-pointed" />
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
    margin-right: 5px;
  }

  background: theme(light);
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
