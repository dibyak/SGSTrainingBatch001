define(["Drag&Drop-Vue/Scripts/main", "DS/WAFData/WAFData"], 
function (Vue, WAFData, DataDragAndDrop, i3DXCompassServices) {
	var myWidget = {
		myObj:"",
	  onLoad: function () {
		myWidget.myObj= new Vue({
		  el: "#app",
		  data: {
			emp: [],
			wItems: [],
			img: 'images/dragDropPPR.png'
		  },
		});
		myWidget.getTableData();

      var widgetBody = (widget.body);
      myWidget.onDropObject(widgetBody);

      myWidget.get3DSpaceUrl((URLResult) => {
        Service_URL = URLResult[0].url;
        console.log("Service_URL ---- ", Service_URL);
        var iconUrl = widget.getUrl();
        iconUrl = iconUrl.substring(0, iconUrl.lastIndexOf("/"));
      })
    },
    getTableData: function () {
		WAFData.authenticatedRequest("https://www.steepgraphdev21x.com/3dspace/dhanshri/services/getdata", {
		  method: 'GET',
		  accept: 'application/json',
		  onComplete: function (dataResp) {
			newData= JSON.parse(dataResp)
			myWidget,myObject.emp=newData
  
		  },
		  onFailure: function (error) {
			widget.body.innerHTML += "<p>ERROR</p>";
			widget.body.innerHTML += "<p>" + JSON.stringify(error) + "</p>";
		  }
		});
	  },
	  onDropObject: function (theDropElt) {
		DataDragAndDrop.droppable(theDropElt, {
		  drop: function (data) {
			theDropElt.value = data;
			var dropedObject = JSON.parse(data);
			myWidget.myObj.wItems = dropedObject.data.items;
  
		  }
		});
	  },
	  get3DSpaceUrl: function (callback) {
		const service_Name_Value = "3DSpace";
		i3DXCompassServices.getServiceUrl({
		  serviceName: service_Name_Value,
		  platformId: '',
		  onComplete: function (URLResult) {
			callback(URLResult);
		  }
		});
	  }
	};
	widget.myWidget = myWidget;
	return myWidget;
  });
  