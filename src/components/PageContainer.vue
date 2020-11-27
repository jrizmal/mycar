<template>
  <div class="main-padding">
    <div class="md-layout">
      <div class="md-layout-item md-size-100 heading">
        <h1 class="heading">{{ title }}</h1>
      </div>
      <div class="md-layout md-size-100">
        <slot></slot>
      </div>
    </div>
  </div>
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

<style>
</style>