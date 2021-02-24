<template>
  <div class="container mt-3 border">
    <h1 class="text-center">Gifs</h1>
    <hr>
  </div>
</template>

<script>
export default {
  data: () => ({
    gifs: null
  }),
  mounted() {
    this.getGifs();
  },
  methods: {
    async getGifs() {
      const res = await this.axios.get("https://api.giphy.com/v1/gifs/random?api_key=Xn9bsf30qq5WnNfS1BB5Fn7VwE2fDJdl");
      console.log(res);
    }
  }
};
</script>