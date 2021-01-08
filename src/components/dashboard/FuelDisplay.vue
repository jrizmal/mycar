<template>
  
      <div class="dashboard-card">
        <div v-for="f in fuelings" :key="f._id">
          <b-badge variant="success">{{ f.date | niceDate }}</b-badge>
          <span class="mr-2"> {{ f.amount }} L</span>
        </div>
        <div class="mt-3">
        <span ><b>Skupaj: {{ fuelTotal }}€</b></span>

        </div>
      </div>
    
</template>

<script>
export default {
  props: {
    fuelings: {
      type: Array,
      required: true,
    },
  },
  computed: {
    fuelTotal() {
      let sum = 0;
      this.fuelings.forEach((el) => {
        sum += el.price;
      });
      return sum.toFixed(2);
    },
  },
  methods: {},
  filters: {
    niceDate(dateString) {
      const date = new Date(dateString);
      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    },
  },
};
</script>

<style>
</style>