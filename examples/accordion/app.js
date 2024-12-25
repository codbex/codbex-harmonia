const app = Vue.createApp({
    data() {
        return {
            accordionItems: [
                { value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
                { value: 'item-2', title: 'Is it unstyled?', content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.' },
                { value: 'item-3', title: 'Can it be animated?', content: 'Yes! You can use the transition prop to configure the animation.' },
            ],
            defaultValue: 'item-1',
        };
    }
});
app.use(Harmonia);
app.mount('#app');