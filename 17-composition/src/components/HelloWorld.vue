<template>
  <div>
    <h1>{{ title }}</h1>
    <hr>
    <contador-uno />
    <contador-uno />
    <contador-dos />
    <btn btnText="Aumentar" @accion="aumentar" />
    <btn btnText="Disminuir" @accion="disminuir" />
  </div>
</template>

<script>
import Btn from './Btn.vue';
import ContadorUno from './ContadorUno.vue';
import ContadorDos from './ContadorDos.vue';

import { useContador } from "../hooks/useContador";

export default {
  components: { Btn, ContadorUno, ContadorDos },
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