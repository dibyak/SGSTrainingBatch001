
define("publishBtn/scripts/main", [ "DS/vue/vue",'DS/i3DXCompassServices/i3DXCompassPubSub'], function (Vue, i3DXCompassPubSub) {
	var myWidget = {
		onLoad: function () {
			var pub = new Vue({
				el: "#app",
				data: {
					name: "Dhanshri Bhad"
				},
				methods: {
					info: function () {
						i3DXCompassPubSub.publish('launchApp', this.name);
					}

				}
			});

		},
	};
	// widget.myWidget = myWidget;
	return myWidget;
});
