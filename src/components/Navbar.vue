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
      <v-btn depressed class="grey lighten-3 grey--text">
        <span>Sign Out</span>
        <v-icon right >mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <div class="d-flex flex-column align-center mt-5" >
        <v-avatar size="100">
          <v-img src="/avatar-1.png" alt=""></v-img>
        </v-avatar>
        <p class="white--text subheading mt-1">The Net Ninja</p>
      </div>
      <div class="d-flex flex-column align-center mt-4 mb-3">
        <Popup />
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
import Popup from './Popup'

export default {
  components: {
    Popup
  },
  data() {
    return {
      drawer: false,
      links: [
        {icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
        {icon: 'mdi-folder', text: 'My Projects', route: '/projects'},
        {icon: 'mdi-account-group', text: 'Team', route: '/team'},
      ]
    }
  }
}

</script>
