<template>
  <a href="https://www.google.com" target="_blank" :class="setColor">Google</a>
</template>

<script>
export default {
  props: {
    color: String
  },
  computed: {
    setColor() {
      return this.color == "red" ? "btn btn-danger" : "btn btn-dark"
    }
  }
};
</script>

<style>

</style>