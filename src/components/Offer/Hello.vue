<template>
  <div class="desccont">
    <div class="desc">
      <div class="red">Masz problemy z nauką?</div>
      Tworzymy grupę świadczącą wątpliwej jakości korki w całej Polsce. Dla nas
      nauczenie Ciebie to jak napad na bank - codzienność.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.desccont {
  color: theme(dark);
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  font-size: 20px;
  max-width: 1000px;
  margin-bottom: 20px;
  .red {
    background: linear-gradient(45deg, theme(main), theme(dark));
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 43px;
    font-weight: 700;
  }
}
</style>
