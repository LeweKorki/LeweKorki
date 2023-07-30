<template>
  <div class="home">
    <div class="container">
      <div class="sloganbox">
        <div class="sloganmain">
          <div class="slogan">
            Zawsze chciałeś świadczyć korki i nie wiesz jak zacząć?
          </div>
          <div class="slogan b">Też nie wiedzieliśmy.</div>
        </div>
        <div>
          Dlatego stworzyliśmy ekipę lewych korków. Żebyśmy mogli działać
          wspólnie.
        </div>
      </div>
      <Info />
      <Form />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Info from '@/components/Work/Info.vue'
import Form from '@/components/Work/Form.vue'

export default defineComponent({
  components: {
    Info,
    Form,
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
  flex-grow: 1;
  font-size: 18px;
}
.container {
  max-width: 900px;
  padding: 10px;
}

.sloganbox {
  padding: 15px 0;
}
.sloganmain {
  padding: 5px 0;
}

.slogan {
  font-size: 27px;
  &.b {
    font-size: 31px;
    font-weight: 500;
    text-transform: uppercase;
    color: theme(main_dark);
  }
}
</style>
