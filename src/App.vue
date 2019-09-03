<template>
  <v-app>
    <v-navigation-drawer mini-variant app class="primary darken-2 rounded" fixed dark>
      <v-toolbar color="secondary darken-2 " class="py-3">
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
      </v-container> -->
      <router-view></router-view>
    </v-content>

    <v-dialog v-model="showDialog" max-width="500px">
      <v-card>
        <v-toolbar color="secondary darken-2" class="mb-3 text-uppercase" dark>
          <v-card-title>{{dilogTitle}}</v-card-title>
          <v-spacer />
          <v-btn icon class="mr-0" @click="showDialog = false">
            <v-icon>fas fa-times</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          {{dialogimage}}
          <v-img :src="dialogImage" v-if="dialogImage"/>
          <p class="body-1 mt-4">
            {{dialogBody}}
          </p>
        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn v-if="dialogActions.length ==0 " color="green darken-1" text @click="showDialog = false">Ok</v-btn>
          <v-btn v-else v-for="(action, i) in dialogActions" :key="i" color="green darken-1" text @click="showDialog = false; action.action">{{action.title}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    showDialog: false,
    dilogTitle: "title",
    dialogBody: "<p>hi</p>",
    dialogActions: [],
    dialogImage: null
  }),
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  },
  mounted() {
    this.$root.$on('dialog', (data) => {
      if (data && data.title && data.body) {
        this.dilogTitle = data.title
        this.dialogBody = data.body
        this.dialogImage = data.image
        this.showDialog = true
        if (data.actions && data.actions.lenght) {
          this.dialogActions = data.actions
        }
      }
    })
  }
};
</script>

<style lang="scss">
.theme--light.v-application {
  background: none !important;
}
.rounded {
  border-radius: 0 15px 15px 0 !important;
}
.v-card {
  border-radius: 15px !important;
}
</style>
