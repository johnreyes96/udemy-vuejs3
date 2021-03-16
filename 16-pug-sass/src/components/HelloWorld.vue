<template lang="pug">
div
  h1 Atributos
  img.imagen.marco(src="https://cdn.pixabay.com/photo/2020/12/13/16/21/stork-5828727_960_720.jpg" width="500", height="400")
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
.imagen.marco {
  border: 1em solid green;
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
