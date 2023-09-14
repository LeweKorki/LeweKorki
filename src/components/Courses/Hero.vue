<template>
  <div class="cont">
    <div class="box">
      <div class="sloganbox">
        <div class="sloganmain">
          <div class="slogan b">Szukasz kursu do matury?</div>
          <div class="slogan">
            Potrzebujesz przypomnienia i podsumowania wiedzy?
          </div>
          <div class="slogan">Trafiłeś we właściwe miejsce.</div>
          <a href="#catalog" class="slogan pickmepickme" v-smooth-scroll>
            Sprawdź naszą ofertę!
          </a>
        </div>
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
  background-image: url('~@/assets/hero/courses.jpg');
  width: 100vw;
  height: 60vh;
  background-size: cover;
  background-position: center;
  @media (max-width: 1000px) {
    height: 50vh;
  }
}

.box {
  background: theme(black, 0.75);
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
  margin: 3px 0;

  @media (max-width: 1000px) {
    font-size: 19px;
  }
  &.b {
    margin: 5px 0;
    font-size: 70px;
    font-weight: 600;
    text-transform: uppercase;
    color: theme(main_light);
    text-shadow: 0px 0px 15px theme(dark);
    @media (max-width: 1000px) {
      font-size: 40px;
      line-height: 38px;
    }
  }
}

.sub {
  font-size: 20px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
}

.pickmepickme {
  background: theme(main_dark);
  display: inline-block;
  padding: 8px 10px;
  text-shadow: none;
  margin: 10px 0;
  font-size: 25px;
  border-radius: 8px;
  cursor: pointer;
  color: #e3e3e3;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
}
</style>
