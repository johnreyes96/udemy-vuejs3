<template>
  <div class="row">
    <div v-if="errors" class="col s12 m7">
      <div class="card horizontal">
        <div class="card-stacked">
          <div class="card-content">
            <h5>Email / Password inválidos</h5>
          </div>
        </div>
      </div>
    </div>

    <form @submit.prevent="validarUsuario" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input v-model.trim="email" id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model.trim="password" id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <button type="submit" class="waves-effect waves-light btn">Login</button>
    </form>
  </div>
</template>

<script>
import router from "../router/index";

export default {
    data: () => ({
        email: "",
        password: "",
        errors: false
    }),
    methods: {
        async validarUsuario() {
            if (this.email != "" && this.password.length > 5) {
                const API_KEY = "AIzaSyAJwGMX80PQCBWVzCbKslolUlsEp2QZiOA";
                const res = await fetch (`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password,
                        returnSecureToken: true
                    })
                });
                
                const data = await res.json();
                if (data.error) {
                    this.errors = true;
                } else {
                    this.errors = false;
                    router.push("/proyectos");
                }
                return;
            } else {
                return;
            }
        }
    }
};
</script>