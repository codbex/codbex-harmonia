import { Plus, Minus } from 'lucide-vue-next';

const app = Vue.createApp({
    data() {
        return {
            goal: 300,
        };
    },
});
app.use(Harmonia);
app.component("IPlus", Plus);
app.component("IMinus", Minus);
app.mount('#app');