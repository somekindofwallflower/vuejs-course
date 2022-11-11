const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };

    },
    computed: {
        result(){
            if(this.counter < 37) {
                return 'Not there yet.';
            } else if (this.counter > 37) {
                return 'Too much!';
            } else {
                return this.counter;
            }
        }
        

    },

    methods: {
        addCounter(number) {
            this.counter += number;
        },

    },
    watch: {
        counter() {
            let self = this;
            setTimeout(function() {
                self.counter = 0;
            }, 5000)
        }

    }
})

app.mount('#assignment');