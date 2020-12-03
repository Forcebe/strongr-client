<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        color="grey"
        class="d-flex justify-space-between"
        v-bind="attrs"
        v-on="on"
      >
      <v-icon small left>mdi-pencil</v-icon>
      <span>Edit</span>
    </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h2>Edit {{ routine_name }}</h2>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Name"
            v-model="routine_name"
            :value="routine_name"
            prepend-icon="mdi-run"
            :rules="inputRules"
          ></v-text-field>

          <v-spacer></v-spacer>

          <v-btn
          depressed
          class="success mx-0 mt-3"
          @click="submit"
        >
          Update Routine
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
     errors: [],
     inputRules: [
       v => v.length >= 3 || 'Minimum length is 3 characters'
     ],
     routine_name: this.name,
     routine_id: this.id,
     dialog: false,
   }
 },

 props: [
   'name',
   'id'
 ],

 methods: {
   submit() {
     if (this.$refs.form.validate()) {
       let routine = {
         name: this.routine_name,
       }

       axios.put(this.$apiURL + 'routines/' + this.id, {routine}, {withCredentials: true})

       .then((response) => {
         if (response) {
           this.dialog = false
           this.$emit('done', response.data.routines)
         } else {
           console.log('no response')
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
