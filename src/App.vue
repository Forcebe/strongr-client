<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import axios from 'axios'

export default {
  name: 'App',

  mounted() {
    this.loginStatus()
  },

  methods: {
    handleLogin(data) {
      this.isLoggedIn = true
      this.user = data.user
      console.log(this.user)
    },

    handleLogout() {
      this.isLoggedIn = false
      this.user = {}
      console.log(this.user)
    },

    loginStatus() {
      axios.get('http://localhost:3001/logged_in',
      {withCredentials: true})

      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
    }
  },
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },

  components: {
    Navbar
  },

  data: () => ({
    isLoggedIn: false,
    user: {},
    dialog: ''
  }),
};
</script>
