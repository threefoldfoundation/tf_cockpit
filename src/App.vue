<template>
  <v-app dark>
    <v-navigation-drawer mini-variant app class="primary rounded" dark>
      <v-layout column fill-height justify-end>
        <div>
          <v-toolbar color="secondary darken-2 " class="py-3">
          <v-avatar color="transparant">
            <v-icon color="white">fas fa-chart-area</v-icon>
          </v-avatar>
        </v-toolbar>
        </div>
        <div>
          <v-list-item
            v-for="(route, i) in routes.filter(r => r.meta.position == 'top')"
            :key="i"
            :to="route"
            active-class="secondary--text"
          >
            <v-list-item-icon>
              <v-icon>{{ route.meta.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="title text-capitalize">{{route.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <v-spacer></v-spacer>
        <div>
          <v-list-item
            v-for="(route, i) in routes.filter(r => r.meta.position == 'bottom')"
            :key="i"
            :to="route"
            active-class="secondary--text"
          >
            <v-list-item-icon>
              <v-icon>{{ route.meta.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="title text-capitalize">{{route.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-layout>
    </v-navigation-drawer>

    <v-content class="content">
      <!-- <v-container>
        <v-layout class="pt-3 px-4">
          <h1 class="headline text-uppercase">
            <span>TF</span>
            <span class="font-weight-light">cockpit</span>
          </h1>
          <v-spacer />
          <v-badge right color="grey" class="mr-4 align-self-center">
            <template v-slot:badge>
              <span>2</span>
            </template>
            <v-icon color="grey lighten-1">fas fa-bell</v-icon>
          </v-badge>
        </v-layout>
      </v-container>-->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    showDialog: false,
    dilogTitle: "title",
    dialogBody: "",
    dialogActions: [],
    dialogImage: null,
    block: null
  }),
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.rounded {
  border-radius: 0 15px 15px 0 !important;
}
.v-card {
  border-radius: 15px !important;
  // background: #cccbcb !important;
}
.v-card__title {
  font-size: 18px!important;
}
</style>
