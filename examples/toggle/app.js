import { Bold } from 'lucide-vue-next'

const app = Vue.createApp({});
app.use(Harmonia);
app.component("IBold", Bold);
app.mount('#app');