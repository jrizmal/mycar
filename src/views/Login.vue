<template>
  <page-container title="Dobrodošli">
    <b-row>
      <b-col cols="12" sm="6" md="4">
        <b-row>
          <b-col>
            <p>Pred začetkom vas prosimo, da se <b>prijavite.</b></p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button block variant="success" @click="googleLogin">
              Google Prijava
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <!-- <b-row>
      <b-col>
        <p>
          {{ new Date().getFullYear() }}, Ekipa myCar
        </p>
      </b-col>
    </b-row> -->
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
      this.$store.dispatch("logIn").then((res) => {
        this.$toasted.success(`Pozdravljeni`);
      });
    },
  },
};
</script>

<style>
</style>