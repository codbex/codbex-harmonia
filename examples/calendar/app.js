import { getLocalTimeZone, today } from '@internationalized/date'

const app = Vue.createApp({
    data() {
        return {
            dateValue: today(getLocalTimeZone())
        };
    },
});
app.use(Harmonia);
app.mount('#app');