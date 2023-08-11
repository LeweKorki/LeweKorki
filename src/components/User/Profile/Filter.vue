<template>
  <header>
    <div class="filter">
      <div
        class="button"
        v-for="(section, index) in sections"
        :key="index"
        :class="{
          isActive: currentSection == index,
          hide: section.logged && !itsme,
        }"
        @click="emitSection(index, section.logged)"
      >
        <ic :icon="section.icon" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  emits: ['setSection'],
  methods: {
    emitSection(number: number, logged: boolean) {
      if (!(logged && !this.itsme)) {
        this.currentSection = number
        this.$emit('setSection', number)
      } else {
        this.$notify({
          type: 'warn',
          title: 'xD',
          text: 'Co ty kombinujesz cwaniaku?',
        })
      }
    },
  },
  data() {
    return {
      itsme: this.$store.getters.getUser?.login == this.$route.params.login,
      currentSection: 0,
      sections: [
        { icon: 'home', logged: false },
        { icon: 'chart-line', logged: true },
        {
          icon: 'feather-alt',
          logged: true,
        },
        { icon: 'flask', logged: true },
        { icon: 'user', logged: false },
      ],
    }
  },
  mounted() {
    if (this.itsme) this.emitSection(1, true)
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.filter {
  display: flex;
  border-radius: 10px;
  max-width: 100%;
  width: 700px;
  .button {
    display: flex;
    margin: 0 5px;
    height: 45px;
    flex-grow: 1;
    font-size: 27px;
    justify-content: center;
    align-items: center;
    color: theme(light);
    background-color: theme(dark);
    border-radius: 10px;
    cursor: pointer;
    &.isActive {
      background-color: theme(main_dark);
    }
    @media (max-width: 1000px) {
      font-size: 20px;
      height: 37px;
    }
  }
}
.hide {
  display: none !important;
}
</style>
