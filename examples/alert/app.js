import { Terminal, AlertCircle } from 'lucide-vue-next';

const app = Vue.createApp({});
app.use(Harmonia);
app.component("ITerminal", Terminal);
app.component("IAlertCircle", AlertCircle);
app.mount('#app');