new Vue({
  el: "#app",
  name: "Leaderboard",
  data: () => ({ empid: "", fname: "", lname: "", age: "", gender: "" , allScores: [] }),
  computed: {
    sortedList: function() {
      return this.allScores;
    }
  },
  methods: {
    onSubmit() {
      this.allScores.push({ empid: this.empid, fname: this.fname, lname: this.lname, age:this.age, gender: this.gender });
      this.clearForm();
    },
    clearForm() {
      this.empid = "";
      this.fname = "";
      this.lname = "";
      this.age = "";
      this.gender = "";
    }
  }
});