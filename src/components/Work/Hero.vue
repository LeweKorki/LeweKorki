<template>
  <div class="cont">
    <div class="box">
      <div class="sloganbox">
        <div class="sloganmain">
          <div class="slogan">
            Chcesz świadczyć korki i nie wiesz jak zacząć?
          </div>
          <div class="slogan b">Dołącz do nas</div>
        </div>
        <div class="sub">Dlatego stworzyliśmy ekipę lewych korków -</div>
        <div class="sub">żebyśmy mogli działać wspólnie.</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.cont {
  background-image: url('~@/assets/hero3.jpg');
  width: 100vw;
  height: 60vh;
  background-size: cover;
  background-position: center;
}

.box {
  background: theme(dark, 0.65);
  width: 100%;
  height: 100%;
  padding: 15px 0;
  color: theme(light);
  display: flex;
  justify-content: center;
  align-items: center;
}
.sloganbox {
  padding: 10px;
}

.slogan {
  font-size: 30px;
  text-shadow: 0px 0px 5px theme(dark);

  @media (max-width: 1000px) {
    font-size: 22px;
  }
  &.b {
    margin: 5px 0;
    font-size: 60px;
    font-weight: 600;
    text-transform: uppercase;
    color: theme(light);
    text-shadow: 0px 0px 15px theme(main_dark);
    @media (max-width: 1000px) {
      font-size: 45px;
    }
  }
}

.sub {
  font-size: 20px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
}
</style>
