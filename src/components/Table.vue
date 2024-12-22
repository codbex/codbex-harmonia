<template>
  <div class="h-table">
    <table :class="['table', { 'table-striped': stripe }]">
      <thead>
        <tr class="border">
          <th
            v-for="column in computedColumns"
            :key="column.prop"
            :class="{ sortable: column.sortable }"
            @click="sortColumn(column)"
          >
            <span class="column-label">{{ column.label }}</span>
            <span v-if="column.sortable" class="sort-indicator">
              <span v-if="column.prop === sortColumnKey && sortOrder === 'ascending'">↑</span>
              <span v-if="column.prop === sortColumnKey && sortOrder === 'descending'">↓</span>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in paginatedData" :key="rowIndex" class="border">
          <td v-for="column in computedColumns" :key="column.prop">
            {{ getNestedValue(row, column.prop) }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button
        class="btn"
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
      >
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        class="btn"
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HTable",
  props: {
    data: {
      type: Array,
      required: true,
    },
    defaultSort: {
      type: Object,
      default: () => ({ prop: "", order: "" }),
    },
    stripe: {
      type: Boolean,
      default: false,
    },
    pageSize: {
      type: Number,
      default: 5, // Default number of rows per page
    },
  },
  data() {
    return {
      sortColumnKey: this.defaultSort.prop,
      sortOrder: this.defaultSort.order,
      currentPage: 1,
    };
  },
  computed: {
    computedColumns() {
      return this.$slots.default
        ? this.$slots.default().map((vnode) => vnode.props || vnode.componentOptions?.propsData || {})
        : [];
    },
    sortedData() {
      const sorted = [...this.data];
      if (this.sortColumnKey) {
        sorted.sort((a, b) => {
          const aValue = this.getNestedValue(a, this.sortColumnKey);
          const bValue = this.getNestedValue(b, this.sortColumnKey);

          if (aValue > bValue) return this.sortOrder === "ascending" ? 1 : -1;
          if (aValue < bValue) return this.sortOrder === "ascending" ? -1 : 1;
          return 0;
        });
      }
      return sorted;
    },
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      return this.sortedData.slice(startIndex, startIndex + this.pageSize);
    },
    totalPages() {
      return Math.ceil(this.data.length / this.pageSize);
    },
  },
  methods: {
    sortColumn(column) {
      if (column.sortable) {
        if (this.sortColumnKey === column.prop) {
          this.sortOrder = this.sortOrder === "ascending" ? "descending" : "ascending";
        } else {
          this.sortColumnKey = column.prop;
          this.sortOrder = "ascending";
        }
      }
    },
    getNestedValue(obj, path) {
      return path.split(".").reduce((acc, part) => acc && acc[part], obj);
    },
    changePage(newPage) {
      if (newPage >= 1 && newPage <= this.totalPages) {
        this.currentPage = newPage;
      }
    },
  },
};
</script>

<style scoped>

</style>
