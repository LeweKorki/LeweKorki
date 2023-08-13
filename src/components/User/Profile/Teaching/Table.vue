<template>
  <div class="all">
    <div class="container" v-for="(item, index) in table" :key="item">
      <div class="name" v-html="index" />
      <a :href="item" target="_blank">
        <ic icon="link" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: { table: Object as () => { [key: string]: string } },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.all {
  margin: 15px 0;
}

.container {
  display: flex;
  justify-content: space-between;
}

a {
  color: theme(main);
  font-size: 20px;
}
</style>
