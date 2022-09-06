define("DS/OmeshWid/scripts/MyFirstWidget",
	function ( ) {
		var MyWidget = {
			
			
			onLoad: function () {
				widget.setBody({
					text: 'Hello World by omesh'
				});
								
			},
			
		};
		return MyWidget;
	}); 