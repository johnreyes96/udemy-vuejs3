const app = Vue.createApp({
    data: () => ({
        title: "Movies Vue",
        movieData: {}
    }),
    mounted() {
        this.getMovie();
    },
    methods: {
        async getMovie() {
            const data = await fetch("http://www.omdbapi.com/?apikey=352d4209&t=spider+man");
            const jsonData = await data.json();
            this.movieData = jsonData;
        }
    }
})