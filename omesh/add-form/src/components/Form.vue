<template>
  <form style="margin-bottom: 50px">
    <div class="div1">
      <label for="id">Employee Id:</label>
      <input style="margin-right : 20px" type="text" id="id" v-model="emp.id" />
      <label for="fname">Employee First name:</label>
      <input style="margin-right : 20px" type="text" id="fname" v-model="emp.firstName" />
      <label for="lname">Employee Last name:</label>
      <input type="text" id="lname" style="margin-right : 20px" v-model="emp.lastName" />
      <label for="age">Employee Age:</label>
      <input type="text" id="age" style="margin-right : 20px" v-model="emp.age" />
      <label for="gender">Employee Gender:</label>
      <input type="text" id="gender" style="margin-bottom : 20px" v-model="emp.gender" />
    </div>
    <Button BGColour="#4caf50" @submit = addEmp() name="Add Employee!"/>
  </form>
</template>

<script>
import Button from './Button.vue'
export default {
  name: "FormData",
  components: {
    Button
  },
  data() {
    return {
      emp: {}
    }
  },
  methods: {
    addEmp() {
      this.$emit('employee', this.emp)
      this.emp = {}
    }
  }
};
</script>

<style>
.div1 {
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  font-size: large;
}
</style>