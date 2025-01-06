const app = Vue.createApp({
    data() {
        return {
            progress: 10
        };
    },
});
app.use(Harmonia);
app.mount('#app');