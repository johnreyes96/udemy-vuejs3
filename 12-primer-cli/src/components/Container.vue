<template>
  <div id="container" class="container">
      <h2>Proyectos</h2>
      <hr>
      <div v-for="project in projects" :key="project.id" id="cards">
        <Card :name="project.name" />
      </div>
  </div>
</template>

<script>
import Card from './Card';

export default {
  data: () => ({
    projects: null
  }),
  components: {
    Card
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      const res = await fetch("https://api.github.com/users/johnreyes96/repos");
      const data = await res.json();
      this.projects = data;
      console.log(data);
    }
  }
};
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