<template>
  <b-row>
    <b-col>
      <div class="dashboard-card">
        <div v-for="f in firstaids" :key="f._id">
          <b-badge variant="success">{{ f.date | niceDate }}</b-badge>
          <br>
          <b-badge variant="danger">{{ f.expiration | niceDate }}</b-badge>
          <span class="mr-2">{{ f.price }}€</span>
          <p></p>
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