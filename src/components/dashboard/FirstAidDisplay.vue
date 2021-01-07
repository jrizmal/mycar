<template>
  <b-row>
    <b-col>
      <div class="dashboard-card">
        <div v-for="f in firstaids" :key="f._id">
          <b-badge variant="primary">{{ f.date | niceDate }}</b-badge>
          <b-row>
            <b-col class="ml-3">
              <span>Rok uporabe: </span>
              <b-badge variant="warning">{{ f.expiration | niceDate }}</b-badge>
              <br>
              <span>Cena: </span>
              <b-badge variant="success">{{ f.price }}€</b-badge>
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
    firstaids: {
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