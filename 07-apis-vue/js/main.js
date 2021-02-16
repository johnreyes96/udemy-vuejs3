const app = Vue.createApp({
    data: () => ({
        title: "Peticiones Fetch"
    }),
    created() {
        console.log("hola");
        this.getPost();
    },
    methods: {
        async getPost() {
            const res = await fetch("https://jsonplaceholder.typicode.com/photos/10");
            const data = await res.json();
            console.log(data);
        }
    }
});