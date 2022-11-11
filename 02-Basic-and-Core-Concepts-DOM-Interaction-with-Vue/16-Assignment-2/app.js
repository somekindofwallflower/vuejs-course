const app = Vue.createApp({
    data() {
        return {
            output: '',
            finalOutput: ''
        };
    },

    methods: {
        showAlert() {
            alert('Alert message!');
        },

        updateOutput(event) {
            this.output = event.target.value;
        },

        handleUpdateOnEnterPress(event) {
            this.finalOutput = event.target.value;
        }
    }
}

)

app.mount('#assignment');