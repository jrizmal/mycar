<template>
  <page-container title="Tankanje">
    <div class="input-container md-layout-item md-size-100">
      <md-field>
        <label>Količina (L)</label>
        <md-input type="number" v-model="data.amount"></md-input>
      </md-field>
    </div>

    <div class="input-container md-layout-item md-size-100">
      <md-field>
        <label>Cena (€)</label>
        <md-input type="number" v-model="data.price"></md-input>
      </md-field>
    </div>

    <div class="input-container md-layout-item md-size-100">
      <md-field>
        <label>Kilometri na števcu</label>
        <md-input type="number" v-model="data.kilometers"></md-input>
      </md-field>
    </div>
    <md-button @click="saveData" class="md-raised md-primary">Dodaj</md-button>
  </page-container>
</template>

<script>
const axios = require('axios').default
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
    saveData(){
      axios.post('fuel',this.data).then(res=>{
        console.log(res.data);
      })
    }
  }
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