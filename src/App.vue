<template>
  <div class="main-container">
    <div v-if="auth.isLoggedIn" class="flex-content">
      <router-view />
    </div>
    <div v-else class="flex-content">
      <page-container title="Prijava">
        <div class="md-layout-item md-size-100">
          <p>Za uporabo aplikacije se morate najprej prijaviti.</p>
        </div>

        <div class="md-layout-item md-size-100">
          <md-button @click="googleLogin" class="md-raised md-primary"
            >Google prijava</md-button
          >
        </div>
        <div class="md-layout-item md-size-100">
          <p>myCar 2020</p>
        </div>
      </page-container>
    </div>
    <div v-if="auth.isLoggedIn" class="flex-navigation">
      <md-bottom-bar
        md-type="shift"
        class="md-primary"
        :md-active-item="activeItem"
      >
        <md-bottom-bar-item
          id="menu-add"
          to="/add"
          exact
          md-label="Add"
          md-icon="add"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          id="menu-dashboard"
          to="/dashboard"
          md-label="Dashboard"
          md-icon="info"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          id="menu-other"
          to="/other"
          md-label="Drugo"
          md-icon="settings"
        ></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
const firebase = require("firebase").default;
export default {
  computed: {
    activeItem() {
      const path = this.$route.path;
      if (path.startsWith("/add")) {
        return "menu-add";
      }
      if (path.startsWith("/other")) {
        return "menu-other";
      }
      if (path.startsWith("/dashboard")) {
        return "menu-dashboard";
      }
      return null;
    },
    auth() {
      return this.$store.state;
    },
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
            // this.$router.replace("/");
            this.$toasted.success(`Pozdravljeni ${res.user.displayName}!`);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #828282;
  color: white;
}
.flex-content {
  overflow: auto;
  flex: 1 1 auto;
  align-self: stretch;
}
.flex-navigation {
  display: inline-flex;
  align-items: flex-end;
  /* border: 1px solid rgba(#000, 0.26);
  background: rgba(#000, 0.06); */
}
</style>

