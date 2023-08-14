<template>
  <div class="mobile">
    <article v-if="user && Object.keys(user).length > 0">
      <div>
        <div class="avatarcont">
          <section
            class="avatar"
            :style="{
              backgroundImage:
                'url(/userdata/user/avatar/' + user.avatarFileID + '.png)',
            }"
          ></section>
        </div>
        <section class="shortdata">
          <div>
            <b class="username">{{ user.fullname }}</b>
            <i class="login">@{{ user.login }}</i>
          </div>
        </section>
      </div>
      <router-link to="/logout" class="logout"> Wyloguj </router-link>
    </article>
    <router-link class="login" to="/login" v-else>Zaloguj się</router-link>
    <div class="buttons" v-if="user">
      <router-link
        @click="this.$emit('close')"
        :to="'/users/' + user.login"
        :style="{
          backgroundImage: `url(${require('@/assets/navbar/login.svg')})`,
        }"
      ></router-link>
      <router-link
        @click="this.$emit('close')"
        to="/messages"
        :style="{
          backgroundImage: `url(${require('@/assets/user/messages.svg')})`,
        }"
      ></router-link>
      <router-link
        @click="this.$emit('close')"
        to="/notifications"
        :style="{
          backgroundImage: `url(${require('@/assets/user/bell.svg')})`,
        }"
      ></router-link>
      <router-link
        @click="this.$emit('close')"
        to="/settings"
        :style="{
          backgroundImage: `url(${require('@/assets/user/settings.svg')})`,
        }"
      ></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { User } from '@/types/user'

export default defineComponent({
  emits: ['close'],

  data() {
    return {
      user: this.$store.getters.getUser as User,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.mobile {
  width: 100%;
  @media (min-width: 1000px) {
    display: none;
  }
}
article {
  width: 100%;
  padding-top: 5%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

article > div {
  padding: 5px;
  display: flex;
}

.avatarcont {
  background: theme(light);
  padding: 5px;
  border-radius: 50%;
}

.avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
}

.shortdata {
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
}

.username,
.login {
  display: block;
  color: #e3e3e3;
  font-size: 16.5px;
  padding: 2px;
  font-weight: 400;
}

.username {
  font-size: 20px;
  font-weight: 500;
}

.logout {
  color: theme(light);
  background: theme(main_dark);
  font-size: 16px;
  font-weight: 500;
  padding: 7px 10px;
  border-radius: 5px;
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.buttons {
  display: flex;
}

.buttons a {
  display: block;
  width: 50px;
  height: 50px;
  background-color: theme(main);
  margin: 5px 10px;
  border-radius: 10px;
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1000px) {
    width: 40px;
    height: 40px;
  }
}
</style>
