import { DateFormatter } from '@internationalized/date'

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
app.mount('#app');