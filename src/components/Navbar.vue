<template>
  <nav>
    <v-app-bar
      app
      elevate-on-scroll
    >

      <v-toolbar-title class="text-uppercase grey--text">
        <span>strongr</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="mx-2">
        <Login @login='login'/>
      </div>
      <div class="mx-2">
        <Signup @userCreated='userCreated' />
      </div>
    </v-app-bar>

  </nav>
</template>

<script>
import Login from './Login'
import Signup from './Signup'

export default {
  components: {
    Login,
    Signup
  },
  methods: {
    login(data) {
      this.$emit('login', data)
    },
    userCreated(data) {
      this.$emit('userCreated', data)
    }
  }
}


</script>
