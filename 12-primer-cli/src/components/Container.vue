<template>
  <div id="container" class="container">
      <h2>Proyectos</h2>
      <hr>
      <div id="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
  </div>
</template>

<script>
import Card from './Card';

export default {
  components: {
    Card
  }
}
</script>

<style scoped>
#cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.container {
  overflow: hidden;
  margin: 1rem;
  padding: 7px;
  border: solid 1px #eee;
  box-shadow: 1px 1px 4px #333;
  text-align: center;
}
</style>