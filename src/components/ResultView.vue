<template>
  <v-container>
    <v-row justify="center" class="mt-5">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>検索結果</v-card-title>
          <v-card-text>
            <p><strong>単語：</strong> {{ word }}</p>
            <p><strong>品詞：</strong> {{ partOfSpeech }}</p>
            <p><strong>意味：</strong> {{ definition }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="$router.push('/')">戻る</v-btn>
            <v-btn color="#98fb98" @click="saveFavorite">お気に入り登録</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('search', [
      'getWord', 
      'getDefinition', 
      'getPartOfSpeech',
      'getError'
    ]),
    word() {
      return this.getWord
    },
    definition() {
      return this.getDefinition
    },
    partOfSpeech() {
      return this.getPartOfSpeech
    },
    error() {
      return this.getError
    }
  },
  methods: {
    ...mapActions('favorites', ['addFavorite']),
    async saveFavorite() {
      try {
        await this.addFavorite({
          Word: this.word,
          PartOfSpeech: this.partOfSpeech,
          Definition: this.definition,
        });
        alert('お気に入りに追加しました！');
      } catch (e) {
        alert('お気に入り登録に失敗しました。');
        console.error(e);
      }
    },
  },
}
</script>
