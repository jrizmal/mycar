<template>
  <page-container title="Drugo">
    <b-row>
      <b-col cols="12" sm="6" md="4">
        <b-row class="mb-3">
          <b-col>
            <b-row>
              <b-col cols="auto">
                <b-img
                  style="width: 100px"
                  rounded="circle"
                  :src="auth.user.photoURL"
                  alt=""
                />
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
            <b-button
              v-if="!status"
              variant="success"
              block
              @click="enableNotifications"
              >Omogoči</b-button
            >
            <b-button
              v-else
              variant="danger"
              block
              @click="disableNotifications"
              >Onemogoči</b-button
            >
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </page-container>
</template>

<script>
const firebase = require("firebase").default;
import { messaging } from "../services/auth";
import axios from "axios";

export default {
  data: () => {
    return {
      status: false,
      settingStatus: false,
    };
  },
  methods: {
    async logout() {
      await firebase.auth().signOut();
      this.$store.dispatch("logOut");
    },
    enableNotifications() {
      messaging
        .getToken({
          vapidKey:
            "BK1Z0In5dRj5Bnod1zU-O3-FgexqVzFpcqoRv38mdC6zTSJMALddq83PIYaxrKvnn-48RnNUG7NJp4d8KciUelc",
        })
        .then((token) => {
          /* Save token to api */
          axios
            .post("/settoken", {
              token: token,
            })
            .then((res) => {
              this.fetchUser()
              this.$toasted.success("Obvestila omogočena");
            });
        });
    },
    disableNotifications() {
      axios.post("/unsettoken").then((res) => {
        this.fetchUser()
        this.$toasted.success("Obvestila onemogočena");
      });
    },
    fetchUser() {
      axios.get("/getuser").then((res) => {
        const user = res.data;
        this.status = user.notifications;
      });
    },
  },
  computed: {
    auth() {
      return this.$store.state;
    },
  },
  mounted() {
    this.fetchUser();
  },
};
</script>

<style>
</style>