<template>
  <div>
    <h1>{{ title }}</h1>
    <hr>
    <h2 :style="{ color }">Contador: {{ contador }}</h2>
    <btn btnText="Aumentar" @accion="aumentar" />
    <btn btnText="Disminuir" @accion="disminuir" />
  </div>
</template>

<script>
import Btn from './Btn.vue';
import { useContador } from "../hooks/useContador";

export default {
  components: { Btn },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup({ msg }) {
    const title = msg;

    return { title, ...useContador() };
  }
};
</script>