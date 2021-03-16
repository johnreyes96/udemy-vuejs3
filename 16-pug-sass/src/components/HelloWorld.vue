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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
