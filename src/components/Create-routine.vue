<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        depressed
        class="success"
        v-bind="attrs"
        v-on="on"
      >
      Add new routine</v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h2>Add a new routine</h2>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Name"
            v-model="name"
            prepend-icon="mdi-run"
            :rules="inputRules"
          ></v-text-field>

          <v-spacer></v-spacer>

          <v-btn
          depressed
          class="success mx-0 mt-3"
          @click="submit"
        >
          Add Routine
        </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import moment from 'moment'
import axios from 'axios'

export default {
  data() {
   return {
     name: '',
     errors: [],
     dialog: false,
     inputRules: [
       v => v.length >= 3 || 'Minimum length is 3 characters'
     ]
   }
 },

 methods: {
   submit() {
     if (this.$refs.form.validate()) {
       let routine = {
         name: this.name,
       }

       axios.post(this.$apiURL + 'routines', {routine}, {withCredentials: true})

       .then(response => {
         if(response.data.status === 'created') {
           this.$emit('routineCreated', response.data)
           this.dialog = false
           console.log('create routine emits done')
           this.$emit('done')
           window.location.reload()
         } else {
          this.errors = response.data.errors
         }
       })
     }

   }

 },

 computed: {
   formatDate () {
     return this.due ? moment(this.due).format('Do MMM YYYY') : ''
   }
 },
}
</script>
