<template>
  <nav>
    <div class="content">
      <router-link to="/" class="logo">
        <span>LEWE KORKI</span>
        <ic icon="feather-pointed" />
      </router-link>
      <ul>
        <li>Oferta</li>
        <li>Korepetytorzy</li>
        <li>Pracuj</li>
        <li>Cennik</li>
        <li>Blog</li>
        <li>FAQ</li>
      </ul>
      <Login />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Login from './Login.vue'

export default defineComponent({
  components: {
    Login,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
nav {
  padding: 10px;
  background: theme(light);
  display: flex;
  justify-content: center;
}

.logo {
  font-size: 21px;
  span {
    margin-right: 5px;
  }

  color: theme(light);
  background: theme(dark);
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 5px;
}

.content {
  max-width: 1000px;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  list-style: none;
  font-size: 18px;
  li {
    margin: 0 5px;
    padding: 0 5px;
    cursor: pointer;
    &:hover {
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: '';
      background: theme(dark);
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
</style>
