
define("widgetSubscribe/scripts/main",['DS/i3DXCompassServices/i3DXCompassPubSub',"DS/Vue/Vue"], function (Vue,i3DXCompassPubSub) {
	var myWidget = {
	  onLoad: function () {
		var pub =new Vue({
		  el: "#app",
		  data: {
			name: " ",
		  },
		});
		i3DXCompassPubSub.subscribe('launchApp', function(subs){
        pub.name=subs;
		});
	  },
	};
	widget.myWidget = myWidget;
	return myWidget;
  });
  