
define("widgetPublish/scripts/main",["DS/vue/vue",'DS/i3DXCompassServices/i3DXCompassPubSub'], function (Vue,i3DXCompassPubSub) {
	var myWidget = {
	  onLoad: function () {
		var pub =new Vue({
		  el: "#app",
		  data: {
			name: "Dhanshri Bhad",
		  },
		});
		i3DXCompassPubSub.publish('launchApp', pub.name);
	  },
	};
	widget.myWidget = myWidget;
	return myWidget;
  });
  