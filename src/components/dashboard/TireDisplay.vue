<template>
  <b-row>
    <b-col>
      <div class="dashboard-card">
        <div v-for="t in tires" :key="t._id">
            <b-badge v-if="t.winter" variant="primary" >Zimske</b-badge>
            <b-badge v-else variant="success" >Letne</b-badge>
          <span class="ml-2">{{ t.manufacturer }} {{ t.model || "" }}</span>
          
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    tires: {
      type: Array,
      required: true,
    },
  },
  computed: {
    
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