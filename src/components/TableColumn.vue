<template>
    <slot/>
  </template>
  
  <script>
  export default {
    name: "HTableColumn",
    props: {
      prop: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      sortable: {
        type: Boolean,
        default: true,
      },
    },
  };
  </script>