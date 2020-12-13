<template>
  <page-container title="Tankanje">
    <b-row>
      <b-col>
        <b-form-group label="Količina">
          <b-input-group append="litrov">
            <b-form-input
              v-model="data.amount"
              trim
              type="number"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group label="Cena">
          <b-input-group append="€">
            <b-form-input
              v-model="data.price"
              trim
              type="number"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group label="Kilometri na števcu">
          <b-input-group append="km">
            <b-form-input
              v-model="data.kilometers"
              trim
              type="number"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button variant="success" block @click="saveData">Dodaj</b-button>
      </b-col>
    </b-row>
  </page-container>
</template>

<script>
import { addFueling } from "../../services/items";
const axios = require("axios").default;
export default {
  data() {
    return {
      data: {
        kilometers: 0,
        amount: 0,
        price: 0,
      },
    };
  },
  methods: {
    saveData() {
      addFueling(this.data);
    },
  },
};
</script>

<style>
.input-container {
  background-color: white;
  border-radius: 20px;
  padding: 5px 15px 0px 15px;
  margin-bottom: 10px;
}
</style>