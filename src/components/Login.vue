<template>
  <!-- Creaate a popup with the login form -->
  <v-dialog max-width="600px" v-model="dialog">

    <!-- Login Button -->
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        depressed
        class="success"
        v-bind="attrs"
        v-on="on"
      >
        <span>Sign In</span>
        <v-icon right >mdi-login</v-icon>
      </v-btn>
    </template>

    <!-- Card containing form -->
    <v-card>
      <v-card-title>
        <h2>Log In</h2>
      </v-card-title>

      <v-card-text>

        <!-- login form -->
        <v-form class="px-3" ref="form">
        <!-- email -->
          <v-text-field
            label="Email"
            v-model="email"
            :rules="emailRules"
          ></v-text-field>
        <!-- password -->
          <v-text-field
            label="Password"
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            counter
            @click:append="show = !show"
            :rules="[rules.required]"
          ></v-text-field>

          <v-spacer></v-spacer>

          <v-btn depressed class="success mx-0 mt-3" @click="submit">
            Log In
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>

  </v-dialog>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      errors: null,
      show: false,
      emailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 3) || "Min 3 characters"
    }
    }
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        let user = {
          email: this.email,
          password: this.password
        }
        axios.post(this.$apiURL + 'login', {user}, {withCredentials: true})
          .then(response => {
            if (response.data.logged_in) {
              this.$emit('login', response.data)
              this.$router.push({ name: 'Routines' })
            } else {
              this.errors = response.data.errors
            }
          })
      }
    }
  }
}

</script>
