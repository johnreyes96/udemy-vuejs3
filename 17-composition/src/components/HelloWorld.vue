<template>
  <div>
    <h1>{{ title }}</h1>
    <hr>
    <h2 :style="{ color }">Contador: {{ contador }}</h2>
    <button @click="aumentar">+</button>
    <button @click="disminuir">-</button>

    <hr>

    <input type="text" v-model="persona.nombre">
    <p>{{ color }}</p>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup({ msg }) {
    const title = msg;
    const contador = ref(0);
    const persona = ref({});

    const color = computed(() => contador.value < 0 ? "red" : "green");

    const aumentar = () => contador.value++;
    const disminuir = () => contador.value--;

    return { title, contador, aumentar, disminuir, persona, color };
  }
};
</script>