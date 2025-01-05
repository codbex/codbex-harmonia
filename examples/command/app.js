import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-vue-next';

const app = Vue.createApp({
    data() {
        return {
            isOpen: false,
        };
    },
});
app.use(Harmonia);
app.component("ICalculator", Calculator);
app.component("ICalendar", Calendar);
app.component("ICreditCard", CreditCard);
app.component("ISettings", Settings);
app.component("ISmile", Smile);
app.component("IUser", User);
app.mount('#app');