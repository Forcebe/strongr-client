<template>
  <nav>
    <v-app-bar
      app
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span>strongr</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed class="grey lighten-3 grey--text" @click="logout">
        <span>Sign Out</span>
        <v-icon right >mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <div class="d-flex flex-column align-center mt-5" >
        <h2 class="white--text mt-1">{{ user.username }}</h2>
      </div>
      <div class="d-flex flex-column align-center mt-4 mb-3">
        <CreateRoutine @done='done' />
      </div>

      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import CreateRoutine from './Create-routine'
import axios from 'axios'



export default {
  name: "NavbarLoggedIn",

  mounted() {
    this.getUser()

  },

  components: {
    CreateRoutine
  },

  data() {
    return {
      drawer: false,
      links: [
        {icon: 'mdi-weight-lifter', text: 'Routines', route: '/routines'},
        {icon: 'mdi-arm-flex', text: 'Workouts', route: '/workouts'},
        {icon: 'mdi-dumbbell', text: 'Exercises', route: '/exercises'},
      ],
      user: {}
    }
  },

  methods: {
    logout() {
      axios.delete(this.$apiURL + 'logout', {withCredentials: true})
       .then(response => {
         if (response.data.logged_out) {
           this.$emit('logout')
           this.$router.push({ name: 'Home' })
         }
       })
    },
    getUser() {
      axios.get(this.$apiURL + 'logged_in',
      {withCredentials: true})

      .then(response => {
        this.user = response.data.user
      })
    },
    done() {
      console.log('Navbar-logged-in emits newRoutine')
      this.$emit('newRoutine')
    }
  }
}

</script>
