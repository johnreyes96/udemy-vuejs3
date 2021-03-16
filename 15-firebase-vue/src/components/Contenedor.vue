<template>
  <div class="row">
    <div class="col s12 m7">
      <card-project v-for="(project, i) in projects" :key="i" :data="project" />
    </div>
  </div>
</template>

<script>
import CardProject from './CardProject.vue';

export default {
  data: () => ({
    projects: []
  }),
  components: { CardProject },
  mounted() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);

      const res = await fetch(`https://crud-vue-2df48-default-rtdb.firebaseio.com/projects.json?auth=${user.idToken}`);
      const data = await res.json();
      for (let i in data) {
        this.projects.push({
          id: i,
          data: data[i]
        });
      }
      // console.log(this.projects);
    }
  }
};
</script>