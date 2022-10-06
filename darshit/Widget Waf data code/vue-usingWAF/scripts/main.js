
define('DS/vue-usingWAF/scripts/main',["DS/vue/vue","DS/WAFData/WAFData"], function (Vue, WAFData) {
  var myWidget = {
    onLoad: function () {
      var n = new Vue({
        el: "#app",
        data: {
          employees: [],
        },
      });
      WAFData.authenticatedRequest("https://www.steepgraphdev21x.com/3dspace/darshit/darshit_services/darshit_getdata", {
        method: 'GET',
        accept: 'application/json',
        onComplete: function (dataResp) {
          var data = JSON.parse(dataResp)
          n.employees = data

        },
        onFailure: function (error) {
          widget.body.innerHTML += "<p>ERROR</p>";
          widget.body.innerHTML += "<p>" + JSON.stringify(error) + "</p>";
        }
      });
    },
  };
  widget.myWidget = myWidget;
  return myWidget;
});
