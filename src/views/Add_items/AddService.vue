<template>
  <page-container title="Nov servis">
    <b-row>
      <b-col>
        <b-form-group label="Ime izvajalca">
          <b-input-group>
            <b-form-input v-model="data.vendor" trim></b-form-input>
          </b-input-group>
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
        <b-form-group label="Stvari">
          <b-input-group v-for="(i, index) in data.items" :key="index">
            <b-form-input v-model="data.items[index]" trim></b-form-input>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button @click="addItemToList">Dodaj stvar</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button variant="success" @click="saveService" block>Shrani servis</b-button>
      </b-col>
    </b-row>
  </page-container>
</template>

<script>
import { addService } from '../../services/items';
export default {
  data() {
    return {
      data: {
        vendor: null,
        price: 0,
        items: [""],
      },
    };
  },
  methods: {
    addItemToList(){
      this.data.items.push("")
    },
    saveService(){
      const obj = Object.assign({},this.data)
      addService(obj).then(res=>{
        this.$toasted.success("Servis shranjen")
      })
    }
  }
};
</script>

<style>
</style>