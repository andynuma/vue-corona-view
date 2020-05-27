<template>
  <a-table :columns="columns" :data-source="coronaData" @change="onChange" />
</template>

<script lang="ts">
const columns = [
  { title: "Country", dataIndex: "name", key: "name" },
  {
    title: "Confirmed",
    dataIndex: "confirmed",
    key: "confirmed",
    sorter: (a: any, b: any) => a.confirmed - b.confirmed
  },
  {
    title: "Deaths",
    dataIndex: "deaths",
    key: "deaths",
    sorter: (a: any, b: any) => a.deaths - b.deaths
  },
  {
    title: "Recovered",
    dataIndex: "recovered",
    key: "recoverd",
    sorter: (a: any, b: any) => a.recovered - b.recovered
  }
];

function onChange(pagination: any, filters: any, sorter: any) {
  console.log("params", pagination, filters, sorter);
}

export default {
  props: {
    coronaData: Array
  },
  data() {
    return {
      data: Array,
      columns
    };
  },
  // watch: {
  //   coronaData: {
  //       this.data = this.coronaData;
  //   }
  // },
  methods: {
    onChange
  }
};
</script>
