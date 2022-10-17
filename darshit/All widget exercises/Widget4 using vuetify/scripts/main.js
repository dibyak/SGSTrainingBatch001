
define(["DS/Vue/Vue"], function (Vue) {
  var myWidget = {
    onLoad: function () {
      new Vue({
        el: '#app',
        vuetify: new Vuetify(),
        data: () => ({ 
          drawer: null,
          items: [
            { title: 'Todo', icon: 'mdi-format-list-checks' , to:"/" },
            { title: 'About', icon: 'mdi-help-box' , to:"/about"},
            { title: 'Invoice', icon: 'mdi-help-box' , to:"/Invoice"},
            { title: 'Dynamic', icon: 'mdi-help-box' , to:"/Dynamic"},
            { title: 'multiFilter', icon: 'mdi-help-box' , to:"/multiFilter"}
          ]
       }),
        
      })
    },
  };
  widget.myWidget = myWidget;
  return myWidget;
});
