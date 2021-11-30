<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn @click="onSignOut">Sign out</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "./components/general/Snackbar.vue";
//import { mapActions } from "vuex";
import store from "./store/index";
export default {
  name: "App",
  components: {
    Snackbar,
  },
  data: () => ({
    //
  }),
  mounted: () => {},
  methods: {
    //...mapActions("user", ["logout"]),
    async onSignOut() {
      //this.logout();
      store.dispatch("user/logout");
    },
  },
};
</script>
