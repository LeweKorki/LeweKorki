<template>
  <div class="hello">
    <div>
      <div class="name" v-html="tutor.name" />
      <div class="fullname">
        <span class="degree" v-html="tutor.degree" />
        <span v-html="tutor.fullname" />
      </div>
    </div>
    <div class="div">
      <div
        class="contact"
        v-for="(contact, index) in tutor.contact"
        :key="contact"
      >
        <ic :icon="c_icons[index]" />
        {{ contact }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['tutor'],
  data() {
    return {
      c_icons: {
        email: 'envelope',
        fb: 'facebook',
        github: 'github',
      },
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.hello {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .name {
    font-size: 50px;
    font-weight: 800;
    text-transform: uppercase;
  }
  .fullname {
    font-size: 25px;
    .degree {
      font-size: 19px;
      margin-right: 5px;
    }
  }
  .contact {
    font-size: 19px;
  }
  padding-bottom: 10px;
  border-bottom: 5px solid theme(main);
}
</style>
