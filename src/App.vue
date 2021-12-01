<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn v-if="session" @click="onSignOut">Sign out</v-btn>
      <div v-if="session">{{}}</div>
    </v-app-bar>

    <v-main>
      <router-view />
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "./components/general/Snackbar.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Snackbar,
  },
  data: () => ({
  }),
  mounted: () => {

  },
  computed: {
    ...mapGetters("user", ["session"]),
  },
  methods: {
    ...mapActions("user", ["logout"]),
    async onSignOut() {
      this.logout();
    },
  },
};
</script>
