<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        depressed
        class="success"
        v-bind="attrs"
        v-on="on"
      >
      Add New Project</v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          ></v-text-field>

          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          ></v-textarea>

          <v-menu
            v-model="dateMenu"
            :close-on-content-click="false"
            max-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="formatDate"
                label="Due by"
                readonly
                prepend-icon="mdi-calendar"
                v-bind="attrs"
                v-on="on"
                :rules="inputRules"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due" @change="dateMenu = false">
            </v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn
          depressed
          class="success mx-0 mt-3"
          @click="submit"
        >
          Add Project
        </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import moment from 'moment'

export default {
  data() {
   return {
     title: '',
     content: '',
     due: null,
     dateMenu: false,
     inputRules: [
       v => v.length >= 3 || 'Minimum length is 3 characters'
     ]
   }
 },

 methods: {
   submit() {
     if (this.$refs.form.validate()) {
       console.log(this.title, this.content, this.due)
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
