<template>
   <page-container title="Dodaj registracijo">
    <b-row>
      <b-col sm="5">
        <b-form-group label="Datum registracije">
          <b-form-datepicker v-model="data.date"></b-form-datepicker>
        </b-form-group>
        <b-form-group label="Velja do">
          <b-form-datepicker v-model="data.expiration"></b-form-datepicker>
        </b-form-group>
        <b-form-group label="Cena">
          <b-form-input v-model="data.price"></b-form-input>
        </b-form-group>
        <b-button @click="saveData" variant="success">Dodaj</b-button>
      </b-col>
    </b-row>
  </page-container>
</template>

<script>
import { addRegistration } from "../../services/items";
export default {
  data() {
    return {
      data: {
        date: new Date(),
        price: 0,
        expiration: new Date(),
      },
    };
  },
  methods: {
    saveData() {
      addRegistration(this.data).then(res=>{
        this.$toasted.success("Registracija dodana")
        this.$router.push("/dashboard")
      });
    },
  },
};
</script>

<style>

</style>