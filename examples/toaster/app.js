import { useToast } from '@/components/ui/toast/use-toast'

const app = Vue.createApp({
    setup() {
        const { toast } = useToast();
        return {toast};
    }
});
app.use(Harmonia);
app.mount('#app');