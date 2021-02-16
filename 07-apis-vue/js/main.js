const app = Vue.createApp({
    data: () => ({
        title: "Peticiones Fetch"
    }),
    created() {
        console.log("hola");
        this.getPost();
    },
    methods: {
        getPost() {
            console.log("post");
        }
    }
});