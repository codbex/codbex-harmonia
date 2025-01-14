import { getLocalTimeZone, today } from '@internationalized/date'
import { ref } from 'vue'

const start = today(getLocalTimeZone())
const end = start.add({ days: 7 })

const value = ref({
  start,
  end,
})

const app = Vue.createApp({
    data() {
        return {
            rangeValue: value
        };
    }
});
app.use(Harmonia);
app.mount('#app');