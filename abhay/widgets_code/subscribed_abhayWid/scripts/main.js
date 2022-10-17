define('subscribed_abhayWid/scripts/main', ["DS/vue/vue",'DS/i3DXCompassServices/i3DXCompassPubSub'], function (Vue,i3DXCompassPubSub ) {
  var myWidget = {
   vuedata:"",
    onLoad: function () {
      myWidget.vuedata = new Vue({
        el: "#app",
        data: {
          msg:"",
        },
      });
      i3DXCompassPubSub.subscribe('launchApp', function(data) {
        // Do something
      myWidget.vuedata.msg=data;
    });
    },
   
  };
  widget.myWidget = myWidget;
  return myWidget;
});