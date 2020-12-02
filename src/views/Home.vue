<template>
  <div class="home">
    <!-- Sheet contains page title -->
    <v-sheet
      :height="sheetHeight"
    >
      <v-container class="fill-height">
        <v-row
          align="center"
          justify="center"
        >
          <h1 class="text-center display-3 hidden-xs-only">
            <span class="grey--text">GET</span>
            <span class="grey--text text--darken-2"> STRONGR</span>
          </h1>
          <h1 class="text-center display-1 hidden-sm-and-up">
            <span class="grey--text">GET</span>
            <span class="grey--text text--darken-2"> STRONGR</span>
          </h1>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- CTA button todo: sign up popup -->
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-btn  large class="primary">
          <v-icon left>mdi-account-plus</v-icon>
          Sign Up Now
        </v-btn>
      </v-row>
    </v-container>

    <!-- Three cards containing marketing guff -->
    <v-row>
      <!-- Card 1 -->
      <v-col cols="12" sm="4">
        <v-card class="mx-auto " max-width="374">
          <v-img
            max-height="250"
            src="http://placekitten.com/400/400"
          ></v-img>
          <v-card-title>You Should Sign Up</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Card 2 -->
      <v-col cols="12" sm="4">
        <v-card class="mx-auto " max-width="374">
          <v-img
            max-height="250"
            src="http://placekitten.com/401/400"
          ></v-img>
          <v-card-title>Wow Cool App</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Card 3 -->
      <v-col cols="12" sm="4">
        <v-card class="mx-auto " max-width="374">
          <v-img
            max-height="250"
            src="http://placekitten.com/403/400"
          ></v-img>
          <v-card-title>Some Great Features</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

  computed: {
    // Store header sheet heights for screen size breakpoints
    sheetHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '200px'
        case 'sm': return '300px'
        case 'md': return '300px'
        case 'lg': return '300px'
        case 'xl': return '350px'
      }
      return '300px'
    }
  }
}

</script>
