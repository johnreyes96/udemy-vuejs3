const app = Vue.createApp({
    data: () => ({
        title: "Peticiones Axios",
        data: []
    }),
    created() {
        console.log("hola");
        this.getPost();
    },
    methods: {
        async getPost() {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
            this.data = data;
            console.log(this.data);
        }
    }
});