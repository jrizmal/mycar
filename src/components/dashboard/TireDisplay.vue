<template>
  <div class="dashboard-card">
    <div v-for="t in tires" :key="t._id" >
      <b-badge v-if="t.winter" variant="primary">Zimske</b-badge>
      <b-badge v-else variant="warning">Letne</b-badge>
      <b-col class="ml-3">
        <span>Proizvajalec: </span>
        <b-badge variant="">{{ t.manufacturer }}</b-badge>
        <br />
        <span>Model: </span>
        <b-badge variant="">{{ t.model }}</b-badge>
        <br />
        <span>Cena: </span>
        <b-badge variant="success">{{ t.price }}€</b-badge>
      </b-col>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tires: {
      type: Array,
      required: true,
    },
  },
  computed: {},
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