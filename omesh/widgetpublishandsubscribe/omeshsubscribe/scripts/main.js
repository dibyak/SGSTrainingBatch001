define("omeshsubscribe/scripts/main", ["DS/vue/vue", 'DS/i3DXCompassServices/i3DXCompassPubSub'],
  function (Vue, subscribeData) {
    var myWidget = {
      vueObject: "",
      onLoad: function () {
        myWidget.vueObject = new Vue({
          el: "#app",
          data: {
            rose: '',
            marigold: '',
            lotus: '',
            sunflower: '',
          },
        });
        myWidget.getSubscribeData();
      },
      getSubscribeData: function () {
        subscribeData.subscribe('rosePublish', function(data) {
          document.getElementsByClassName("center")[0].style.display = "block";
          document.getElementsByClassName("center")[0].style.width = "800px";
          document.getElementsByClassName("center")[0].style.height = "800px";
          myWidget.vueObject.rose = data
        });
        subscribeData.subscribe('marigoldPublish', function(data) {
          document.getElementsByClassName("center")[1].style.display = "block";
          document.getElementsByClassName("center")[0].style.width = "400px";
          document.getElementsByClassName("center")[0].style.height = "800px";
          document.getElementsByClassName("center")[1].style.width = "400px";
          document.getElementsByClassName("center")[1].style.height = "800px";
          myWidget.vueObject.marigold = data
        });
        subscribeData.subscribe('lotusPublish', function(data) {
          document.getElementsByClassName("center")[2].style.display = "block";
          document.getElementsByClassName("center")[0].style.width = "400px";
          document.getElementsByClassName("center")[0].style.height = "400px";
          document.getElementsByClassName("center")[1].style.width = "400px";
          document.getElementsByClassName("center")[1].style.height = "400px";
          document.getElementsByClassName("center")[2].style.width = "800px";
          document.getElementsByClassName("center")[2].style.height = "400px";
          myWidget.vueObject.lotus = data
        });
        subscribeData.subscribe('sunflowerPublish', function(data) {
          document.getElementsByClassName("center")[3].style.display = "block";
          document.getElementsByClassName("center")[0].style.width = "400px";
          document.getElementsByClassName("center")[0].style.height = "400px";
          document.getElementsByClassName("center")[1].style.width = "400px";
          document.getElementsByClassName("center")[1].style.height = "400px";
          document.getElementsByClassName("center")[2].style.width = "400px";
          document.getElementsByClassName("center")[2].style.height = "400px";
          document.getElementsByClassName("center")[3].style.width = "400px";
          document.getElementsByClassName("center")[3].style.height = "400px";
          myWidget.vueObject.sunflower = data
        });
      },
    };
    return myWidget;
  });
