<template>
  
      <div class="dashboard-card">
        <div v-for="f in registrations" :key="f._id">
          <b-badge variant="warning">{{ f.date | niceDate }}</b-badge>
          <b-row>
            <b-col class="ml-3">
              <span>Velja do: </span>
              <b-badge variant="danger">{{ f.expiration | niceDate }}</b-badge>
              <br>
              <span>Cena: </span>
              <b-badge variant="success">{{ f.price }}€</b-badge>
            </b-col>
          </b-row>
        </div>
      </div>
    
</template>

<script>
export default {
  props: {
    registrations: {
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