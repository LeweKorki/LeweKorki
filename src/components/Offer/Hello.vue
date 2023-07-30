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
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  font-size: 20px;
  max-width: 1000px;
  margin: 20px 0;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  .red {
    background: linear-gradient(30deg, theme(main), theme(main_dark));
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 43px;
    font-weight: 700;
    @media (max-width: 1000px) {
      line-height: 40px;
      margin-bottom: 10px;
    }
  }
}
</style>
