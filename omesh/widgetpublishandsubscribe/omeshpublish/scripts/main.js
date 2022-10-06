define("omeshpublish/scripts/main", ["DS/vue/vue", 'DS/i3DXCompassServices/i3DXCompassPubSub'],
  function (Vue, PublishData) {
    var myWidget = {
      vueObject: "",
      onLoad: function () {
        myWidget.vueObject = new Vue({
          el: "#app",
          data: {
            rose: "https://www.steepgraphdev21x.com/3dspace/webapps/omeshpublish/images/Rose.jpg",
            marigold: "https://www.steepgraphdev21x.com/3dspace/webapps/omeshpublish/images/Marigold.jpg",
            lotus: "https://www.steepgraphdev21x.com/3dspace/webapps/omeshpublish/images/Lotus.jpg",
            sunflower: "https://www.steepgraphdev21x.com/3dspace/webapps/omeshpublish/images/Sunflower.jpg",
          },
          methods: {
            publishEvent() {
              myWidget.eventPublish()
            },
            publishEvent1() {
              myWidget.eventPublish1()
            },
            publishEvent2() {
              myWidget.eventPublish2()
            },
            publishEvent3() {
              myWidget.eventPublish3()
            }
          }
        });
      },
      eventPublish: function () {
        debugger
        PublishData.publish('rosePublish', myWidget.vueObject.rose);
      },
      eventPublish1: function () {
        PublishData.publish('marigoldPublish', myWidget.vueObject.marigold);
      },
      eventPublish2: function () {
        PublishData.publish('lotusPublish', myWidget.vueObject.lotus);
      },
      eventPublish3: function () {
        PublishData.publish('sunflowerPublish', myWidget.vueObject.sunflower);
      }
    };
    widget.myWidget = myWidget;
    return myWidget;
  });
