import { ref } from 'vue'

const modelValue = ref(['Apple', 'Banana'])

const app = Vue.createApp({
    data() {
        return {
            modelValue: modelValue
        }
    }
});
app.use(Harmonia);
app.mount('#app');