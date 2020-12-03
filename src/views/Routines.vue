<template>
  <div class="routines">
    <h1 class="subtitle-1 grey--text px-6">Routines</h1>

    <v-container  class="my-5">

      <v-row no-gutters>
        <v-col
          col="12"
          sm="6"
          md="4"
          lg="3"
          v-for="routine in routines"
          :key="routine.name"
        >
          <v-card flat class="text-center ma-3">

            <v-card-text>
              <div class="subtitle-1">{{ routine.name }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color='grey' class="d-flex justify-space-between">
                <v-icon small left>mdi-pencil</v-icon>
                <span>Edit</span>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                @click="deleteRoutine(routine.id)"
                text
                color='grey'
                class="d-flex justify-space-between"
              >
                <span>Delete</span>
                <v-icon small right>mdi-delete</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

    </v-container>

  </div>

</template>

<script>
import axios from 'axios'

export default {
  mounted() {
    axios.get(this.$apiURL + 'routines', {withCredentials: true})

    .then(response => {
      this.routines = response.data.routines
      console.log(this.routines[0])
    })
  },

  methods: {
    deleteRoutine(id) {
      axios.delete(this.$apiURL + `/routines/${id}`, {withCredentials: true})
    }
  },

 data()  {
   return {
      routines: [],
      workouts: [],
   }
 }
}

</script>
