import { Cloud, LifeBuoy, LogOut, Mail, MessageSquare, Plus, PlusCircle, Settings, User, UserPlus, Users } from 'lucide-vue-next';

const app = Vue.createApp({
    data() {
        return {
            isOpen: false,
        };
    },
});
app.use(Harmonia);
app.component("ICloud", Cloud);
app.component("ILifeBuoy", LifeBuoy);
app.component("ILogOut", LogOut);
app.component("IMail", Mail);
app.component("IMessageSquare", MessageSquare);
app.component("IPlus", Plus);
app.component("IPlusCircle", PlusCircle);
app.component("ISettings", Settings);
app.component("IUser", User);
app.component("IUserPlus", UserPlus);
app.component("IUsers", Users);
app.mount('#app');