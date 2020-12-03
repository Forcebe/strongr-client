<template>
  <v-dialog max-width="400px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        color="grey"
        class="d-flex justify-space-between"
        v-bind="attrs"
        v-on="on"
      >
      <span>Delete</span>
      <v-icon small right>mdi-delete</v-icon>
    </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h2>Are you sure you want to delete {{ routine_name }}?</h2>
      </v-card-title>

      <v-card-actions>
        <v-form class="px-3" ref="form">

          <v-btn
          depressed
          class="error mx-0 mt-3 d-flex justify-space-between"
          @click="submit"
        >
          Delete
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
        depressed
        class="error mx-0 mt-3 d-flex justify-space-between"
        @click="dialog = false"
      >
        Cacnel
      </v-btn>
        </v-form>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import moment from 'moment'

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
      this.$emit('done')
      this.dialog = false
   }

 },

 computed: {
   formatDate () {
     return this.due ? moment(this.due).format('Do MMM YYYY') : ''
   }
 },
}
</script>
