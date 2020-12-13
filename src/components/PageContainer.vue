<template>
  <b-container>
    <b-row>
      <b-col id="heading">
        <h1 class="heading">{{ title }}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <slot></slot>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
#heading {
  margin: 10px 0 10px 0;
}
</style>