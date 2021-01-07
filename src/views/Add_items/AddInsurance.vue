<template>
   <page-container title="Zavarovanje">
    <b-row>
      <b-col sm="5">
        <b-form-group label="Agencija">
          <b-form-input v-model="data.agency" placeholder="Vnesi agencijo"></b-form-input>
        </b-form-group>
        <b-form-select
            v-model="data.insurance_type"
            :options="insurance_type_options"
        ></b-form-select>
        <b-form-group label="Datum zavarovanja">
          <b-form-datepicker v-model="data.date"></b-form-datepicker>
        </b-form-group>
        <b-form-group label="Datum veljavnosti">
          <b-form-datepicker v-model="data.expiration"></b-form-datepicker>
        </b-form-group>
        <b-form-group label="Cena">
          <b-form-input v-model="data.price" placeholder="Vnesi ceno"></b-form-input>
        </b-form-group>
        <b-button @click="saveInsurance" variant="success">Dodaj</b-button>
      </b-col>
    </b-row>
  </page-container>
</template>
<script>
import { addInsurance } from "../../services/items";
export default {
  data() {
    return {
      data: {
        date: new Date(),
        price: 0,
        expiration: new Date(),
        agency: "",
        insurance_type: 0
      },
      insurance_type_options: [
        { text: "AO", value: 1 },
        { text: "AO+", value: 2 },
        { text: "Kasko", value: 3 },
      ],
    };
  },
  methods: {
    saveInsurance() {
      addInsurance(this.data).then(res=>{
        this.$toasted.success("Zavarovanje dodano")
        this.$router.push("/dashboard")
      });
    },
  },
};
</script>

<style>

</style>