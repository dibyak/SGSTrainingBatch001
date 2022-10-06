
define(["DS/vue/vue","DS/WAFData/WAFData"], function (Vue, WAFData) {
  var myWidget = {
    onLoad: function () {
      new Vue({
        el: "#app",
        data: {
          employees: [],
        },
      });
      WAFData.authenticatedRequest("https://www.steepgraphdev21x.com/3dspace/darshit/darshit_services/darshit_getdata", {
        method: 'GET',
        accept: 'application/json',
        onComplete: function (dataResp) {
          debugger
          console.log(dataResp)

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
