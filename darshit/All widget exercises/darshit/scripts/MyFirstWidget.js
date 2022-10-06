define("DS/darshit/scripts/MyFirstWidget",
	["DS/WAFData/WAFData"
		
		],
	function ( WAFData) {
		var MyWidget = {
			onLoad: function () {
				widget.setBody({
					text: 'Hello World!!!'
				});
								
			},
			
		};
		return MyWidget;
	}); 