<template>
  <page-container title="Informacije" class="mb-5">
    <div class="masonry-container">
      <div v-if="allEmpty" class="masonry-item">
        <div>
          <h4>Nimate še zapisov. <b-button variant="success" @click="goToAdd">Dodajte jih</b-button></h4>
        </div>
      </div>
      <div v-if="fuelings.length > 0" class="masonry-item">
        <div>
          <h3>Gorivo</h3>
          <FuelDisplay :fuelings="fuelings"></FuelDisplay>
        </div>
      </div>
      <div v-if="tires.length > 0" class="masonry-item">
        <div>
          <h3>Gume</h3>
          <TireDisplay :tires="tires"></TireDisplay>
        </div>
      </div>
      <div v-if="services.length > 0" class="masonry-item">
        <div>
          <h3>Servisi</h3>
          <ServiceDisplay :services="services"></ServiceDisplay>
        </div>
      </div>
      <div v-if="firstaids.length > 0" class="masonry-item">
        <div>
          <h3>Prva Pomoč</h3>
          <FirstAidDisplay :firstaids="firstaids"></FirstAidDisplay>
        </div>
      </div>
      <div v-if="registrations.length > 0" class="masonry-item">
        <div>
          <h3>Registracija</h3>
          <RegistrationDisplay
            :registrations="registrations"
          ></RegistrationDisplay>
        </div>
      </div>
      <div v-if="insurances.length > 0" class="masonry-item">
        <div>
          <h3>Zavarovanje</h3>
          <InsuranceDisplay :insurances="insurances"></InsuranceDisplay>
        </div>
      </div>
      <div v-if="technicals.length > 0" class="masonry-item">
        <div>
          <h3>Tehnični</h3>
          <TechnicalDisplay :technicals="technicals"></TechnicalDisplay>
        </div>
      </div>
    </div>
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
const {
  getFuelings,
  getTires,
  getServices,
  getFirstAid,
  getTechnical,
  getInsurance,
  getRegistration,
} = require("../services/items");
export default {
  components: {
    FuelDisplay: FuelDisplay,
    TireDisplay: TireDisplay,
    ServiceDisplay: ServiceDisplay,
    FirstAidDisplay: FirstAidDisplay,
    TechnicalDisplay: TechnicalDisplay,
    InsuranceDisplay: InsuranceDisplay,
    RegistrationDisplay: RegistrationDisplay,
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
    getServices().then((res) => {
      this.services = res.data;
    });
    getFirstAid().then((res) => {
      this.firstaids = res.data;
    });
    getRegistration().then((res) => {
      this.registrations = res.data;
    });
    getFirstAid().then((res) => {
      this.firstaids = res.data;
    });
    getInsurance().then((res) => {
      this.insurances = res.data;
    });
    getTechnical().then((res) => {
      this.technicals = res.data;
    });
    getRegistration().then((res) => {
      this.registrations = res.data;
    });
  },
  computed: {
    allEmpty(){
      return this.fuelings.length <= 0
      && this.tires.length <= 0
      && this.services.length <= 0
      && this.firstaids.length <= 0
      && this.technicals.length <= 0
      && this.insurances.length <= 0
      && this.registrations.length <= 0
    }
  },
  methods: {
    goToAdd(){
      this.$router.push("/add")
    }
  }
};
</script>
