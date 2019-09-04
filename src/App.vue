<template>
  <v-app dark>
    <v-navigation-drawer mini-variant app class="primary rounded" dark>
      <v-layout column fill-height justify-end>
        <div>
          <v-toolbar color="secondary darken-2 " class="py-3">
            <v-badge bottom right overlap color="primary">
              <template v-slot:badge>
                <v-icon size="12" dark>{{$route.meta.icon}}</v-icon>
              </template>
              <!--slot can be any component-->
              <v-avatar>
                <v-img src="./assets/logo.jpg" />
              </v-avatar>
            </v-badge>
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
              <v-list-item-title class="title text-capitalize">{{route.meta.displayName}}</v-list-item-title>
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
              <v-list-item-title class="title text-capitalize">{{route.meta.displayName}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-layout>
    </v-navigation-drawer>

    <v-content class="content">
      <v-col>
        <v-row class="pa-4 mx-1">
          <h1 class="headline pt-0 pb-1 text-uppercase">
            <span>TF</span>
            <span class="font-weight-light">cockpit</span>
            <span class="title font-weight-light">- {{$route.meta.displayName}}</span>
          </h1>
          <v-spacer />
          <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
            <template v-slot:activator="{ on }">
              <v-badge overlap left v-model="showBadge" color="secondary">
                <template v-slot:badge>
                  <span>1</span>
                </template>
                <v-btn text icon v-on="on">
                  <v-icon>far fa-bell mr-2</v-icon>
                </v-btn>
              </v-badge>
            </template>

            <v-card>
              <v-list>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-icon>fas fa-plus</v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>A new node wants to join your farm</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav"></v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list>
                <v-list-item>
                  <v-list-item-title>Node Id: Lochristi34</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Node name: Lochristi Node 34</v-list-item-title>
                </v-list-item>
              </v-list>

              <v-card-actions>
                <div class="flex-grow-1"></div>

                <v-btn text @click="menu = false">Deny</v-btn>
                <v-btn color="primary" text @click="menu = false">Allow</v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
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
  border-radius: 0 10px 10px 0 !important;
}
.v-menu__content,
.v-card {
  border-radius: 10px !important;
}
.v-card__title {
  font-size: 18px !important;
}
</style>
