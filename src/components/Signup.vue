<template>
  <!-- Creaate a popup with the login form -->
  <v-dialog max-width="600px" v-model="dialog">

    <!-- Sign up Button -->
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        depressed
        class="primary"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon left>mdi-account-plus</v-icon>
        <span>Sign up</span>
      </v-btn>
    </template>

    <!-- Card containing form -->
    <v-card>
      <v-card-title>
        <h2>Sign up</h2>
      </v-card-title>

      <v-card-text>
        <!-- login form -->
        <v-form class="px-3" ref="form">
        <!-- username -->
          <v-text-field
            label="Username"
            v-model="username"
            maxlength="20"
            :rules="[rules.required]"
            required
          ></v-text-field>
        <!-- email -->
          <v-text-field
            label="Email"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>
        <!-- password -->
          <v-text-field
            label="Password"
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            counter
            @click:append="show = !show"
            :rules="[rules.required, rules.min]"
            hint="At least 5 characters"
          ></v-text-field>
        <!-- password confirmation -->
          <v-text-field
            label="Confirm password"
            v-model="password_confirmation"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            counter
            @click:append="show1 = !show1"
            :rules="[rules.required, passwordMatch]"
          ></v-text-field>

          <v-spacer></v-spacer>

          <v-btn depressed class="success mx-0 mt-3" @click="submit">
            Sign up
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
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: '',
      show: false,
      show1: false,
      emailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 5) || "Min 5 characters",
    }
    }
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        let user = {
          username: this.username,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        }

        axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
          .then(response => {
            if (response.data.status === 'created') {
              this.$emit('userCreated', response.data)
              this.$router.push({ name: 'Routines' })
            } else {
              this.errors = response.data.errors
            }
          })
      }

    }
  },
  computed: {
    passwordMatch() {
      return () => this.password === this.password_confirmation || "Password must match";
    }
  }
}

</script>
