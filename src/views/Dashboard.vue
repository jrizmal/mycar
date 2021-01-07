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
    <h3>Zavarovanje</h3>
    <InsuranceDisplay :insurances="insurances"></InsuranceDisplay>
    <h3>Tehnični pregledi</h3>
    <TechnicalDisplay :technicals="technicals"></TechnicalDisplay>
    <h3>Registracija</h3>
    <RegistrationDisplay :registrations="registrations"></RegistrationDisplay>
  </page-container>
</template>

<script>
import FuelDisplay from "../components/dashboard/FuelDisplay.vue";
import TireDisplay from "../components/dashboard/TireDisplay.vue";
import ServiceDisplay from "../components/dashboard/ServiceDisplay.vue";
import FirstAidDisplay from "../components/dashboard/FirstAidDisplay.vue";
import TechnicalDisplay from "../components/dashboard/TechnicalDisplay.vue";
import InsuranceDisplay from "../components/dashboard/InsuranceDisplay.vue";
import RegistrationDisplay from "../components/dashboard/RegistrationDisplay.vue";
const { getFuelings, getTires, getServices, getFirstAid, getTechnical, getInsurance, getRegistration} = require("../services/items");
export default {
  components: {
    FuelDisplay: FuelDisplay,
    TireDisplay: TireDisplay,
    ServiceDisplay: ServiceDisplay,
    FirstAidDisplay: FirstAidDisplay,
    TechnicalDisplay: TechnicalDisplay,
    InsuranceDisplay: InsuranceDisplay,
    RegistrationDisplay : RegistrationDisplay
  },
  data: () => {
    return {
      fuelings: [],
      tires: [],
      services: [],
      firstaids: [],
      technicals: [],
      insurances: [],
      registrations: [],
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
    getInsurance().then(res=>{
      this.insurances = res.data
    })
    getTechnical().then(res=>{
      this.technicals = res.data
    })
    getRegistration().then(res=>{
      this.registrations = res.data
    })
  },
  computed: {

  }
};
</script>
