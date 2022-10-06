define('DS/vueDataTable/scripts/table', ["DS/vue/vue", "DS/WAFData/WAFData", "DS/DataDragAndDrop/DataDragAndDrop",'DS/i3DXCompassServices/i3DXCompassServices'], function (Vue,
  WAFData, DataDragAndDrop, i3DXCompassServices) {
  var myWidget = {
   vuedata:"",
    onLoad: function () {
      myWidget.vuedata = new Vue({
        el: "#app",
        data: {
          emp: [],
          sortedList: [],
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
        // myWidget.vueObject.img = iconUrl + '/images/dragDropPPR.png';
        // var image = '<img class="myInputType" src="' + dropIconUrl + '" alt="Drop Here"><p></p>';
        // widget.body.innerHTML = image;
      })
    },
    getTableData: function () {
      debugger
      WAFData.authenticatedRequest("/3dspace/AbhayEmpServices/someservices/getEmpdata", {
        method: 'GET',
        accept: 'application/json',
        onComplete: function (dataResp) {
          data = JSON.parse(dataResp)
          myWidget.vuedata.emp = data
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
          myWidget.vuedata.sortedList = dropedObject.data.items;

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