const app = Vue.createApp({
    data() {
        return {
            courseGoalA: '<h2>Master Vue and build amazing apps!</h2>',
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