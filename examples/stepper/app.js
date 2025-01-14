import { BookUser, Check, CreditCard, Truck } from 'lucide-vue-next'

const steps = [{
    step: 1,
    title: 'Address',
    description: 'Add your address here',
    icon: BookUser,
  }, {
    step: 2,
    title: 'Shipping',
    description: 'Set your preferred shipping method',
    icon: Truck,
  }, {
    step: 3,
    title: 'Payment',
    description: 'Add any payment information you have',
    icon: CreditCard,
  }, {
    step: 4,
    title: 'Checkout',
    description: 'Confirm your order',
    icon: Check,
  }]

const app = Vue.createApp({
    data() {
        return {
            steps: steps
        }
    }
});
app.use(Harmonia);
app.component("IBookUser", BookUser);
app.component("ICheck", Check);
app.component("ICreditCard", CreditCard);
app.component("ITruck", Truck);
app.mount('#app');