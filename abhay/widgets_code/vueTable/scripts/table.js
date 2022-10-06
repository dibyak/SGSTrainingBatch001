define(["DS/Vue/Vue"], function (Vue) {
    var myWidget = {
      onLoad: function () {
        new Vue({
            el: '#app',
            name: "PointTable",
            data: () => ({ name: "", score: "", allScores: [] }),
            computed: {
                sortedList: function() {
                    return this.allScores;
                
              },
            },
            methods: {
              onSubmit() {
                this.allScores.push({ name: this.name, score: this.score });
                this.clearForm();
              },
              clearForm() {
                this.name = "";
                this.score = "";
              },
            },
            
        });
      },
    };
    widget.myWidget = myWidget;
    return myWidget;
  });