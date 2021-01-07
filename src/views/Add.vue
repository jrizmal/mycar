<template>
  <page-container title="Dodaj zapis">
    <b-row class="button-wrapper">
      <b-col cols="6" sm="6" md="3">
        <div @click="navigateTo('add_tires')" class="click-item">
          <img src="@/assets/icons/tire.svg" />
          <h3>Gume</h3>
        </div>
      </b-col>
      <b-col cols="6" md="3" sm="6">
        <div @click="navigateTo('add_fuel')" class="click-item">
          <img src="@/assets/icons/pump.svg" />
          <h3>Gorivo</h3>
        </div>
      </b-col>
      <b-col cols="6" md="3" sm="6">
        <div @click="navigateTo('add_firstaid')" class="click-item">
          <img src="@/assets/icons/first_aid.svg" />
          <h3>Prva pomoč</h3>
        </div>
      </b-col>
      <b-col cols="6" md="3">
        <div @click="navigateTo('add_service')" class="click-item">
          <img src="@/assets/icons/engine.svg" />
          <h3>Servis</h3>
        </div>
      </b-col>
      <b-col cols="6" md="3">
        <div @click="navigateTo('add_registration')" class="click-item">
          <img src="@/assets/icons/engine.svg" />
          <h3>Registracija</h3>
        </div>
      </b-col>
    </b-row>
  </page-container>
</template>

<script>
export default {
  data: () => {
    return {
      showDialog: true,
    };
  },
  methods: {
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    },
  },
};
</script>

<style scoped>
.button-wrapper > div {
  margin-bottom: 30px;
}
.click-item > img{
  width: 100%;
  margin-bottom: 30px;
opacity: 0.5;
}
/* .click-item {
  padding: 50px !important;
} */

</style>