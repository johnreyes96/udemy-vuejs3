const app = Vue.createApp({
    data: () => ({
        title: "Calculadora Vue",
        number1: 0,
        number2: 0
    }),
    computed: {
        addition() {
            return this.number1 + this.number2;
        },
        subtraction() {
            return this.number1 - this.number2;
        },
        multiplication() {
            return this.number1 * this.number2;
        },
        division() {
            const result = this.number1 / this.number2;
            return result === Infinity || result === -Infinity
                ? "Error - No Calculable" : result;
        }
    }
});