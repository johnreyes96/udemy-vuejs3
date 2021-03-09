<template>
  <div class="container">
      <div class="row">
        <form class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <input id="first_name" type="text" class="validate">
                    <label for="first_name">Nombre del Proyecto</label>
                </div>
                <div class="input-field col s12">
                    <input id="last_name" type="text" class="validate">
                    <label for="last_name">Descripción del Proyecto</label>
                </div>
                <p>
                    <label>
                        <input type="checkbox" checked="checked" />
                        <span>HTML</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" checked="checked" />
                        <span>CSS</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" checked="checked" />
                        <span>JavaScript</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" checked="checked" />
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

};
</script>