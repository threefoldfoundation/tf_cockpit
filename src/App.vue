<template>
  <v-app>
    <v-navigation-drawer mini-variant app class="primaryDarker rounded" fixed dark>
      <v-toolbar color="secondary" class="py-3">
        <v-avatar color="transparant">
          <v-icon color="white">fas fa-chart-area</v-icon>
        </v-avatar>
      </v-toolbar>
      <v-list-item v-for="(route, i) in routes" :key="i" link @click="$router.push(route)">
        <v-list-item-icon>
          <v-icon>{{ route.meta.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="title text-capitalize">{{route.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <v-content>
      <v-container>
        <v-layout class="pt-3 px-4">
          <h1 class="headline text-uppercase">
            <span>TFT</span>
            <span class="font-weight-light">DASHBOARD</span>
          </h1>
          <v-spacer />
          <v-badge right color="grey" class="mr-4 align-self-center">
            <template v-slot:badge>
              <span>2</span>
            </template>
            <v-icon color="grey lighten-1">fas fa-bell</v-icon>
          </v-badge>
        </v-layout>
      </v-container>
      <router-view class="ma-2 ml-4 mr-3"></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({}),
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  }
};
</script>

<style lang="scss">
.rounded {
  border-radius: 0 15px 15px 0 !important;
}
.v-card {
  border-radius: 15px !important;
}
</style>
