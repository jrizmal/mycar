<template>
  <div class="main-container">
    <div v-if="auth.isLoggedIn" class="flex-content">
      <router-view />
    </div>
    <page-container v-if="!auth.isLoggedIn && introPassed" title="Prijava">
      <b-row>
        <b-col>
          <p>Za uporabo aplikacije se morate najprej prijaviti.</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button @click="googleLogin" block variant="success">
            Google Prijava
          </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>myCar 2020</p>
        </b-col>
      </b-row>
    </page-container>
    <div class="splash-screen" v-if="!auth.isLoggedIn && !introPassed">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p>
        <img
        src="@/assets/logo.png"
        />
      </p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
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
  data(){
    return {
      introPassed: false,
    }
  },
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
      this.$store.dispatch("logIn").then((res) => {
        this.$toasted.success(`Pozdravljeni`);
      });
      /* var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          if (res.credential) {
            this.$store.dispatch("logIn", {
              user: res.user,
              token: res.credential.accessToken,
            });
            this.$toasted.success(`Pozdravljeni ${res.user.displayName}!`);
          }
        })
        .catch((err) => {
          console.error(err);
        }); */
    },
  },
  mounted() {
    const messaging = firebase.messaging();
    messaging.onMessage((payload)=>{
      // console.log(payload);
    })
    setTimeout(()=>{
      this.introPassed = true;
    },700)
  },
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
.splash-screen{
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  background-color: black;
}
</style>

