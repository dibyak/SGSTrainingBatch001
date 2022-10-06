
define('darshit-subscribe1/scripts/main',["DS/vue/vue",'DS/i3DXCompassServices/i3DXCompassPubSub'], function (Vue, i3DXCompassPubSub) {
  var myWidget = {
    onLoad: function () {
      var n = new Vue({
        el: "#app",
        data: {
          darshit:""
        },
      });
      i3DXCompassPubSub.subscribe('launchApp', function(data) {
        n.darshit=data;
    });
    },
  };
  widget.myWidget = myWidget;
  return myWidget;
});
