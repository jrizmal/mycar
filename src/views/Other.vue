<template>
  <page-container title="Drugo">

  </page-container>
</template>

<script>
export default {
  data: () => {
    return {
      other_items: [
        {
          title: "Gume",
          icon: "home",
          uri: "/",
        },
        {
          title: "Gorivo",
          icon: "home",
          uri: "/",
        },
        {
          title: "Tehnični pregled",
          icon: "home",
          uri: "/",
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

<style>
</style>