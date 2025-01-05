import { ChevronsUpDown } from 'lucide-vue-next';

const app = Vue.createApp({
    data() {
        return {
            isOpen: false,
        };
    },
});
app.use(Harmonia);
app.component("IChevronsUpDown", ChevronsUpDown);
app.mount('#app');