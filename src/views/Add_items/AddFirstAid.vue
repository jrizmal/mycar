<template>
   <page-container title="Menjava prve pomoči">
    <b-row>
      <b-col sm="5">
        <b-form-group label="Datum menjave">
          <b-form-datepicker v-model="data.date"></b-form-datepicker>
        </b-form-group>
        <b-form-group label="Rok uporabe">
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
import { addFirstAid } from "../../services/items";
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
      addFirstAid(this.data).then(res=>{
        this.$toasted.success("Prva pomoč dodana")
        this.$router.push("/dashboard")
      });
    },
  },
};
</script>

<style>

</style>