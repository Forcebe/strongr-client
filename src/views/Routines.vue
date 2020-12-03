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
              <editRoutine
                :name="routine.name"
                :id="routine.id"
                @done='refresh'
              />
              <v-spacer></v-spacer>
              <deleteRoutine
                :name="routine.name"
                :id="routine.id"
                @done='deleteRoutine(routine.id)'
              />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

    </v-container>

  </div>

</template>

<script>
import axios from 'axios'
import editRoutine from '../components/Edit-routine'
import deleteRoutine from '../components/Delete-routine'

export default {
  mounted() {
    axios.get(this.$apiURL + 'routines', {withCredentials: true})

    .then(response => {
      this.routines = response.data.routines
    })
  },

  updated() {
    axios.get(this.$apiURL + 'routines', {withCredentials: true})

  },

  methods: {
    deleteRoutine(id) {
      axios.delete(this.$apiURL + `/routines/${id}`, {withCredentials: true})
      window.location.reload()
    },
    refresh(newRoutines) {
      this.routines = newRoutines
      console.log('refreshing ', this.routines)
      // this.$forceUpdate()
    }
  },

 data()  {
   return {
      routines: [],
      workouts: [],
   }
 },

 components: {
   editRoutine,
   deleteRoutine
 }
}

</script>
