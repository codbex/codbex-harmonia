// Sample data
const tableData = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 28 },
  { id: 3, name: 'Peter Parker', age: 25 },
]

// Define columns for the table
const columns = [
  {
    accessorKey: 'id', // This should be the key from your data
    header: 'ID', // The header text for this column
    cell: (info) => info.getValue(), // Render the cell value
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'age',
    header: 'Age',
    cell: (info) => info.getValue(),
  },
]

const app = Vue.createApp({
  data() {
    return {
      tableData: [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 28 },
        { id: 3, name: 'Peter Parker', age: 25 },
      ],
      columns: columns
    }
  },
  methods: {
    editRow(row) {
      alert(`Editing ${row.name}`)
    },
    handleSelectedRows(selectedRows) {
      console.log('Selected Rows:', selectedRows)
    }
  }
});
app.use(Harmonia);
app.mount('#app');