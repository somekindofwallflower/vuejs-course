const app = Vue.createApp({
    data() {
        return {
            name: 'SomeKindOfWallflower',
            age: 28,
            image: 'https://i.pinimg.com/originals/bb/bf/be/bbbfbe8e9401fc70da235e4b41a075e7.jpg'
        }
    },
    methods: {
        getAgeAfter5Years() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }
})

app.mount("#assignment");