<template>
  <div class="container">
      <div class="row">
        <form class="col s12">
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
    {{project}}
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
    })
};
</script>