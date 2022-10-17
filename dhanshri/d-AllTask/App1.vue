<template>
<div>
<h1> Employee's Information</h1>
<div  id="d" v-for="(user, counter) in users"  v-bind:key="counter">
  <label for="EmployeeId"> EmployeeId</label>
  <input type="text" v-model="user.employeeId" name="EmployeeId" />
  <label for="FirstName"> First Name</label>
  <input type="text" v-model="user.firstName" name="FirstName" />
  <label for="LastName"> Last Name</label>
  <input type="text" v-model="user.lastName" name="LastName" />
  <label for="Age"> Age</label>
  <input type="text" v-model="user.age" name="Age" />
  <label for="Gender">Gender</label>
  <input type="text" v-model="user.gender" name="Gender" /><br><br>
</div>

<button class="button" id="b1" v-on:click="addData"> AddMore</button>
<button class="button" v-on:click="subData"> Submit</button>
<div>
<table class="table mt-5 " border="1px">
      <thead>
        <tr>
          <th scope="col">EmployeeId</th>
          <th scope="col">FirstName</th>
          <th scope="col">LastName</th>
          <th scope="col">Age</th>
          <th scope="col">Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(users, counter) in users" :key="counter">
          <td>{{ users.employeeId }}</td>
          <td>{{ users.firstName }}</td>
          <td>{{ users.lastName }}</td>
          <td>{{ users.age }}</td>
          <td>{{ users.gender }}</td>
        </tr>
      </tbody>
</table>
</div>
</div>
</template>
<script>
export default {
  // name:'RegForm',
  methods: {
    addData () {
      this.users.push({
        employeeId: '',
        firstName: '',
        lastName: '',
        age: '',
        gender: ''
      })
    },
    subData () {
      console.log('submitted', this.users)
    }
  },
  data () {
    return {
      users: [
        {
          employeeId: '',
          firstName: '',
          lastName: '',
          age: '',
          gender: ''
        }
      ]
    }
  }
}
</script>
<!-- <style> -->
<!-- < link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
 integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link > -->
<!-- /* <style>
#d{
  margin: 2px;
  padding: 4px;
  background-color: aquamarine;
  text-align: center;
}

.button{
  background-color: rgb(224, 155, 155);
  border: 2px;
  padding-left: 4px; */
}
</style> -->
