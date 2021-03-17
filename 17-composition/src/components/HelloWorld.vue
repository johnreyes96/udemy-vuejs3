<template>
  <div>
    <h1>{{ title }}</h1>
    <hr>
    <contador-uno />
    <contador-dos />
    <btn btnText="Aumentar" @accion="aumentar" />
    <btn btnText="Disminuir" @accion="disminuir" />
  </div>
</template>

<script>
import { computed, provide, ref } from 'vue';
import Btn from './Btn.vue';
import ContadorUno from './ContadorUno.vue';
import ContadorDos from './ContadorDos.vue';

export default {
  components: { Btn, ContadorUno, ContadorDos },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup({ msg }) {
    const title = msg;
    const contador = ref(0);

    const color = computed(() => contador.value < 0 ? "red" : "green");

    provide("valorContador", contador);
    provide("color", color);

    const aumentar = () => contador.value++;
    const disminuir = () => contador.value--;
    
    return { title, color, aumentar, disminuir, title };
  }
};
</script>