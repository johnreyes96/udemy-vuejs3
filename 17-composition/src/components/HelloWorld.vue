<template>
  <div>
    <h1>{{ title }}</h1>
    <hr>
    <h2>Contador: {{ contador }}</h2>
    <button @click="aumentar">+</button>
    <button @click="disminuir">-</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: 'HelloWorld',
  setup() {
    const title = "Aprendiendo Composition";
    const contador = ref(0);
    const aumentar = () => contador.value++;
    const disminuir = () => contador.value--;
    
    return { title, contador, aumentar, disminuir };
  }
};
</script>