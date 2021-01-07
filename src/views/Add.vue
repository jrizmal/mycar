<template>
  <page-container title="Dodaj zapis">
    <b-row class="button-wrapper">
      <b-col xs="6" md="3">
        <div @click="navigateTo('add_tires')" class="click-item">
          <img src="@/assets/icons/tire.svg" />

          <span>Gume</span>
        </div>
      </b-col>
      <b-col xs="6" md="3">
        <div @click="navigateTo('add_fuel')" class="click-item">
          <img src="@/assets/icons/pump.svg" />

          <span>Gorivo</span>
        </div>
      </b-col>
      <b-col xs="6" md="3">
        <div @click="navigateTo('add_firstaid')" class="click-item">
          <img src="@/assets/icons/first_aid.svg" />

          <span>Prva pomoč</span>
        </div>
      </b-col>
      <b-col xs="6" md="3">
        <div @click="navigateTo('add_service')" class="click-item">
          <img src="@/assets/icons/engine.svg" />

          <span>Servis</span>
        </div>
      </b-col>
      <b-col xs="6" md="3">
        <div @click="navigateTo('add_registration')" class="click-item">
          <img src="@/assets/icons/engine.svg" />

          <span>Registracija</span>
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
.button-wrapper > div{
  margin-bottom: 20px;
}
</style>