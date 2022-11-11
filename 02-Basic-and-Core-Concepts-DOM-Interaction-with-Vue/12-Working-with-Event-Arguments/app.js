const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCounter(num) {
      this.counter += num;
    },
    reduceCounter(num) {
      this.counter -= num;
    }
  }
});

app.mount('#events');
