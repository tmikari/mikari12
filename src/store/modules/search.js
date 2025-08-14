import axios from 'axios'

export default {
  namespaced: true, 
  state: {
    word: '',
    definition: '',
    partOfSpeech: '',
    errorMessage: ''
  },
  getters: {
    getWord: state => state.word,
    getDefinition: state => state.definition,
    getPartOfSpeech: state => state.partOfSpeech,
    getError: state => state.errorMessage
  },
  mutations: {
    SetResult(state, resultdate) {
      state.word = resultdate.word
      state.definition =resultdate.definition
      state.partOfSpeech = resultdate.partOfSpeech
      state.errorMessage = ''
    },
    SetError(state, message) {
      state.word = ''
      state.definition = ''
      state.partOfSpeech = ''
      state.errorMessage = message
    }
  },
  actions: {
    async searchWord({ commit }, word) {
      if (!word) {
        commit('SetError', '単語を入力してください。')
        return
      }
      try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const meaning = response.data[0].meanings[0]
        commit('SetResult', {
          word,
          definition: meaning.definitions[0].definition,
          partOfSpeech: meaning.partOfSpeech
        })
      } catch (error) {
        commit('SetError', '意味が見つかりませんでした。')
      }
    }
  }
}