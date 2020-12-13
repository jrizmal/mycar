<template>
  <page-container title="Menjava gum">
    <b-row>
      <b-col>
        <b-form-group label="Proizvajalec">
          <b-input-group>
            <b-form-input v-model="data.manufacturer" trim></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group label="Model">
          <b-input-group>
            <b-form-input v-model="data.model" trim></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      
      <b-col>
        <b-form-group label="Sezona">
          <b-form-select
            v-model="data.winter"
            :options="season_options"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group label="Cena">
          <b-input-group append="€">
            <b-form-input v-model="data.price" trim></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button block @click="addTires" variant="success">Dodaj</b-button>
      </b-col>
    </b-row>
  </page-container>
</template>

<script>
import { addTires } from '../../services/items';
export default {
  data() {
    return {
      data: {
        manufacturer: null,
        kilometers: 0,
        price: 0,
        winter: false,
        model: null,
      },
      season_options: [
        { text: "Zimske", value: true },
        { text: "Letne", value: false },
      ],
    };
  },
  methods: {
    addTires(){
      addTires(this.data).then(res=>{
        this.$toasted.success("Gume dodane")
      })
    }
  }
};
</script>

<style>
</style>