
define(["DS/Vue/Vue"], function (Vue) {
  var myWidget = {
    onLoad: function () {
      new Vue({
        el: "#app",
        data: {
          enterGoalValue: "",
            goals: [],
            invalidGoal: false,
            message: " ----------- Goals -----------",
            Header1 : "Learn",
            Header2: "Vue",
            styleObject: {
                color: "red"
            },
            styleObject2: {
                backgroundColor : "yellow"
            },
            isClassActive: true
        },
        computed: {
          Header() {
              return this.Header1 + " " + this.Header2;
          }
        },
        methods: {
          addGoal() {
            this.invalidGoal = false;
            if( this.enteredGoalValue.trim() != "" && this.enteredGoalValue.trim() != undefined){
              this.goals.push(this.enteredGoalValue);
              this.enteredGoalValue = "";
            }
            else{
              this.invalidGoal = true;
              this.enteredGoalValue = "";
            }
          }
  }
      });
    },
  };
  widget.myWidget = myWidget;
  return myWidget;
});
