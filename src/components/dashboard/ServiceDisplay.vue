<template>
  
      <div class="dashboard-card">
        <div v-for="s in services" :key="s._id">
          <b-badge variant="warning">{{ s.date | niceDate }}</b-badge> - <b-badge  variant="">{{ s.vendor }}</b-badge>
          <div>
            Zamenjano:
          </div>
          <ul>
              <li v-for="(i, index) in s.items" :key="index">{{ i }}</li>
              Cena:
              <b-badge  variant="success">{{ s.price }}€</b-badge>
          </ul>
        </div>
      </div>
    
</template>

<script>
export default {
  props: {
    services: {
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