<template>
  <Header :science="science" />
  <Table :table="content" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './Header.vue'
import Table from './Table.vue'

export default defineComponent({
  props: ['content', 'science', 'level'],
  components: {
    Header,
    Table,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
