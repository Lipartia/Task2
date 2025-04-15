const app = Vue.createApp({
    data() {
        return {
            alertMessage: '',
            inputValue: '',
            enterValue: ''
        };
    },
    methods: {
        showAlertMessage() {
            this.alertMessage = 'Hello Itz Me Lipo';
        },
        updateInput(event) {
            this.inputValue = event.target.value;
        },
        updateOnEnter(event) {
            if (event.key === 'Enter') {
                this.enterValue = event.target.value;
            }
        }
    }
});

app.mount('#assignment');
