const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    // First Solution

    // addCounter() {
    //   this.counter += 1;
    // },
    // reduceCounter() {
    //   this.counter -= 1;
    // }

    // Second Solution
    
    updateCounter(action) {
      if(action === 'add') {
        this.counter += 1;
      } else {
        this.counter -= 1;
      }
    }
  }
});

app.mount('#events');
