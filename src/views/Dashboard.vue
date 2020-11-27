<template>
<page-container title="Informacije">
<div
          v-for="item in dashboard_items"
          :key="item.title"
          class="md-layout-item md-size-100 dashboard-item-padding"
        >
          <div @click="navigateTo(item.uri)" class="click-item">
            <md-icon class="item-icon md-size-3x">{{ item.icon }}</md-icon>
            <br />
            {{ item.title }}
          </div>
        </div>
</page-container>
  
</template>

<script>
export default {
  data: () => {
    return {
      dashboard_items: [
        {
          title: "Gume",
          icon: "home",
          uri: "/other",
        },
        {
          title: "Gorivo",
          icon: "home",
          uri: "/other",
        },
        {
          title: "Tehnični pregled",
          icon: "home",
          uri: "/other",
        },
      ],
    };
  },
  methods: {
    navigateTo(uri) {
      this.$router.push(uri);
    },
  },
};
</script>
