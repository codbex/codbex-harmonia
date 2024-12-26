const app = Vue.createApp({
    data() {
        return {
            treeData: [
                {
                  id: '1',
                  label: 'Parent 1',
                  children: [
                    { id: '1-1', label: 'Child 1-1' },
                    { id: '1-2', label: 'Child 1-2' },
                  ],
                },
                {
                  id: '2',
                  label: 'Parent 2',
                  children: [
                    { id: '2-1', label: 'Child 2-1',
                        children: [
                            { id: '2-1-1', label: 'Child 2-1-1' },
                            { id: '2-1-2', label: 'Child 2-1-2' },
                          ]    
                    },
                    { id: '2-2', label: 'Child 2-2' },
                  ],
                },
              ]
        };
    }
});
app.use(Harmonia);
app.mount('#app');