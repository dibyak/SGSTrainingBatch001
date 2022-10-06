
define('flowers-subscribe1/scripts/main',["DS/vue/vue",'DS/i3DXCompassServices/i3DXCompassPubSub'], function (Vue, i3DXCompassPubSub) {
  var myWidget = {
    onLoad: function () {
      var n = new Vue({
        el: "#app",
        data: {
          darshit:"",
          rose: '',
          marigold:'',
          lotus: '',
          sunflower: ''
        },
      });
      i3DXCompassPubSub.subscribe('messagePublish', function(data) {
        n.darshit = data;
    });
    i3DXCompassPubSub.subscribe('rosePublish', function(data) {
      n.rose = data;
  });
  i3DXCompassPubSub.subscribe('marigoldPublish', function(data) {
    n.marigold = data;
});
i3DXCompassPubSub.subscribe('lotusPublish', function(data) {
  n.lotus = data;
});
i3DXCompassPubSub.subscribe('sunflowerPublish', function(data) {
  n.sunflower = data;
});
    },
  };
  widget.myWidget = myWidget;
  return myWidget;
});
