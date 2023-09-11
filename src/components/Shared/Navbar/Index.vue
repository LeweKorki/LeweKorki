<template>
  <div class="top" />
  <nav>
    <div class="container">
      <Logo />
      <div class="content" :class="{ show }">
        <div class="close" @click="show = false">
          <ic icon="times" />
        </div>
        <div class="mobileinfo">
          <Logo />
        </div>
        <div />
        <ul>
          <li @click="to('/umowsie')">Umów się</li>
          <li @click="to('/oferta')">Oferta</li>
          <li @click="to('/kursy')">Kursy</li>
          <li @click="to('/pracuj')">Pracuj</li>
          <!-- <li @click="to('/cennik')">Cennik</li> -->
          <li @click="to('/korepetytorzy')">Korepetytorzy</li>
          <!-- <li>Blog</li> -->
          <!-- <li>FAQ</li> -->
          <a href="//edirac.netlify.app">eDirac</a>
        </ul>
        <Profile class="desktop" />
        <MProfile class="mobile" />
      </div>
      <div class="hamburger" @click="show = true" />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import Login from './Login.vue'
import Logo from './Logo.vue'
import Profile from './DProfile.vue'
import MProfile from './MProfile.vue'

export default defineComponent({
  components: {
    Profile,
    MProfile,
    Logo,
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    to(url: string) {
      this.$router.push(url)
      this.show = false
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.top {
  height: 80px;
  background: theme(dark);
}

nav {
  padding: 10px 20px;
  background: theme(black);
  display: flex;
  justify-content: center;
  height: 80px;
  position: fixed;
  width: 100%;
  z-index: 2137;
}

.container {
  max-width: 1100px;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
}

.content {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    height: 0vh;
    overflow: hidden;
    position: fixed;
    width: 100vw;
    left: 0;
    top: 0;
    opacity: 0;
    transition: 0.3s all;
    justify-content: center;
    align-items: center;
    padding: 20px;
    flex-direction: column;
    background-color: theme(dark, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1;
  }
  &.show {
    @media (max-width: 1000px) {
      height: 100vh !important;
      opacity: 1;
    }
  }
}

ul {
  display: flex;
  list-style: none;
  font-size: 18px;
  a,
  li {
    color: theme(light) !important;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-inline-start: 0;
  }
  a,
  li {
    margin: 0 5px;
    padding: 0 5px;
    cursor: pointer;
    @media (max-width: 1000px) {
      padding: 2px;
      font-size: 20px;
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: '';
      background: theme(main);
      height: 3px;
      width: 0%;
      position: absolute;
      left: 0;
      bottom: -6px;
      border-radius: 10px;
      transition: 0.2s all;
    }
  }
}

.hamburger {
  height: 28px;
  width: 32px;
  background-image: url('~@/assets/navbar/menu.svg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  @media (min-width: 1000px) {
    display: none;
  }
}

.mobileinfo {
  @media (min-width: 1000px) {
    display: none;
  }
}

.close {
  font-size: 38px;
  position: absolute;
  top: 20px;
  right: 30px;
  color: theme(light);
  cursor: pointer;
  @media (min-width: 1000px) {
    display: none;
  }
}

.desktop {
  @media (max-width: 1000px) {
    display: none;
  }
}
</style>
