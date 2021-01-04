<template>
   <page-container title="Menjava prve pomoči">
    <b-row>
      <b-col sm="5">
        <b-form-group label="Izberi datum menjave">
          <b-form-datepicker v-model="data.date"></b-form-datepicker>
        </b-form-group>
      <b-form-group label="Vnesi ceno menjave">
        <b-form-input v-model="cost" placeholder="Vnesi ceno"></b-form-input>
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
        date: new Date().toISOString().substr(0, 10),
        cost: 0
      },
    };
  },
  methods: {
    saveData() {
      addFirstAid(this.data);
    },
  },
};
</script>

<style>

</style>