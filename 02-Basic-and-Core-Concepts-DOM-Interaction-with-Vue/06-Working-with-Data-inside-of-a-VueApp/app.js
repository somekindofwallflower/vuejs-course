const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Learn Vuejs',
            courseGoalA: 'Finish the course and learn Vue',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'http://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');