<template lang="pug">
div
  h1 Tabulado
  p lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    span este es un span
    |Esto es mas parrafo.
  span.personal Otro span
  p#segundo esto es un parrafo con ID
  p.colores#tam Parrafo con ID y class
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
span {
  color: blue;
}
.personal {
  color: orange;
}
#segundo {
  color: red;
}
.colores{
  color: green;
}
#tam{
  font-weight: bolder;
}
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
