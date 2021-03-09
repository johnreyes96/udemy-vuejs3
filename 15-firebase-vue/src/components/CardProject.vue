<template>
  <div class="card horizontal">
    <div class="card-stacked">
      <div class="card-content">
        <span class="card-title">{{ data.title }}</span>
          <p>{{ data.description }} </p>
          <p>Tecnologías: {{ data.langs }} </p>
      </div>
      <div class="card-action">
        <div class="row">
          <router-link to="/reg-projects" class="col s6 waves-effect waves-light btn amber darken-3">
            <i class="material-icons">edit</i>
          </router-link>
          <a class="col s6 waves-effect waves-light btn red darken-3">
            <i class="material-icons">delete</i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        data: Object
    }
};
</script>