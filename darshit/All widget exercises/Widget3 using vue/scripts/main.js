
define(["DS/vue/vue"], function (Vue) {
  var myWidget = {
    onLoad: function () {
      new Vue({
        el: "#app",
        data: {
          items: ["Darshit", "Dhanshri", "Abhay", "Omesh", "Dibyak"],
          name: "Darshit",
        },
      });
    },
  };
  widget.myWidget = myWidget;
  return myWidget;
});
