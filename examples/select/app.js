const options = [
    {"id":1, "value":"Apple"},
    {"id":2, "value":"Banana"},
    {"id":3, "value":"Blueberry"},
    {"id":4, "value":"Grapes"},
    {"id":5, "value":"Pineapple"},
]

const app = Vue.createApp({
    data() {
        return {
            options: options,
            selected: 2
        };
    },
});
app.use(Harmonia);
app.mount('#app');