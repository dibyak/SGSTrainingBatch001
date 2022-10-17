
define("vue-dargAndDrop/scripts/main", ["DS/vue/vue", "DS/WAFData/WAFData", 'DS/DataDragAndDrop/DataDragAndDrop','DS/i3DXCompassServices/i3DXCompassServices'], 
function (Vue, WAFData, DataDragAndDrop, i3DXCompassServices) {
  var myWidget = {
    myObject:"",
    onLoad: function () {
      myWidget.myObject = new Vue({
        el: "#app",
        data: {
          employees: [],
          widgetItems: [],
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
      WAFData.authenticatedRequest("/3dspace/darshit/darshit_services/darshit_getdata", {
        method: 'GET',
        accept: 'application/json',
        onComplete: function (dataResp) {
          data = JSON.parse(dataResp)
          myWidget.myObject.employees = data
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
          myWidget.myObject.widgetItems = dropedObject.data.items;

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
