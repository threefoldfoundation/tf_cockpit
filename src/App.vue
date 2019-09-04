<template>
  <v-app dark>
    <v-navigation-drawer mini-variant app class="primary rounded" dark>
      <v-layout column fill-height justify-end>
        <div>
          <v-toolbar color="secondary darken-2 " class="py-3">
            <v-avatar>
              <v-img src="./assets/logo.jpg" />
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
      <v-col>
        <v-row class="pa-4 mx-1">
          <h1 class="headline pt-3 text-uppercase">
            <span>TF</span>
            <span class="font-weight-light">cockpit</span>
            <span class="title font-weight-light">- {{$route.name}}</span>
          </h1>
          <v-spacer />
          <v-btn icon>
            <v-icon>fas fa-user-circle</v-icon>
          </v-btn>
        </v-row>
        <router-view></router-view>
      </v-col>
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
.content {
  background: #fafafa !important;
}
.rounded {
  border-radius: 0 15px 15px 0 !important;
}
.v-card {
  border-radius: 15px !important;
}
.v-card__title {
  font-size: 18px !important;
}
</style>
