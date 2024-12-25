import { getLocalTimeZone, today } from '@internationalized/date'
import { ref } from 'vue'

const value = ref(today(getLocalTimeZone()));

const app = Vue.createApp({
    data() {
        return {
            value: value
        };
    }
});
app.use(Harmonia);
app.mount('#app');