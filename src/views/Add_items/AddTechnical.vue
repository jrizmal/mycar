<template>
   <page-container title="Opravljanje tehničnega pregleda">
    <b-row>
      <b-col sm="5">
        <b-form-group label="Izvajalec pregleda">
          <b-form-input v-model="data.vendor"></b-form-input>
        </b-form-group>
        <b-form-group label="Datum pregleda">
          <b-form-datepicker v-model="data.date"></b-form-datepicker>
        </b-form-group>
        <b-form-group label="Datum veljavnosti">
          <b-form-datepicker v-model="data.expiration"></b-form-datepicker>
        </b-form-group>
        <b-form-group label="Cena pregleda">
          <b-form-input v-model="data.price" placeholder="Vnesi ceno"></b-form-input>
        </b-form-group>
        <b-button @click="saveTechnical" variant="success">Dodaj</b-button>
      </b-col>
    </b-row>
  </page-container>
</template>

<script>
import { addTechnical } from "../../services/items";
export default {
  data() {
    return {
      data: {
        vendor: "",
        date: new Date(),
        price: 0,
        expiration: new Date(),
      },
    };
  },
  methods: {
    saveTechnical() {
      addTechnical(this.data).then(res=>{
        this.$toasted.success("Tehnični pregled dodan")
        this.$router.push("/dashboard")
      });
    },
  },
};
</script>

<style>

</style>