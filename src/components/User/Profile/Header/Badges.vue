<template>
  <div class="icons">
    <div class="guysicon" v-for="i in icons" :key="i">
      <div class="ic">
        <ic :icon="i" />
      </div>
      <div class="icondesc">
        <div class="padding">
          <div class="t" v-html="iconinfo[i].t" />
          <div class="c" v-html="iconinfo[i].c" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import iconinfo from '@/data/icons'

export default defineComponent({
  props: {
    icons: Array as () => string[],
  },
  data() {
    return {
      iconinfo,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.icons {
  display: flex;
  margin-top: 5px;
}
.guysicon {
  padding: 0 2px;
  .ic:hover ~ .icondesc {
    height: 100px;
    opacity: 1;
  }
  .icondesc {
    position: absolute;
    top: 30px;
    right: 50%;
    width: 300px;
    overflow: hidden;
    height: 0;
    background: theme(dark);
    transition: 0.2s all;
    z-index: 1;
    color: theme(light);
    border-radius: 10px;
    opacity: 0;
    @media (min-width: 1000px) {
      transform: translateX(50%);
    }
    .t {
      font-weight: 500;
      text-transform: uppercase;
    }
    .c {
      font-size: 15px;
    }
    .padding {
      padding: 10px;
    }
  }
}
</style>
