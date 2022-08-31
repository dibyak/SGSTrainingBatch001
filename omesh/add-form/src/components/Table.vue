<template>
  <div>
    <Button BGColour="grey" @submit="submit()" name="Get Employee" style="margin-bottom: 50px" />

    <table id="table1">
      <thead>
        <td style="border: 1px solid black;">Employee Id</td>
        <td style="border: 1px solid black;">Employee Firstname</td>
        <td style="border: 1px solid black;">Employee Laststname</td>
        <td style="border: 1px solid black;">Employee Age</td>
        <td style="border: 1px solid black;">Employee Gender</td>
      </thead>
      <tbody>
        <tr :class="[index % 2 == 1 ? 'red' : 'blue']" v-for="(f, index) in data" :key="index">
          <td :class="{border : data.length > 0}">{{ f.id }}</td>
          <td :class="{border : data.length > 0}">{{ f.firstName }}</td>
          <td :class="{border : data.length > 0}">{{ f.lastName }}</td>
          <td :class="{border : data.length > 0}">{{ f.age }}</td>
          <td :class="{border : data.length > 0}">{{ f.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "FormData",
  components: {
    Button
  },
  props: {
    data : Array
  },
};
</script>

<style>
.red {
  background-color: rgb(218, 142, 149);
}
.blue {
  background-color: rgb(216, 238, 235);
}
.border {
  border: 1px solid black;
}
table,
th,
td {
  align-items: center;
}
table {
  border-collapse: collapse;
  width: 100%;
}
</style>