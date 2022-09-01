<template>
  <div id="app">
    <h1>Add Form</h1>
    <Form @employee="addEmp($event)"/>
    <Table :data="tableData" />
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Table from "./components/Table.vue";
export default {
  name: "App",
  components: {
    Form,
    Table,
  },
  data() {
    return {
      noOfName: [
        {
          fname: "",
          lname: ""
        }
      ],
      tableData: []
    };
  },
  methods: {
    addEmp(data) {
      this.tableData.push(data)
    },
  }
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
body {
  /* background-color: rgb(44, 218, 221); */
  color: black;
  text-align: center;
}
h1 {
  background-color: black;
  color: white;
}
</style>
