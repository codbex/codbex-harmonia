import { DateFormatter } from '@internationalized/date'
import { Calendar as CalendarIcon } from 'lucide-vue-next'

const df = new DateFormatter('en-US', {
    dateStyle: 'long',
})

const app = Vue.createApp({
    data() {
        return {
            formData: {
                date: new Date(),
            },
            df: df            
        };
    },
});
app.use(Harmonia);
app.component("ICalendar", CalendarIcon);
app.mount('#app');