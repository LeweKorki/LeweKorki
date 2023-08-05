<template>
  <div class="home">
    <Profile v-if="user && Object.keys(user).length > 0" :user="user" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AxiosResponse } from 'axios'
import axios from '@/config/axios'
import Profile from '@/components/User/Profile/Profile.vue'
import { User } from '@/types/user'

export default defineComponent({
  components: {
    Profile,
  },
  data() {
    return {
      user: {} as User,
    }
  },
  async created() {
    const login = this.$route.params.login
    document.title = login + ' | Lewe Korki'
    const res: AxiosResponse<User> = await axios.get('/users/' + login)
    const user = res.data
    user ? (this.user = user) : this.$router.push('/404')
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.home {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
}
</style>
