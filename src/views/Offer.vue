<template>
  <Hero />
  <div class="home">
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
import Hero from '@/components/Offer/Hero.vue'
import Blocks from '@/components/Offer/Blocks.vue'
import PLMap from '@/components/Offer/Map.vue'

export default defineComponent({
  components: {
    Hero,
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
  padding: 20px 0;
  width: 1200px;
  max-width: 95vw;
}

.slogan {
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 28px;
  margin-top: 20px;

  @media (max-width: 1000px) {
    font-size: 23px;
  }
}
</style>
