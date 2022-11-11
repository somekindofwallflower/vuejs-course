const app = Vue.createApp({
 
  data() {
    return {
      enteredGoalValue: '',
      goals: [],
      person: { 
        name: 'Sunflower',
        age:  21,
      },
      userInput: 0
     };

  },
  methods: {
    addGoal() {
      if(this.enteredGoalValue){
        this.goals.push(this.enteredGoalValue);
        this.enteredGoalValue = '';
      }

    },

    

  }
});

app.mount('#user-goals');