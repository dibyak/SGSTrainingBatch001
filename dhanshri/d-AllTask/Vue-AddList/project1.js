new Vue({
  el: "#app",
  data() {
      return {
            fname: "",
            lname: "",
            first: "",
            last: "",
            age: "",
            gender: "",
            empid: "",
            more1:[],
            more2:[],
            more3:[],
            more4:[],
            more5:[],
            H3: "Firstname :",
            H4: "Lastname :",
            H5: "Age:",
            H6: "Gender:",
            H7: "Employee ID:"
      }
  },
      computed: {
          
            Header1() {
                  return this.H3;
            },
            Header2() {
                  return this.H4;
            },
            Header3() {
                  return this.H5;
            },
            Header4() {
                  return this.H6;
            },
            Header5() {
                  return this.H7;
            }
      },
            methods: {
            printfname: function () {
                  this.first = this.fname;
            },
            printlname: function () {
                  this.last = this.lname;
            },
            printage: function () {
                  this.age = this.age;
            },
            printgender: function () {
                  this.gender = this.gender;
            },
            printempid: function () {
                  this.empid = this.empid;
            },
            addData() {
                  this.more5.push(this.empid);
                  this.empid = "";
                  this.more1.push(this.fname);
                  this.fname = "";
                  this.more2.push(this.lname);
                  this.lname = "";
                  this.more3.push(this.age);
                  this.age = "";
                  this.more4.push(this.gender);
                  this.gender = "";
            }
            }
});