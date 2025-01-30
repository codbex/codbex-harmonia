const app = Vue.createApp({
    data() {
        return {
            formData: {
                name: 'Some name',
                date: new Date(),
                gender: 'male',
                age: [15],
                agree: false,
                option: '2'
            },
            users: [] // For storing remote data
        };
    },
    methods: {
        submitForm() {
            alert(JSON.stringify(this.formData));
        },
        // Method to fetch remote data
        async fetchRemoteData() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                this.users = await response.json();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
    },
    mounted() {
        // Fetch remote data when the component is mounted
        this.fetchRemoteData();
    }
});
app.use(Harmonia);
app.mount('#app');