<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <Navbar />
    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',

  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
