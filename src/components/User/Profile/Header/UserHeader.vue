<template>
  <div class="search">
    <div class="bar">
      <input v-model="searchUser" />
      <router-link :to="{ path: '/search', query: { user: searchUser } }">
        <ic icon="search" />
      </router-link>
    </div>
  </div>
  <div class="headcont">
    <div class="header">
      <div class="avatar" v-if="avatar" :class="{ isTutor }">
        <div class="inner">
          <div
            :style="{
              backgroundImage: `url(/userdata/user/avatar/${avatar}.png)`,
            }"
          />
        </div>
      </div>
      <div class="data">
        <div class="username">
          {{ username }}
        </div>
        <div class="login">
          {{ `@${login}` }}
          <Badges :icons="icons" />
        </div>
      </div>
    </div>
    <!-- <HeaderButtons :login="login" /> -->
  </div>
  <Description :description="description" :login="login" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Description from './Description.vue'
// import HeaderButtons from './HeaderButtons.vue'
import Badges from './Badges.vue'

export default defineComponent({
  props: {
    username: String,
    login: String,
    description: String,
    avatar: String,
    isTutor: Boolean,
    icons: Array as () => string[],
  },
  components: {
    Description,
    Badges,
    // HeaderButtons,
  },
  data() {
    return {
      searchUser: '' as string,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.search {
  margin: 5px 5px 0 0;
  display: flex;
  justify-content: flex-end;
  .bar {
    width: 285px;
    display: flex;
    padding: 2px;
    background-color: theme(main_dark);
    border-radius: 7px;
    input {
      flex-grow: 1;
      padding: 5px;
      font-size: 17px;
      border-radius: 5px 0 0 5px;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      color: theme(light);
      width: 35px;
      height: 35px;
      font-size: 18px;
    }
  }
}

.headcont {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.header {
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    justify-content: center;
  }
}
.avatar {
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  margin: 10px;
  border-radius: 50%;
  &.isTutor {
    background-image: url('~@/assets/navbar/premium_border.png');
    background-size: cover;
  }
  padding: 4px;
  @media (max-width: 1000px) {
    margin: 5px;
    width: 100px;
    height: 100px;
  }
  .inner {
    padding: 5px;
    background-color: theme(light);
  }
  div {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
  }
}
.username {
  font-size: 28px;
  font-weight: 600;
  @media (max-width: 1000px) {
    font-size: 22px;
    margin: 0;
  }
}
.login {
  font-size: 20px;
  margin: 5px 0;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
}

.visionary {
  font-weight: 900;
  font-size: 24px;
  color: theme(main_dark);
  border-bottom: 4px solid theme(main_dark);
  padding-bottom: 3px;
  border-radius: 2px;
  text-transform: uppercase;
}
</style>
