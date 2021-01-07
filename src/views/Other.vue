<template>
  <page-container title="Drugo">
    <b-row>
      <b-col cols="12" sm="6" md="4">
        <b-row class="mb-3">
          <b-col>
            <b-row>
              <b-col cols="auto">
                <b-img style="width: 100px" rounded="circle" :src="auth.user.photoURL" alt="" />
              </b-col>
              <b-col>
                <h5>
                  {{ auth.user.displayName }}
                </h5>
                <p>
                  {{ auth.user.email }}
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button variant="danger" block @click="logout">Odjava</b-button>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col>
            <h5>Obvestila</h5>
            <p>
              Pridobivaj obvestila o poteku
              <b
                >zavarovanja, tehničnega pregleda, registracije in prve
                pomoči?</b
              >
            </p>
            <b-form-checkbox v-model="status">
              {{ (status ? "Da" : "Ne" ) }}
            </b-form-checkbox>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </page-container>
</template>

<script>
const firebase = require("firebase").default;
export default {
  data: () => {
    return {
      status: false
    };
  },
  methods: {
    async logout() {
      await firebase.auth().signOut();
      this.$store.dispatch("logOut");
    },
  },
  computed: {
    auth() {
      return this.$store.state;
    },
  },
};
</script>

<style>
</style>