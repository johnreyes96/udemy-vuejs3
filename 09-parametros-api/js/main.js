const app = Vue.createApp({
    data: () => ({
        title: "Peticiones con Parametros",
        post: 5,
        data: []
    }),
    created() {
        this.getPost();
    },
    methods: {
        async getPost() {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.post}`);
            const { userId } = data;
            const { data: dataUser } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            console.log(dataUser);
        }
    }
});