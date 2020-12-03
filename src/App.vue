<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <NavbarLoggedIn
      v-if="isLoggedIn"
      @logout="handleLogout"
      @newRoutine="refresh"
    />
    <Navbar
      @userCreated="handleLogin"
      @login="handleLogin"
      v-else
    />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
/* eslint-disable no-unused-vars */
import Navbar from '@/components/Navbar'
import NavbarLoggedIn from '@/components/Navbar-logged-in'
import axios from 'axios'

export default {
  name: 'App',

  updated() {
    this.loginStatus()
    console.log('updating')
  },

  mounted() {
    this.loginStatus()
  },

  methods: {
    handleLogin(data) {
      this.isLoggedIn = true
      this.user = data.user
    },

    refresh() {
      console.log('refreshing app.vue')
      this.$forceUpdate()
    },

    handleLogout() {
      this.isLoggedIn = false
      this.user = {}
      this.$router.push({ name: 'Home'})
    },

    loginStatus() {
      axios.get(this.$apiURL + 'logged_in',
      {withCredentials: true})

      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
    },

  },
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },

  components: {
    Navbar,
    NavbarLoggedIn
  },

  data: () => ({
    isLoggedIn: null,
    user: {},
    dialog: ''
  }),
};
</script>
