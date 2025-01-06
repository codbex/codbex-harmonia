import { CalendarDays } from 'lucide-vue-next';

const app = Vue.createApp({
    data() {
        return {
            goal: 300,
        };
    },
});
app.use(Harmonia);
app.component("ICalendarDays", CalendarDays);
app.mount('#app');