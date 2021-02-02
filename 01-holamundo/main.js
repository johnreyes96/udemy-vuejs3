const app = Vue.createApp({
    data() {
        return {
            user: {
                title: "Hola mundo",
                name: "John",
                age: 18,
                movies: ["batman", "spiderman", "superman"],
                url: "http://www.google.com.co",
                picture: "https://scontent.feoh6-1.fna.fbcdn.net/v/t1.0-9/141500604_783292422281902_8373059744885211826_o.jpg?_nc_cat=1&ccb=2&_nc_sid=730e14&_nc_eui2=AeG3T8iU0otD0VDoNA9L0Qg-Tk-G19gb3dBOT4bX2Bvd0C2E-1-wy_jyl9ZfRILwuIY&_nc_ohc=pIISlEZJ8JQAX8-nUA5&_nc_ht=scontent.feoh6-1.fna&oh=a0827e09161ae8efa9569ecddbd171b3&oe=603A2A01",
                classValue: "error"
            }
        };
    }
});

console.log(app.data);