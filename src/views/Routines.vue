<template>
  <div class="routines">
    <h1 class="subtitle-1 grey--text">Routines</h1>

    <v-container  class="my-5">

      <v-row no-gutters>
        <v-col
          col="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size='100' class="grey lighten-2">
                <img :src="person.avatar" alt="person.name">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle-1">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color='grey' class="d-flex justify-space-between">
                <v-icon small left>mdi-pencil</v-icon>
                <span>Edit</span>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn text color='grey' class="d-flex justify-space-between">
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

export default {
 data()  {
   return {
     team: [
        { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar-1.png' },
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
        { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'}
      ]
   }
 }
}

</script>
