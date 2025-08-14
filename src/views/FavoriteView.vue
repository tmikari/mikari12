<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-alert v-if="error" type="error" dense class="mb-4">{{ error }}</v-alert>
        

        <v-card
          v-for="item in favorites"
          :key="item.No ?? item.Name"
          class="mb-4"
        >
          <v-card-title>{{ item.Name }}</v-card-title>
          <v-card-subtitle>{{ item.PartOfSpeech }}</v-card-subtitle>
          <v-card-text>{{ item.Definition }}</v-card-text>
        </v-card>

       
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FavoriteView',
  computed: {
    ...mapGetters('favorites', ['favorites', 'error']),
  },
  created() {
    this.fetchFavorites()
  },
  methods: {
    ...mapActions('favorites', ['loadFavorites']),
  },
}
</script>

