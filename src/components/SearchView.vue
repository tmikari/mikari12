<template>
  <v-container>
    <v-row justify="center" class="mt-5">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="word"
          label="英単語を入力"
          solo
          outlined
        ></v-text-field>
        <v-btn color="primary" block @click="search">検索</v-btn>
        <v-alert v-if="error" type="error" class="mt-3">
          {{ error }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      word: ''
    }
  },
  computed: {
    ...mapGetters('search',['getError']),
    error() {
      return this.getError
    }
  },
  methods: {
    ...mapActions('search',['searchWord']),
    async search() {
      await this.searchWord(this.word)
      if (!this.error) {
        this.$router.push('/result')
      }
    }
  }
}
</script>