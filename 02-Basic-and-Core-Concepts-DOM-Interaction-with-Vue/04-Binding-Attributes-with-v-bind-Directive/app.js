const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'finish the course and learn Vue',
            vueLink: 'http://vuejs.org/'
        }
    }
});

app.mount('#user-goal');