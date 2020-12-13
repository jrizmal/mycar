<template>
  <page-container title="Prijava">
    <b-row>
      <b-col>
        <b-button @click="googleLogin">
          Google Prijava
        </b-button>
      </b-col>
    </b-row>
    
  </page-container>
</template>

<script>
const firebase = require("firebase").default;
export default {
  data() {
    return {};
  },
  methods: {
    async googleLogin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          if (res.credential) {
            this.$store.dispatch("logIn", {
              user: res.user,
              token: res.credential.accessToken,
            });
            this.$router.replace("/");
            this.$toasted.success(`Pozdravljeni ${res.user.displayName}!`)
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style>
</style>