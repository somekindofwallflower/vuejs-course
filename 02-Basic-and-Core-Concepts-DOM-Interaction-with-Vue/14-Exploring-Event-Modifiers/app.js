const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    addCounter(num) {
      this.counter += num;
    },
    reduceCounter(num) {
      this.counter -= num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    handleConfirmedName(event){
      this.confirmedName = event.target.value;
    },
    submitForm(event) {
      console.log(event);
    }
  }
});

app.mount('#events');
