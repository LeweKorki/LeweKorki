<template>
  <Layout v-if="user.sciences?.length > 0" title="Nauczanie">
    <div>
      <div class="levels">
        <div
          class="level"
          v-for="i in [...Array(4).keys()]"
          :key="i"
          :class="{ current: setlevel == i }"
          @click="this.setlevel = i"
        >
          <ic :icon="levels[i].icon" />
        </div>
      </div>
    </div>

    <div class="leveltitle" v-html="levels[setlevel].name" />

    <Table :table="Basics" />

    <Science
      v-for="science in user.sciences"
      :key="science"
      :science="science"
      :level="setlevel"
      :content="teaching[science.name][setlevel]"
    />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Layout from '../Layout.vue'
import Science from './Science.vue'
import Table from './Table.vue'
import teaching, { Basics } from '@/data/teaching'
import { User } from '@/types/user'

export default defineComponent({
  data() {
    return {
      user: this.$store.getters.getUser as User,
      // students: [] as User[],
      setlevel: 2,
      levels: [
        { name: 'Szkoła Podstawowa 7/8', icon: 'puzzle-piece' },
        { name: 'Liceum / Technikum PP', icon: 'school' },
        { name: 'Liceum / Technikum PR', icon: 'graduation-cap' },
        { name: 'Studia', icon: 'flask' },
      ],
      teaching,
      Basics,
    }
  },
  components: {
    Layout,
    Science,
    Table,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.levels {
  display: flex;
  margin-bottom: 10px;
  gap: 10px;
}
.level {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  font-size: 19px;
  align-items: center;
  padding: 10px 10px;
  background: theme(main_dark);
  color: theme(light);
  border-radius: 5px;
  font-size: 28px;
  cursor: pointer;

  // border-bottom: 3px solid theme(main);
  .icon {
    height: 35px;
    width: 35px;
    background-size: cover;
    background-position: center;
    filter: invert(0.5) brightness(1.75);
    @media (max-width: 1000px) {
      width: 27px;
      height: 27px;
    }
  }
}

.current {
  background: theme(main);
}

.leveltitle {
  font-size: 18px;
}
</style>
