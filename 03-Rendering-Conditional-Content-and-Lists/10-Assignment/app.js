const app = Vue.createApp({
    data() {
        return{
            enteredTask: '',
            tasks: [],
            isVisible: true
        }
    },
    methods: {
        addTask(){
            if(this.enteredTask){
                this.tasks.push(this.enteredTask);
                this.enteredTask = '';
            }
            
        }
        
    }

})

app.mount('#assignment')