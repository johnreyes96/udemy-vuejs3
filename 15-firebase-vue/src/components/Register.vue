<template>
  <div class="row">
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
      <div class="row">
        <div class="input-field col s12">
          <input v-model.trim="confirmPassword" id="confirmPassword" type="password" class="validate">
          <label for="confirmPassword">Confirm Password</label>
        </div>
      </div>
      <button type="submit" class="waves-effect waves-light btn">Register</button>
    </form>
  </div>
</template>

<script>
import router from "../router/index";

export default {
    data: () => ({
        email: "",
        password: "",
        confirmPassword: ""
    }),
    methods: {
        async validarUsuario() {
            if (this.email != "" && this.password.length > 5 && this.password === this.confirmPassword) {
                const API_KEY = "AIzaSyAJwGMX80PQCBWVzCbKslolUlsEp2QZiOA";
                const res = await fetch (`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password,
                        returnSecureToken: true
                    })
                });
                console.log(await res.json());
                router.push("/proyectos");
            } else {
                return;
            }
        }
    }
};
</script>