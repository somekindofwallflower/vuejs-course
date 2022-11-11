const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'finish the course and learn Vue',
            vueLink: 'http://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'Master Vue!';
            }
        }
    }
});

app.mount('#user-goal');