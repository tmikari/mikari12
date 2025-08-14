<template>
  <v-container>
    <SearchView />
  </v-container>
</template>

<script>
  import SearchView from '@/components/SearchView.vue' //SearchView.vueをインポート

  export default {
    name: 'HomeView',

    components: {
     SearchView,
    },

  }
</script>
