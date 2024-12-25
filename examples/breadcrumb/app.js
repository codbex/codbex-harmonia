import { Slash } from 'lucide-vue-next';

const app = Vue.createApp({});
app.use(Harmonia);
app.component("ISlash", Slash);
app.mount('#app');