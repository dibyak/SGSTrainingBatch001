define('publish_abhayWid/scripts/main', ["DS/vue/vue",'DS/i3DXCompassServices/i3DXCompassPubSub'], function (Vue,i3DXCompassPubSub) {
  var myWidget = {
   vuedata:"",
    onLoad: function () {
      myWidget.vuedata = new Vue({
        el: "#app",
        data: {
          msg:"Hello Another Widget"
        },
      });
      i3DXCompassPubSub.publish('launchApp', myWidget.vuedata.msg);
    },
   
  };
  widget.myWidget = myWidget;
  return myWidget;
});