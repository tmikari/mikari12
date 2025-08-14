import axios from 'axios';

export default {
  namespaced: true,
  state: {
    list: [],
    errorMessage: '',
  },
  getters: {
    favorites: (s) => s.list,
    error: (s) => s.errorMessage,
  },
  mutations: {
    SET_ERROR(state, msg) { state.errorMessage = msg || ''; },
    SET_FAVORITES(state, items) { state.list = items || []; },
    ADD_FAVORITE(state, item) { state.list.unshift(item); },
  },
  actions: {
    async fetchFavorites({ commit }) {
      commit('SET_ERROR', '');
      try {
        const res = await axios.get('https://m3h-takiguchi-12.azurewebsites.net/api/SELECT');
        commit('SET_FAVORITES', res.data?.List ?? []);
      } catch (e) {
        commit('SET_ERROR', 'お気に入りの取得に失敗しました');
      } 
    },
    async addFavorite({ commit }, { Word, PartOfSpeech, Definition }) {
      // APIへ登録
      await axios.post('https://m3h-takiguchi-12.azurewebsites.net/api/INSERT', {
        Word, PartOfSpeech, Definition
      });
      
      commit('ADD_FAVORITE', { No: null, Name: Word, PartOfSpeech, Definition });
    },
  },
};
