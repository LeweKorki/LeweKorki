<template>
  <div class="home">
    <Hello />
    <div class="slogan">Przy nas nauczysz się takich rzeczy jak...</div>
    <Blocks />
    <div class="slogan">
      Wolisz się spotkać stacjonarnie? Sprawdź naszą dostepność!
    </div>
    <PLMap />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hello from '@/components/Offer/Hello.vue'
import Blocks from '@/components/Offer/Blocks.vue'
import PLMap from '@/components/Offer/Map.vue'

export default defineComponent({
  components: {
    Hello,
    Blocks,
    PLMap,
  },
  mounted() {
    document.title = 'Oferta | Lewe Korki'
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
  margin: auto;
  flex-grow: 1;
  padding: 20px;
  max-width: 1200px;
}

.slogan {
  text-align: center;
  color: theme(dark);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 28px;
  margin-top: 20px;

  @media (max-width: 1000px) {
    font-size: 23px;
  }
}
</style>
