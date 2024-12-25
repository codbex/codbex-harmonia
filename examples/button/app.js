import { ChevronRight, Mail, Loader2 } from 'lucide-vue-next'

const app = Vue.createApp({});
app.use(Harmonia);
app.component("IChevronRight", ChevronRight);
app.component("IMail", Mail);
app.component("ILoader", Loader2);
app.mount('#app');