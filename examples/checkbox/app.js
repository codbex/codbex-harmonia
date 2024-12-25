const app = Vue.createApp({
    data() {
        return {
            formData: {
                agree: false,
            }
        };
    },
});
app.use(Harmonia);
app.mount('#app');