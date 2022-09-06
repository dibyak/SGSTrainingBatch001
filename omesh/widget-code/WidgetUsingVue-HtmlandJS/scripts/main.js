define(["DS/Vue/Vue"], function (Vue) {
  var myWidget = {
    onLoad: function () {
      new Vue({
        el: "#app",
        data: {
          items: ["Darshit", "Dhanshri", "Abhay", "Omesh", "Dibyak"],
          age: 25,
        },
      });
    },
  };
  widget.myWidget = myWidget;
  return myWidget;
});
