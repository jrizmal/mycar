<template>
  <b-row>
    <b-col>
      <div class="dashboard-card">
        <div v-for="f in technicals" :key="f._id">
          <b-badge variant="primary">{{ f.vendor }}</b-badge>
          <b-row>
            <b-col class="ml-3">
              <span>Pregled opravljen: </span>
              <b-badge variant="primary">{{ f.date | niceDate }}</b-badge>
              <br>
              <span>Veljaven do: </span>
              <b-badge variant="warning">{{ f.expiration | niceDate }}</b-badge>
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
    technicals: {
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