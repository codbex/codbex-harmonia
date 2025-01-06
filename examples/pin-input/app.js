const app = Vue.createApp({
    data() {
        return {
            value: []
        };
    },
    methods: {
        handleComplete(e) {
            alert(e.join(''));
        },
    },
});
app.use(Harmonia);
app.mount('#app');