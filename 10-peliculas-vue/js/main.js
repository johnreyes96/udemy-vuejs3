const app = Vue.createApp({
    data: () => ({
        title: "Movies Vue",
        movieData: {},
        movieTitle: "Spider Man"
    }),
    mounted() {
        this.getMovie();
    },
    methods: {
        async getMovie() {
            const search = this.movieTitle.toLowerCase().replace(/ /g, "+");
            const data = await fetch(`http://www.omdbapi.com/?apikey=352d4209&t=${search}`);
            const jsonData = await data.json();
            this.movieData = jsonData;
        }
    }
})