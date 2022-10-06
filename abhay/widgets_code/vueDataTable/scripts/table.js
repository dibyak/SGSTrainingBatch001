define(["DS/vue/vue", "DS/WAFData/WAFData"], function (Vue, WAFData) {
  var myWidget = {
    onLoad: function () {
      var n=new Vue({
        el: '#app',
        name: "PointTable",
        // methods: {
        //   onSubmit() {
        //     this.allScores.push({ Ename: this.Ename,  Fname: this.Fname, Lname: this.Lname,  Age: this.Age });
        //     this.clearForm();
        //   },
        //   clearForm() {
        //     this.Eame = "";
        //     this.Fname = "";
        //     this.Lname = "";
        //     this.Age = "";
        //   },
        // },
        data: {
          sortedList: [
            { Ename: "abhayT", Fname: "abhay", Lname: "thorat", Age: 23 },
            { Ename: "darshitB", Fname: "Darshit", Lname: "bhat", Age: 24 },
            { Ename: "dhanashriB", Fname: "dhanashri", Lname: "bhad", Age: 24 },
            { Ename: "omeshA", Fname: "omesh", Lname: "attal", Age: 25 }]
        },
       
      });
      WAFData.authenticatedRequest("https://www.steppgraphdev21x.com/3dspace/AbhayEmpServices/someservices/getEmpdata", {
        method: 'GET',
        accept: 'application/json',

        onComplete: function (dataResp) {
          var a=JSON.parse(dataResp)
         n.sortedList=a;
         

        },
        onFailure: function (error) {
          widget.body.innerHTML += "<p>ERROR</p>";
          widget.body.innerHTML += "<p>" + JSON.stringify(error) + "</p>";
        }
      });
    },
  };
  widget.myWidget = myWidget;
  return myWidget;
});