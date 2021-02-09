const app = Vue.createApp({
    data: () => ({
        title: "Gradient Generator",
        firstColor: "#000000",
        secondColor: "#000000"
    }),
    computed: {
        setColor() {
            return `background: linear-gradient(to right, ${this.firstColor}, ${this.secondColor});`
        }
    }
});