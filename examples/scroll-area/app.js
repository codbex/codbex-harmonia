const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`,
  );

const app = Vue.createApp({
    data() {
        return {
            tags: tags
        };
    },
});
app.use(Harmonia);
app.mount('#app');