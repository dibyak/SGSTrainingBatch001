
define('darshit-publish/scripts/main',["DS/vue/vue","DS/i3DXCompassServices/i3DXCompassPubSub"], function (Vue, i3DXCompassPubSub) {
  var myWidget = {
    onLoad: function () {
      var n = new Vue({
        el: "#app",
        data: {
          message:"Hello Darshit!"
        },
      });
   i3DXCompassPubSub.publish('launchApp', n.message);
      
    },
  };
  widget.myWidget = myWidget;
  return myWidget;
});
