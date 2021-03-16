<template lang="pug">
div
  h1 {{ title }}
  ul
    li(v-for="(persona, i) in personas" :key="i") {{ persona }}
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    title: "Mensaje desde Vue",
    personas: ["John", "Diana", "Dulce"]
  }),
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$primary: #981263;

h1 {
  color: $primary;
}
</style>
