const app = Vue.createApp({
  data() {
    return {
        users: [] // For storing remote data
    };
},
  methods: {
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