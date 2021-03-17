<template>
  <div>
    <h1>{{ title }}</h1>
    <hr>
    <h2 :style="{ color }">Contador: {{ contador }}</h2>
    <btn btnText="Aumentar" @accion="aumentar" />
    <btn btnText="Disminuir" @accion="disminuir" />

    <hr>

    <input type="text" v-model="persona.nombre">
    <p>{{ color }}</p>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import Btn from './Btn.vue';

export default {
  components: { Btn },
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