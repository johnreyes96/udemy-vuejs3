<template>
  <div class="container mt-3 border">
    <h1 class="text-center">Gifs</h1>
    <search @accion="getGifs" />
    <hr>
    <div class="row">
      <div class="col-12" v-for="gif in gifs" :key="gif.id">
        <gif-card :data="gif" class="m-3 w-75" />
      </div>
    </div>
  </div>
</template>

<script>
import GifCard from '../components/GifCard.vue';
import Search from '../components/Search.vue';

export default {
  components: { GifCard, Search },
  data: () => ({
    gifs: {}
  }),
  created() {
    this.getGifs();
  },
  methods: {
    async getGifs(search) {
      const { data } = await this.axios.get("https://api.giphy.com/v1/gifs/search?q=goku&api_key=Xn9bsf30qq5WnNfS1BB5Fn7VwE2fDJdl");
      this.gifs = data.data;
      // console.log(data);
    }
  }
};
</script>