<template>
  <div class="info">
    <div class="cityname" v-html="city.name" />
    <div class="section">Dostepność:</div>
    <div class="blocks">
      <div
        v-for="science in [
          ...new Set(
            TutorsDB.filter((e) => e.city == city.name)
              .map((e) => e.sciences)
              .flat(1)
          ),
        ]"
        :key="science"
        class="block"
      >
        <!-- :class="{ core: city.guys.map((e) => e.core).includes(science.img) }" -->
        <img :src="require(`@/assets/sciences/${science.img}.svg`)" />
      </div>
    </div>
    <div class="section">Korepetytorzy:</div>
    <div class="guys">
      <div
        v-for="guy in TutorsDB.filter((e) => e.city == city.name)"
        :key="guy"
      >
        <div class="guysgrow" v-html="guy.name" />
        <div class="guysicons">
          <div class="guysicon" v-for="i in guy.icons" :key="i">
            <div class="ic">
              <ic :icon="i" />
            </div>
            <div class="icondesc">
              <div class="padding">
                <div class="t" v-html="iconinfo[i].t" />
                <div class="c" v-html="iconinfo[i].c" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { TutorsDB } from '@/data/guys'
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['city'],
  data() {
    return {
      TutorsDB,
      iconinfo: {
        otter: {
          t: 'Wydra',
          c: 'Twórca grupy, który czuje się lepszy od innych, bo potrafi programować.',
        },
        star: {
          t: 'Założyciel',
          c: 'Jeden z pięciu założycieli grupy.',
        },
      },
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.info {
  // background: purple;
  width: 400px;
  padding: 20px 10px;
  max-width: 80vw;
  @media (max-width: 1000px) {
    padding: 5px 5px;
  }
  .cityname {
    // background: linear-gradient(45deg, theme(dark), theme(main_dark));
    background: theme(dark);
    color: theme(light);
    border-radius: 8px;
    font-size: 32px;
    text-align: center;
    font-weight: 500;
    padding: 3px;
    text-transform: uppercase;
    margin-bottom: 20px;
    @media (max-width: 1000px) {
      font-size: 25px;
      margin-bottom: 10px;
    }
  }
  .section {
    // background: linear-gradient(45deg, theme(main), theme(main_dark));
    // background-clip: text;
    // -webkit-text-fill-color: transparent;
    font-weight: 500;
    font-size: 22px;
    margin-top: 20px;
    text-transform: uppercase;
    @media (max-width: 1000px) {
      margin-top: 10px;
      font-size: 19px;
    }
  }

  .blocks {
    display: flex;
    margin: 10px 0;
    @media (max-width: 1000px) {
      margin: 5px 0;
    }
  }

  .block {
    width: 50px;
    height: 50px;
    padding: 6px;
    margin-right: 8px;
    border-radius: 10px;
    background: theme(main);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s all;
    @media (max-width: 1000px) {
      width: 40px;
      height: 40px;
    }
    img {
      width: 100%;
      filter: invert(0.5) brightness(1.8);
    }

    &:hover {
      filter: brightness(1.1);
    }
  }
}

.guys {
  font-size: 19px;
  margin-top: 5px;
  max-width: 300px;
  .guysgrow {
    flex-grow: 1;
  }
  .guysicons {
    display: flex;
  }
  .guysicon {
    padding: 0 2px;
    .ic:hover ~ .icondesc {
      height: 100px;
      opacity: 1;
    }
    .icondesc {
      position: absolute;
      top: 25px;
      right: 0;
      width: 300px;
      overflow: hidden;
      height: 0;
      background: theme(dark);
      transition: 0.2s all;
      z-index: 1;
      color: theme(light);
      border-radius: 10px;
      opacity: 0;
      @media (min-width: 1000px) {
        transform: translateX(20%);
      }
      .t {
        font-weight: 500;
        text-transform: uppercase;
      }
      .c {
        font-size: 15px;
      }
      .padding {
        padding: 10px;
      }
    }
  }
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  > div {
    display: flex;
    align-items: center;
    > svg {
      margin-left: 5px;
    }
  }
}

@keyframes AnimateCore {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.core {
  background-size: 300% 300% !important;
  background-color: theme(dark) !important;
  background-image: linear-gradient(
    -45deg,
    theme(dark) 0%,
    theme(gray, 0.4) 51%,
    theme(gray, 0.4) 41%,
    theme(dark) 100%
  ) !important;
  -webkit-animation: AnimateCore 4s ease infinite;
  animation: AnimateCore 4s ease infinite;
  &:hover {
    box-shadow: 0px 0px 8px #00647d;
  }
}
</style>
