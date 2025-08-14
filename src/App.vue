<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">

      <v-spacer></v-spacer>

      <v-btn text to="/" tag="router-link">検索画面</v-btn>
      <v-btn text to="/result" tag="router-link">検索結果</v-btn>
      <v-btn text to="/favorite" tag="router-link">お気に入り一覧</v-btn>
      </div>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
