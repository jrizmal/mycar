<template>
  <page-container title="Informacije">
    <h3>Gorivo</h3>
    <FuelDisplay :fuelings="fuelings"></FuelDisplay>
    <h3>Gume</h3>
    <TireDisplay :tires="tires"></TireDisplay>
    <h3>Servisi</h3>
    <ServiceDisplay :services="services"></ServiceDisplay>
  </page-container>
</template>

<script>
import FuelDisplay from "../components/dashboard/FuelDisplay.vue";
import TireDisplay from "../components/dashboard/TireDisplay.vue";
import ServiceDisplay from "../components/dashboard/ServiceDisplay.vue";
const { getFuelings, getTires, getServices } = require("../services/items");
export default {
  components: {
    FuelDisplay: FuelDisplay,
    TireDisplay: TireDisplay,
    ServiceDisplay: ServiceDisplay,
  },
  data: () => {
    return {
      fuelings: [],
      tires: [],
      services: [],
    };
  },
  async mounted() {
    getFuelings().then((res) => {
      this.fuelings = res.data;
    });
    getTires().then((res) => {
      this.tires = res.data;
    });
    getServices().then(res=>{
      this.services = res.data
    })
  },
};
</script>
