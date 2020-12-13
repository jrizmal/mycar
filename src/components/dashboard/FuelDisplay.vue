<template>
  <b-row>
    <b-col>
      <div class="dashboard-card">
        <div v-for="f in fuelings" :key="f._id">
          <span class="mr-2">{{ f.date | niceDate }}</span>
          <b-badge variant="success">{{ f.amount }}L</b-badge>
        </div>
        <span><b>Skupaj: {{ fuelTotal }}€</b></span>
      </div>
    </b-col>
  </b-row>
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