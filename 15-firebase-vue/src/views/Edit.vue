<template>
  <div class="container">
      <div class="row">
          <router-link to="/proyectos" class="col s12 waves-effect waves-light btn amber darken-3">
            <i class="material-icons">arrow_back</i> Regresar a la lista
          </router-link>
      </div>
      <div class="row">
        <form @submit.prevent="createProject" class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <input v-model="project.title" id="first_name" type="text" class="validate">
                    <label for="first_name">Nombre del Proyecto</label>
                </div>
                <div class="input-field col s12">
                    <input v-model="project.description" id="last_name" type="text" class="validate">
                    <label for="last_name">Descripción del Proyecto</label>
                </div>
                <p>
                    <label>
                        <input v-model="project.langs" value="html" type="checkbox" checked="checked" />
                        <span>HTML</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input v-model="project.langs" value="css" type="checkbox" checked="checked" />
                        <span>CSS</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input v-model="project.langs" value="js" type="checkbox" checked="checked" />
                        <span>JavaScript</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input v-model="project.langs" value="vue" type="checkbox" checked="checked" />
                        <span>Vue</span>
                    </label>
                </p>
                <button class="btn waves-effect waves-light col s12" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                </button>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
        project: {
            title: "",
            description: "",
            langs: [],
            status: true
        }
    }),
    mounted() {
        this.getProject();
    },
    methods: {
        async getProject() {
            const id = this.$route.params.id;
            const res = await fetch(`https://crud-vue-2df48-default-rtdb.firebaseio.com/projects/${id}.json`);
            const data = await res.json();
            console.log(data);
        }
        // async createProject() {
        //     // console.log(this.project);
        //     await fetch("https://crud-vue-2df48-default-rtdb.firebaseio.com/projects.json", {
        //         method: "POST",
        //         body: JSON.stringify(this.project)
        //     });
        //     // const data = await res.json();
        //     // this.projects = data;
        //     // console.log(data);
        // }
    }
};
</script>