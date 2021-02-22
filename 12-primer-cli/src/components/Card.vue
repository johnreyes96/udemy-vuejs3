<template>
  <div id="cards">
      <div class="card">
        <h4>{{ name }}</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio incidunt voluptatem eaque. Molestiae reiciendis eaque soluta accusamus, quia, voluptatem aliquid in assumenda maiores sunt sed earum libero qui quisquam praesentium.</p>
        <p><strong>Author</strong></p>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        name: String
    }
};
</script>

<style scoped>
.card {
    width: 250px;
    margin: 7px;
    border: solid 1px #eee;
    box-shadow: 1px 1px 4px #333;
    text-align: center;
}
</style>