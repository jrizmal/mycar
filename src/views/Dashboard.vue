<template>
  <page-container title="Informacije">
    <h3>Gorivo</h3>
    <div
      v-for="f in fuelings"
      :key="f._id"
      class="md-layout-item md-size-100 dashboard-item-padding"
    >
      <div class="click-item">
        <span>Kilometri na števcu: {{ f.kilometers }}</span> <br>
        <span>Količina: {{ f.amount }}</span> <br>
        <span>Datum: {{ getNiceDate(f.date) }}</span> <br>
        <span>Cena: {{ f.price }}</span> <br>
        
      </div>
    </div>
    <p>Skupaj: {{fuelTotal}}€</p>
  </page-container>
</template>

<script>
const axios = require("axios").default;
export default {
  data: () => {
    return {
      fuelings: [],
    };
  },
  computed: {
    fuelTotal(){
      let sum=0
      this.fuelings.forEach(el=>{
        sum+=el.price
      })
      return sum.toFixed(2)
    }
  },
  methods: {
    navigateTo(uri) {
      this.$router.push(uri);
    },
    getNiceDate(dateString){
      const date = new Date(dateString)
      return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
    }
  },
  mounted() {
    axios.get("fuel").then((res) => {
      this.fuelings = res.data;
    });
  },
};
</script>
