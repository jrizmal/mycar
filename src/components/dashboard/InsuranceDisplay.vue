<template>
  <b-row>
    <b-col>
      <div class="dashboard-card">
        <div v-for="f in insurances" :key="f._id">
          <b-badge variant="primary">{{ f.agency }}</b-badge>
          <b-row>
            <b-col class="ml-3">
              <span>Datum izteka: </span>
              <b-badge variant="warning">{{ f.expiration | niceDate }}</b-badge>
              <br>
              <span>Tip zavarovanja </span>
              <b-badge v-if="f.insurance_type == 1" variant="success" >AO</b-badge>
              <b-badge v-else-if="f.insurance_type == 2" variant="success" >AO+</b-badge>
              <b-badge v-else variant="success" >Kasko</b-badge>
              <br>
              <span>Cena: </span>
              <b-badge variant="primary">{{ f.price }}€</b-badge>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    insurances: {
      type: Array,
      required: true,
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