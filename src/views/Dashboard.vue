<template>
  <page-container title="Informacije" class="mb-5">
    <h3>Gorivo</h3>
    <FuelDisplay :fuelings="fuelings"></FuelDisplay>
    <h3>Gume</h3>
    <TireDisplay :tires="tires"></TireDisplay>
    <h3>Servisi</h3>
    <ServiceDisplay :services="services"></ServiceDisplay>
    <h3>Prva Pomoč</h3>
    <FirstAidDisplay :firstaids="firstaids"></FirstAidDisplay>
  </page-container>
</template>

<script>
import FuelDisplay from "../components/dashboard/FuelDisplay.vue";
import TireDisplay from "../components/dashboard/TireDisplay.vue";
import ServiceDisplay from "../components/dashboard/ServiceDisplay.vue";
import FirstAidDisplay from "../components/dashboard/FirstAidDisplay.vue";
const { getFuelings, getTires, getServices, getFirstAid } = require("../services/items");
export default {
  components: {
    FuelDisplay: FuelDisplay,
    TireDisplay: TireDisplay,
    ServiceDisplay: ServiceDisplay,
    FirstAidDisplay: FirstAidDisplay,
  },
  data: () => {
    return {
      fuelings: [],
      tires: [],
      services: [],
      firstaids: [],
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
    });
    getFirstAid().then(res=>{
      this.firstaids = res.data
    })
  },
  computed: {

  }
};
</script>
