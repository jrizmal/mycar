<template>
  <div class="main-padding">
    <div class="md-layout">
      <div class="md-layout-item md-size-100 heading">
        <h1 class="heading">Dodaj zapis</h1>
      </div>
      <div class="md-layout md-size-100">
        <div v-for="item in add_items" :key="item.title" class="md-layout-item md-size-50 item-padding">
          <div @click="navigateTo(item.uri)" class="click-item">
            <md-icon  class="item-icon md-size-3x">{{ item.icon }}</md-icon>
            <br>
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      add_items: [
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
    navigateTo(uri){
      this.$router.push(uri)
    }
  }
};
</script>

<style>

</style>