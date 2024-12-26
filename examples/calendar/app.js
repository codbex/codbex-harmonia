import { getLocalTimeZone, today } from '@internationalized/date'
import { ref } from 'vue'

const dateValue = ref(today(getLocalTimeZone()));

const app = Vue.createApp({
    data() {
        return {
            dateValue: dateValue
        };
    }
});
app.use(Harmonia);
app.mount('#app');