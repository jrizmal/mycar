<template>
  <page-container title="Tankanje">
    <div class="input-container md-layout-item md-size-100">
      <md-field>
        <label>Količina (litri)</label>
        <md-input type="number" v-model="amount"></md-input>
      </md-field>
    </div>
    
    <div class="input-container md-layout-item md-size-100">
      <md-field>
        <label>Kilometri na števcu</label>
        <md-input type="number" v-model="kilometers"></md-input>
      </md-field>
    </div>
    <md-button class="md-raised md-primary">Primary</md-button>
  </page-container>
</template>

<script>
export default {
  data() {
    return {
      kilometers: 0,
      amount: 0,
    };
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