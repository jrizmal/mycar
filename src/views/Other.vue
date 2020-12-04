<template>
  <page-container title="Drugo">
    <p>Prijavljeni ste kot {{auth.user.displayName}}</p>
    <br>
    <md-button @click="logout" class="md-raised md-primary"
      >Odjavi se</md-button
    >
  </page-container>
</template>

<script>
const firebase = require("firebase").default;
export default {
  data: () => {
    return {};
  },
  methods: {
    async logout() {
      await firebase.auth().signOut();
      this.$store.dispatch("logOut");
    },
  },
  computed: {
    auth(){
      return this.$store.state
    }
  }
};
</script>

<style>
</style>