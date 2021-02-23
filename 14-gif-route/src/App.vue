<template>
  <div id="nav">
    <Header />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header
  }
};
</script>