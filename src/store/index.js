import Vue from 'vue'
import Vuex from 'vuex'
import search from './modules/search' //モジュールをインポート
import favorites from './modules/favorites'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    search,
    favorites
  }
})