import { Bold, Italic, Underline } from 'lucide-vue-next'

const app = Vue.createApp({});
app.use(Harmonia);
app.component("IBold", Bold);
app.component("IItalic", Italic);
app.component("IUnderline", Underline);
app.mount('#app');