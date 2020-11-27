<template>
  <page-container title="Dodaj zapis">
    <div class="md-layout-item md-size-50 item-padding">
          <div @click="navigateTo('add_tires')" class="click-item">
            <img src="@/assets/icons/tire.svg" />

            <span>Gume</span>
          </div>
        </div>

        <div class="md-layout-item md-size-50 item-padding">
          <div @click="navigateTo('add_fuel')" class="click-item">
            <img src="@/assets/icons/pump.svg" />

            <span>Gorivo</span>
          </div>
        </div>

        <div class="md-layout-item md-size-50 item-padding">
          <div @click="navigateTo('add_firstaid')" class="click-item">
            <img src="@/assets/icons/first_aid.svg" />

            <span>Prva pomoč</span>
          </div>
        </div>

        <div class="md-layout-item md-size-50 item-padding">
          <div @click="navigateTo('add_service')" class="click-item">
            <img src="@/assets/icons/engine.svg" />

            <span>Servis</span>
          </div>
        </div>
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

<style>
</style>