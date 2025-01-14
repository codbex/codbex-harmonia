const app = Vue.createApp({
    data() {
        return {
            value: [50]
        };
    },
});
app.use(Harmonia);
app.mount('#app');