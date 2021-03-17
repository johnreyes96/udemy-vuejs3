<template>
  <div>
    <h1>{{ title }}</h1>
    <hr>
    <h2>Contador: {{ contador }}</h2>
    <button @click="aumentar">+</button>
    <button @click="disminuir">-</button>

    <hr>

    <input type="text" v-model="persona.nombre">
    <p>{{ persona }}</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup({ msg }) {
    const title = msg;
    const contador = ref(0);
    const persona = ref({});

    const aumentar = () => contador.value++;
    const disminuir = () => contador.value--;

    return { title, contador, aumentar, disminuir, persona };
  }
};
</script>